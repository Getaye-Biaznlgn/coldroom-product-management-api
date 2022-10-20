const Product = require("../models/product");
exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.findAll();
    //   if (products?.length < 1) {
    //   res.status(404).json({
    //     msg: "Product isn't added",
    //   });
    // }
    res.status(200).json(products);
  
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch product",
    });
  }
};

exports.getProduct = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    if (!product) {
      res.status(404).json({
        msg: `There is no product with id=${req.params.id}`,
      });
    }
    res.status(200).json({
      id: product.id,
      name: product.name,
      image: product.image,
    });
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch product",
    });
  }
};

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      image: req.body.image,
    });

    res.status(201).json({
      id: product.id,
      name: product.name,
      image: product.image,
    });
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add product",
    });
  }
};

exports.updateProduct = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);
    product.name = req.body.name;
    product.image = req.body.image;

    const updatedProduct = await product.save();
    res.status(200).json(updatedProduct);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update product",
    });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const product = await Product.findByPk(req.params.id);

    const deletedProduct = await product.destroy();
    res.status(200).json(deletedProduct);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a product",
    });
  }
};
