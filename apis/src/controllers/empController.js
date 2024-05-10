const { createEmpployeeSer, checkUserLogin, EditEmpployee, getAllEmployees, deleteEmpSer } = require("../services/empServices");

 const loginController = async (req, res) => {
  let body = req.body;
  const { username, password } = body;
  if(!username) return {code: 422, message: "Provide UserName."};
  if(!password) return {code: 422, message: "Provide UserName."};
  let checkData = await checkUserLogin(body);
  res.send(checkData);
};

const creatingEmployee = async (req, res) => {
  let body = req.body;
  let checkData = await createEmpployeeSer(body);
  res.send(checkData);
};

 const updateEmployee = async (req, res) => {
  let body = req.body;
  if(!body.id) return {code: 422, message: "Provide id."};
  let checkData = await EditEmpployee(body);
  res.send(checkData);
};
 const deleteEmployee = async (req, res) => {
  let body = req.body;
  if(!body.id) return {code: 422, message: "Provide id."};
  let checkData = await deleteEmpSer(body);
  res.send(checkData);
};

 const getAllData = async (req, res) => {
  let checkData = await getAllEmployees();
  res.send(checkData);
};


module.exports = { loginController, creatingEmployee, updateEmployee, getAllData, deleteEmployee};