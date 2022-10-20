const Coldroom = require("../models/coldroom");
exports.getColdrooms = async (req, res, next) => {
  try {
    const coldrooms = await Coldroom.findAll();
    //  if (coldrooms?.length < 1) {
    //   res.status(404).json({
    //     msg: "Coldroom isn't found",
    //   });
    // }
    res.status(200).json(coldrooms);
   
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch Coldroom",
    });
  }
};

exports.getColdroom = async (req, res, next) => {
  try {
    const coldroom = await Coldroom.findByPk(req.params.id);
    if (!Coldroom) {
      res.status(404).json({
        msg: `There is no Coldroom with id=${req.params.id}`,
      });
    }
    res.status(200).json(coldroom);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch Coldroom",
    });
  }
};

exports.createColdroom = async (req, res, next) => {
  try {
    const coldroom = await Coldroom.create({
      name: req.body.name,
      lng: req.body.lng,
      lat: req.body.lat,
      addressId: req.body.addressId
    });

    res.status(201).json(coldroom);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add Coldroom",
      error: e
    });
  }
};

exports.updateColdroom = async (req, res, next) => {
  try {
    const coldroom = await Coldroom.findByPk(req.params.id);
    coldroom.name = req.body.name;
    coldroom.lng = req.body.lng;
    coldroom.lat = req.body.lat

    const updatedColdroom = await coldroom.save();
    res.status(200).json(updatedColdroom);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update Coldroom",
    });
  }
};

exports.deleteColdroom = async (req, res, next) => {
  try {
    const coldroom = await Coldroom.findByPk(req.params.id);

    const deletedColdroom = await coldroom.destroy();
    res.status(200).json(deletedColdroom);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a Coldroom",
    });
  }
};
