const Farmer = require("../models/farmer");
exports.getFarmers = async (req, res, next) => {
  try {
    const farmers = await Farmer.findAll();
    // if (farmers?.length < 1) {
    //     res.status(404).json({
    //       msg: "Farmer isn't found",
    //     });
    //   }
    res.status(200).json(farmers);
  
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch Farmer",
    });
  }
}; 

exports.getFarmer = async (req, res, next) => {
  try {
    const farmer = await Farmer.findByPk(req.params.id);
    if (!farmer) {
      res.status(404).json({
        msg: `There is no Farmer with id=${req.params.id}`,
      });
    }
    res.status(200).json(farmer);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch Farmer",
    });
  }
};

exports.createFarmer = async (req, res, next) => {
  try {
    const farmer = await Farmer.create({
      lname: req.body.lname,
      fname: req.body.fname,
      sex: req.body.sex,
      phoneNo: req.body.phoneNo,
      addressId:req.body.addressId
    });

    res.status(201).json(farmer);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add Farmer",
      error: e
    });
  }
};

exports.updateFarmer = async (req, res, next) => {
  try {
    const farmer = await Farmer.findByPk(req.params.id);
    farmer.lname = req.body.lname;
    farmer.fname = req.body.fname;
    farmer.sex = req.body.sex
    farmer.phoneNo= req.body.phoneNo

    const updatedFarmer = await farmer.save();
    res.status(200).json(updatedFarmer);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update Farmer",
    });
  }
};

exports.deleteFarmer = async (req, res, next) => {
  try {
    const farmer = await Farmer.findByPk(req.params.id);

    const deletedFarmer = await farmer.destroy();
    res.status(200).json(
        {
            msg:"Successfully deleted",
            data:{
                ...deletedFarmer.dataValues
            }
        }
    );
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a Farmer",
    });
  }
};
