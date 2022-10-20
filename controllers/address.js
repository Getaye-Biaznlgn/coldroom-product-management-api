const Address = require("../models/address");
exports.getAddresses = async (req, res, next) => {
  try {
    const addresses = await Address.findAll();

    // if (addresses?.length < 1) {
    //   res.status(404).json({
    //     msg: "Address isn't found",
    //   });
    // }

    res.status(200).json(addresses);
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch address",
    });
  }
};

exports.getAddress = async (req, res, next) => {
  try {
    const address = await Address.findByPk(req.params.id);
    if (!address) {
      res.status(404).json({
        msg: `There is no Address with id=${req.params.id}`,
      });
    }
    res.status(200).json(address);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch Address",
    });
  }
};

exports.createAddress = async (req, res, next) => {
  try {
    const address = await Address.create({
      region: req.body.region,
      kebele: req.body.kebele,
      woreda: req.body.woreda,
    });

    res.status(201).json(address);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add Address",
    });
  }
};

exports.updateAddress = async (req, res, next) => {
  try {
    const address = await Address.findByPk(req.params.id);
    address.region = req.body.region;
    address.woreda = req.body.woreda;
    address.kebele = req.body.kebele;

    const updatedAddress = await address.save();
    res.status(200).json(updatedAddress);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update Address",
    });
  }
};

exports.deleteAddress = async (req, res, next) => {
  try {
    const address = await Address.findByPk(req.params.id);

    const deletedAddress = await address.destroy();
    res.status(200).json({
      msg: "deleted successfully",
      ...deletedAddress.dataValues,
    });
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a Address",
    });
  }
};
