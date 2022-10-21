const FarmerProduct = require("../models/farmer-product");
const Product = require("../models/farmer-product");
const ProductType = require("../models/product-type");

exports.getFarmerProducts = async (req, res, next) => {
  try {
    const farmerProducts = await FarmerProduct.findAll();
    res.status(200).json(farmerProducts);
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch farmerProduct",
    });
  }
};

exports.getFarmerProduct = async (req, res, next) => {
  try {
    const farmerProduct = await FarmerProduct.findByPk(req.params.id);
    if (!farmerProduct) {
      res.status(404).json({
        msg: `There is no farmerProduct with id=${req.params.id}`,
      });
    }
    res.status(200).json(farmerProduct);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch farmerProduct",
    });
  }
};

exports.createFarmerProduct = async (req, res, next) => {
  try {
    // const productType= await ProductType.findByPk(req.body.productTypeId,{include: Product})
    const farmerProduct = await FarmerProduct.create({
      quality: req.body.quality,
      productionDate: req.body.productionDate,
      productSku: req.body.productSku,
      quantity: req.body.quantity,
      productTypeId: req.body.productTypeId,
      farmerId: req.body.farmerId,
      // productId: productType.produ,
    });

    res.status(201).json(farmerProduct);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add farmerProduct",
      error: e
    });
  }
};

exports.updateFarmerProduct = async (req, res, next) => {
  try {
    const productType = await ProductType.findByPk(req.body.productTypeId,{include: Product})

    const farmerProduct = await FarmerProduct.findByPk(req.params.id);
    farmerProduct.quality = req.body.quality;
    farmerProduct.productionDate = req.body.productionDate;
    farmerProduct.productSku = req.body.productSku;
    farmerProduct.quantity = req.body.quantity;
    farmerProduct.productTypeId = req.body.productTypeId;
    farmerProduct.farmerId = req.body.farmerId;
    farmerProduct.productId = productType.product.id;

    const updatedFarmerProduct = await FarmerProduct.save();
    res.status(200).json(updatedFarmerProduct);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update FarmerProduct",
    });
  }
}; 

exports.deleteFarmerProduct = async (req, res, next) => {
  try {
    const farmerProduct = await farmerProduct.findByPk(req.params.id);

    const deletedFarmerProduct = await farmerProduct.destroy();
    res.status(200).json(deletedFarmerProduct);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a farmerProduct",
    });
  }
};
