const db = require("../db/config");

const queryPromise = async (query) =>{
    return new Promise((resolve, reject)=>{
        db.query(query,  (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
};
 const checkUserLogin = async (data) => {
    let query = `select * from login where userName='${data?.username}' and password='${data?.password}'`;
    let getData = await queryPromise(query);
    if(getData.length == 0) return {code: 422, message: "Invalid Username/password."};
    return {code: 200, data: getData};
}

 const createEmpployeeSer = async (data) => {
    const { email, mobile, designation, gender, course, name, image } = data;
    let query = `select * from employee where email='${data?.email}'`;
    let getData = await queryPromise(query);
    if(getData.length >= 1) return {code: 422, message: "Duplicate Email."};
    let saveQuery = `insert into employee (email, mobile, designation, gender, course, name, image) 
                        values ('${email}', '${mobile}', '${designation}', '${gender}', '${course}', '${name}', '${image}')`;
    let saveData = await queryPromise(saveQuery);
    if(!saveData) return {code: 422, message: "Data is not saved."};
    return {code: 200, data: saveData};
};

 const EditEmpployee = async (data) => {
    const { email, mobile, designation, gender, course, name, image,id } = data;
    let saveQuery = `update employee set email='${email}', mobile='${mobile}', name='${name}',designation='${designation}', gender='${gender}', 
        course='${course}', image='${image}' where id='${id}'`;
    let updateData = await queryPromise(saveQuery);
    if(!updateData) return {code: 422, message: "Data is not Updated."};
    return {code: 200, data: updateData};
};

 const deleteEmpSer = async (data) => {
    let saveQuery = `delete from employee where id='${data?.id}'`;
     await queryPromise(saveQuery);
    return {code: 200, data: []};
};

 const getAllEmployees = async () => {
    let saveQuery = `select * from employee;`;
    let updateData = await queryPromise(saveQuery);
    if(updateData.length < 1) return {code: 422, message: "Data does't exits."};
    return {code: 200, data: updateData};
};
		
module.exports = {
    getAllEmployees,
    EditEmpployee,
    checkUserLogin,
    createEmpployeeSer,
    deleteEmpSer

}