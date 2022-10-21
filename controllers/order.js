const Order = require("../models/order");
exports.getOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll();

    res.status(200).json(orders);
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch Order",
    });
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) {
      res.status(404).json({
        msg: `There is no Order with id=${req.params.id}`,
      });
    }
    res.status(200).json(order);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch Order",
    });
  }
};

exports.createOrder = async (req, res, next) => {
  try {
    const order = await Order.create({
      paymentStatus: req.body.paymentStatus,
      orderStatus: req.body.orderStatus,
      totalPrice: req.body.totalPrice,
      paidAmount: req.body.paidAmount,
      wholeselerId: req.body.wholeselerId,
      coldroomId: req.body.coldroomId,
    });

    res.status(201).json(order);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add Order",
      error: e,
    });
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);
    order.paymentStatus = req.body.paymentStatus;
    order.orderStatus = req.body.orderStatus;
    order.totalPrice = req.body.totalPrice;
    order.paidAmount = req.body.paidAmount;
    order.wholeselerId = req.body.wholeselerId;
    order.coldroomId = req.body.coldroomId;

    const updatedOrder = await order.save();
    res.status(200).json(updatedOrder);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update Order",
    });
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const order = await Order.findByPk(req.params.id);

    const deletedOrder = await order.destroy();
    res.status(200).json({
      msg: "Successfully deleted",
      data: {
        ...deletedOrder.dataValues,
      },
    });
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a Order",
    });
  }
};
