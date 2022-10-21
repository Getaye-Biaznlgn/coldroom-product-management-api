const ProductType = require("../models/product-type");
exports.getProductTypes = async (req, res, next) => {
  try {
    const productTypes = await ProductType.findAll();
  
    res.status(200).json(productTypes);
  
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch ProductType",
    });
  }
}; 

exports.getProductType = async (req, res, next) => {
  try {
    const productType = await ProductType.findByPk(req.params.id);
    if (!productType) {
      res.status(404).json({
        msg: `There is no productType with id=${req.params.id}`,
      });
    }
    res.status(200).json(productType);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch productType",
    });
  }
};

exports.createProductType = async (req, res, next) => {
  try {
    const productType = await ProductType.create({
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
      productId:req.body.productId 
    });

    res.status(201).json(productType);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add productType",
      error: e
    });
  }
}; 

exports.updateProductType = async (req, res, next) => {
  try {
    const productType = await ProductType.findByPk(req.params.id);
    productType.title = req.body.title;
    productType.image = req.body.image;
    productType.description = req.body.description
    productType.productId= req.body.productId

    const updatedProductType = await productType.save();
    res.status(200).json(updatedProductType);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update ProductType",
    });
  }
};

exports.deleteProductType = async (req, res, next) => {
  try {
    const productType = await ProductType.findByPk(req.params.id);

    const deletedProductType = await productType.destroy();
    res.status(200).json(
        {
            msg:"Successfully deleted",
            data:{
                ...deletedProductType.dataValues
            }
        }
    );
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a ProductType",
    });
  }
};
