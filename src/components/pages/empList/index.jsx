import React, { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import CreateModal from "../../common/createModal";
import axios from "axios";
import { postRequest } from "../../../utils/apiRequest";

export default function EmployeesList() {
const [isFormOpen, setFormOpen] = useState(false);

  const [totalCount, setTotalCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const [editFormData, setEditFormData] = useState({});  

  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const getAllEmplyees = async () => {
    let getData = await postRequest("getAllEmp", "");
    setData(getData);
  }

  useEffect(() => {
    getAllEmplyees();
  }, []);
  
  const handleCreateEmployee = () => {
    setFormOpen(true);
    setEditFormData({});
    setModalTitle("Create");
    // navigate(CREATE_EMPLOYEE);
  };
  const filteredData = (data || []).filter((item) =>
    String(item.name).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    String(item.designation).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    String(item.course).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    String(item.gender).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
    String(item.id).toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) 
  );
  const handleEdit=(id)=>{
    let filterData = (data || []).find(obj => obj.id === id);
    setEditFormData(filterData);
    setFormOpen(true);
    setModalTitle("Update");
  }
  const handleDelete = async (id) => {
    await postRequest("deleteEmployee", {id: id});
    await getAllEmplyees();
  };

  const handleFormData =async (values)=> {
  await postRequest(modalTitle === "Create" ? "createEmployee": "editEmployee", values);
    await getAllEmplyees();
  }

  const renderForm = () => {
    return <CreateModal
     handleClose={() => setFormOpen(false)}
     show={isFormOpen}
     handleFormData={handleFormData}
     editFormData={editFormData}
     modalTitle={modalTitle}
    />
  }

  return (
    <div className="display_EmpList">
      {isFormOpen && renderForm()}
      <h4 className="h4">EmployeesList</h4>
      <div className="topMenu">
       <span className="totalCountTag mt-4">TotalCount:{data?.length || 0}</span>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleCreateEmployee}
        >
          Create Employee
        </button>
      </div>
      <div className="emp_Table">
        <div className="searchInput">
          <label className="">Search</label>
          <input
            className="inputSearch"
            type="text"
            placeholder="Enter Search KeyWord "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Unique id</th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Designation</th>
              <th>gender</th>
              <th>course</th>
              <th>Create date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {(filteredData ||[])?.map((obj) => (
              <tr key={obj.id}>
                <td>{obj.id}</td>
                <td>
                  <img src={obj.image} alt="item.name" />
                </td>
                <td>{obj.name}</td>
                <td>{obj.email}</td>
                <td>{obj.mobile}</td>
                <td>{obj.designation}</td>
                <td>{obj.gender}</td>
                <td>{obj.course}</td>
                <td>{obj.createdDate}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-success"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={() => handleEdit(obj.id)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-success" onClick={() => handleDelete(obj.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
