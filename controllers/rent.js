const Rent = require("../models/rent");
exports.getRents = async (req, res, next) => {
  try {
    const rents = await Rent.findAll();
  
    res.status(200).json(rents);
  
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch Rent",
    });
  }
}; 

exports.getRent = async (req, res, next) => {
  try {
    const rent = await Rent.findByPk(req.params.id);
    if (!rent) {
      res.status(404).json({
        msg: `There is no Rent with id=${req.params.id}`,
      });
    }
    res.status(200).json(rent);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch Rent",
    });
  }
};

exports.createRent = async (req, res, next) => {
  try {
    const rent = await Rent.create({
      price: req.body.price,
      coldroomId:req.body.coldroomId
    });

    res.status(201).json(rent);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add Rent",
      error: e
    });
  }
};

exports.updateRent = async (req, res, next) => {
  try {
    const rent = await Rent.findByPk(req.params.id);
    rent.coldroomId = req.body.coldroomId;
    rent.price = req.body.price;

    const updatedRent = await rent.save();
    res.status(200).json(updatedRent);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update Rent",
    });
  }
};

exports.deleteRent = async (req, res, next) => {
  try {
    const rent = await rent.findByPk(req.params.id);

    const deletedRent = await Rent.destroy();
    res.status(200).json(
        {
            msg:"Successfully deleted",
            data:{
                ...deletedRent.dataValues
            }
        }
    );
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a Rent",
    });
  }
};
