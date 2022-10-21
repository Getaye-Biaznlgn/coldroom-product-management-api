const Employee = require("../models/employee");
exports.getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.findAll();
  
    res.status(200).json(employees);
  
  } catch (e) {
    res.status(404).json({
      msg: "faild to fetch Employee",
    });
  }
}; 

exports.getEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      res.status(404).json({
        msg: `There is no Employee with id=${req.params.id}`,
      });
    }
    res.status(200).json(employee);
  } catch (e) {
    res.status(404).json({
      msg: "Faild to fetch Employee",
    });
  }
};

exports.createEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.create({
      lname: req.body.lname,
      fname: req.body.fname,
      sex: req.body.sex,
      phoneNo: req.body.phoneNo,
      email:req.body.email,
      role: req.body.role
    });

    res.status(201).json(employee);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to add Employee",
      error: e
    });
  }
};

exports.updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    employee.lname = req.body.lname;
    employee.fname = req.body.fname;
    employee.sex = req.body.sex;
    employee.phoneNo= req.body.phoneNo
    employee.email = req.body.email;
    employee.role = req.body.role;

    const updatedEmployee = await employee.save();
    res.status(200).json(updatedEmployee);
  } catch (e) {
    res.status(422).json({
      msg: "Faild to update employee",
    });
  }
};

exports.deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByPk(req.params.id);

    const deletedEmployee = await employee.destroy();
    res.status(200).json(
        {
            msg:"Successfully deleted",
            data:{
                ...deletedEmployee.dataValues
            }
        }
    );
  } catch (e) {
    res.status(404).json({
      msg: "Faild to delete a Employee",
    });
  }
};
