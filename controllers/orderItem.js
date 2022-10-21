const OrderItem = require("../models/orderItem-item");
exports.getOrderItems = async (req, res, next) => {
  try {
    const orderItems = await OrderItem.findAll();

    res.status(200).json(orderItems);
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch OrderItem",
    });
  }
};

exports.getOrderItem = async (req, res, next) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    if (!orderItem) {
      res.status(404).json({
        msg: `There is no OrderItem with id=${req.params.id}`,
      });
    }
    res.status(200).json(orderItem);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch OrderItem",
    });
  }
};

exports.createOrderItem = async (req, res, next) => {
  try {
    const orderItem = await OrderItem.create({
      quantity: req.body.quantity,
      price: req.body.price,
      farmerProductId: req.body.farmerProductId,
      orderId: req.body.orderId,
    
    });

    res.status(201).json(orderItem);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add OrderItem",
      error: e,
    });
  }
};

exports.updateOrderItem = async (req, res, next) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);
    orderItem.price = req.body.price;
    orderItem.quantity = req.body.quantity;
    orderItem.farmerProductId = req.body.farmerProductId;
    orderItem.orderId = req.body.orderId;

    const updatedOrderItem = await orderItem.save();
    res.status(200).json(updatedOrderItem);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update OrderItem",
    });
  }
};

exports.deleteOrderItem = async (req, res, next) => {
  try {
    const orderItem = await OrderItem.findByPk(req.params.id);

    const deletedOrderItem = await orderItem.destroy();
    res.status(200).json({
      msg: "Successfully deleted",
      data: {
        ...deletedOrderItem.dataValues,
      },
    });
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a OrderItem",
    });
  }
};
