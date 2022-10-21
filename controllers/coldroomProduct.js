const ColdroomProduct = require("../models/coldroom-product");
// const Coldroom = require("../models/coldroom");
// const ProductType = require("../models/product-type");

exports.getColdroomProducts = async (req, res, next) => {
  try {
    const coldroomProducts = await ColdroomProduct.findAll();
    res.status(200).json(coldroomProducts);
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch ColdroomProduct",
    });
  }
};

exports.getColdroomProduct = async (req, res, next) => {
  try {
    const coldroomProduct = await ColdroomProduct.findByPk(req.params.id);
    if (!coldroomProduct) {
      res.status(404).json({
        msg: `There is no ColdroomProduct with id=${req.params.id}`,
      });
    }
    res.status(200).json(coldroomProduct);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch ColdroomProduct",
    });
  }
};

exports.createColdroomProduct = async (req, res, next) => {
  try {
    const coldroomProduct = await ColdroomProduct.create({
      price: req.body.price,
      productTypeId: req.body.productTypeId,
      coldroomId: req.body.coldroomId,
    });

    res.status(201).json(coldroomProduct);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add ColdroomProduct",
      error: e
    });
  }
};

exports.updateColdroomProduct = async (req, res, next) => {
  try {

    const coldroomProduct = await ColdroomProduct.findByPk(req.params.id);
    coldroomProduct.price = req.body.price;
    coldroomProduct.coldroomId = req.body.coldroomId;
    coldroomProduct.productTypeId = req.body.productTypeId;

    const updatedColdroomProduct = await coldroomProduct.save();
    res.status(200).json(updatedColdroomProduct);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update ColdroomProduct",
    });
  }
}; 

exports.deleteColdroomProduct = async (req, res, next) => {
  try {
    const coldroomProduct = await ColdroomProduct.findByPk(req.params.id);

    const deletedColdroomProduct = await coldroomProduct.destroy();
    res.status(200).json(deletedColdroomProduct);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a ColdroomProduct",
    });
  }
};
