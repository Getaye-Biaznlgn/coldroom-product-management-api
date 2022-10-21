const Wholesaler = require("../models/wholesaler");
exports.getWholesalers = async (req, res, next) => {
  try {
    const wholesalers = await Wholesaler.findAll();
  
    res.status(200).json(wholesalers);
  
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch Wholesaler",
    });
  }
}; 

exports.getWholesaler = async (req, res, next) => {
  try {
    const wholesaler = await Wholesaler.findByPk(req.params.id);
    if (!wholesaler) {
      res.status(404).json({
        msg: `There is no Wholesaler with id=${req.params.id}`,
      });
    }
    res.status(200).json(wholesaler);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch Wholesaler",
    });
  }
};

exports.createWholesaler = async (req, res, next) => {
  try {
    const wholesaler = await Wholesaler.create({
      fname: req.body.fname,
      lname:req.body.lname,
      phoneNo: req.body.phoneNo
    });

    res.status(201).json(wholesaler);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add Wholesaler",
      error: e
    });
  }
};

exports.updateWholesaler = async (req, res, next) => {
  try {
    const wholesaler = await Wholesaler.findByPk(req.params.id);
    wholesaler.phoneNo = req.body.phoneNo;
    wholesaler.fname = req.body.fname;
    wholesaler.lname = req.body.lname;

    const updatedWholesaler = await wholesaler.save();
    res.status(200).json(updatedWholesaler);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update Wholesaler",
    });
  }
};

exports.deleteWholesaler = async (req, res, next) => {
  try {
    const wholesaler = await Wholesaler.findByPk(req.params.id);

    const deletedWholesaler = await wholesaler.destroy();
    res.status(200).json(
        {
            msg:"Successfully deleted",
            data:{
                ...deletedWholesaler.dataValues
            }
        }
    );
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a Wholesaler",
    });
  }
};
