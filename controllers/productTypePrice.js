// const ProductTypePrice = require("../models/product-type-price");
// exports.getProductTypePrices = async (req, res, next) => {
//   try {
//     const productTypePrices = await ProductTypePrice.findAll();
  
//     res.status(200).json(productTypePrices);
  
//   } catch (e) {
//     res.status(404).json({
//       msg: "faild to fetch ProductTypePrice",
//     });
//   }
// }; 

// exports.getProductTypePrice = async (req, res, next) => {
//   try {
//     const productTypePrice = await ProductTypePrice.findByPk(req.params.id);
//     if (!productTypePrice) {
//       res.status(404).json({
//         msg: `There is no productTypePrice with id=${req.params.id}`,
//       });
//     }
//     res.status(200).json(productTypePrice);
//   } catch (e) {
//     res.status(404).json({
//       msg: "Faild to fetch productTypePrice",
//     });
//   }
// };

// exports.createProductTypePrice = async (req, res, next) => {
//   try {
//     const productTypePrice = await ProductTypePrice.create({
//       price: req.body.price,
//       coldroomId: req.body.coldroomId,
//       productTypeId:req.body.productId 
//     });

//     res.status(201).json(productTypePrice);
//   } catch (e) {
//     res.status(422).json({
//       msg: "Faild to add productTypePrice",
//       error: e
//     });
//   }
// }; 

// exports.updateProductTypePrice = async (req, res, next) => {
//   try {
//     const productTypePrice = await ProductTypePrice.findByPk(req.params.id);
//     productTypePrice.price = req.body.price;
//     productTypePrice.coldroomId = req.body.coldroomId;
//     productTypePrice.productTypeId= req.body.productTypeId

//     const updatedProductTypePrice = await productTypePrice.save();
//     res.status(200).json(updatedProductTypePrice);
//   } catch (e) {
//     res.status(422).json({
//       msg: "Faild to update ProductTypePrice",
//     });
//   }
// };

// exports.deleteProductTypePrice = async (req, res, next) => {
//   try {
//     const productTypePrice = await ProductTypePrice.findByPk(req.params.id);

//     const deletedProductTypePrice = await productTypePrice.destroy();
//     res.status(200).json(
//         {
//             msg:"Successfully deleted",
//             data:{
//                 ...deletedProductTypePrice.dataValues
//             }
//         }
//     );
//   } catch (e) {
//     res.status(404).json({
//       msg: "Faild to delete a ProductTypePrice",
//     });
//   }
// };
