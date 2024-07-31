const Order = require("../models/Order");
const errorHandler = require("../utils/errorHandler");

//(get request example) localhost:5000/api/order?offset=5&limit=5
module.exports.getAll = async function (req, res) {
  try {
    // on front end we have filter of orders by date or by number => back end handle it
    const query = {
      user: req.user.id,
    };
    // if we get date to filter by date
    if (req.query.start) {
      query.date = {
        $gte: req.query.start, //gte => great or equel => moongoose feature
      };
    }

    if (req.query.end) {
      if (!query.date) {
        // we need to make sure that date property in query object will be created even if start date not defined
        query.date = {};
      }
      query.date["lte"] = req.query.end; //lte => less or equel => moongoose feature
    }

    //if user wand find specific order
    if (req.query.order) {
      query.order = Number(req.query.order);
    }

    const orders = await Order.find(query)
      .sort({ date: -1 }) // sort by date in descending order
      .skip(Number(req.query.offset)) //for pagination on front end
      .limit(Number(req.query.limit));
    res.status(200).json(orders);
  } catch (err) {
    errorHandler(res, err);
  }
};

module.exports.create = async function (req, res) {
  try {
    const lastOrder = await Order.findOne({ user: req.user.id }).sort({
      date: -1,
    }); // get last order of current user

    // if current user made at least one order => retriev it order property otherwise = 0
    const maxOrder = lastOrder ? lastOrder.order : 0;

    const order = await new Order({
      order: maxOrder + 1, // when we create new order => define it number. We get curent max number and add 1
      list: req.body.list,
      user: req.user.id,
    }).save();
    res.status(201).json(order);
  } catch (err) {
    errorHandler(res, err);
  }
};
