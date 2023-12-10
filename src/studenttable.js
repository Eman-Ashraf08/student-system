import React from 'react';
import Table from 'react-bootstrap/Table';
import Dashboard from './dashboard';
import { useNavigate } from 'react-router-dom';

function Studenttable({ studentData, handleEdit, handleDelete, students, setStudents }) {
  const navigate = useNavigate();

  const showAlert = () => {
    alert('Data inserted/deleted successfully!');
  };

  const handleEditAction = (id) => {
    // Implement your edit logic using the id
    handleEdit(id);
    // Navigate to the student form after edit
    navigate('/student');
  };

  const handleDeleteAction = (id) => {
    // Implement your delete logic using the id
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
    showAlert();
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <Dashboard />
        </div>
        <div className="col-md-7">
          <h1>Student Table</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {studentData.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.studentName}</td>
                  <td>{row.contactInfo}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => handleEditAction(row.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => handleDeleteAction(row.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Studenttable;