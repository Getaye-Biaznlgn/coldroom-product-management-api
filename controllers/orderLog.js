const OrderLog = require("../models/order-log");
exports.getOrderLogs = async (req, res, next) => {
  try {
    const orderLogs = await OrderLog.findAll();

    res.status(200).json(orderLogs);
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch OrderLog",
    });
  }
};

exports.getOrderLog = async (req, res, next) => {
  try {
    const orderLog = await OrderLog.findByPk(req.params.id);
    if (!orderLog) {
      res.status(404).json({
        msg: `There is no OrderLog with id=${req.params.id}`,
      });
    }
    res.status(200).json(orderLog);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch OrderLog",
    });
  }
};

exports.createOrderLog = async (req, res, next) => {
  try {
    const orderLog = await OrderLog.create({
      paidAmount: req.body.paidAmount,
      employeeId: req.body.employeeId,
      orderId: req.body.orderId,
    
    });

    res.status(201).json(orderLog);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add OrderLog",
      error: e,
    });
  }
};

exports.updateOrderLog = async (req, res, next) => {
  try {
    const orderLog = await OrderLog.findByPk(req.params.id);
    orderLog.paidAmount = req.body.paidAmount;
    orderLog.employeeId = req.body.employeeId;
    orderLog.orderId = req.body.orderId;

    const updatedOrderLog = await orderLog.save();
    res.status(200).json(updatedOrderLog);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update OrderLog",
    });
  }
};

exports.deleteOrderLog = async (req, res, next) => {
  try {
    const orderLog = await OrderLog.findByPk(req.params.id);

    const deletedOrderLog = await orderLog.destroy();
    res.status(200).json({
      msg: "Successfully deleted",
      data: {
        ...deletedOrderLog.dataValues,
      },
    });
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a OrderLog",
    });
  }
};
