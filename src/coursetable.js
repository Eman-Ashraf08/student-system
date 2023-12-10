import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import Dashboard from './dashboard';

function Coursetable({ courseData, handleEdit, handleDelete, courses, setCourses }) {
  const navigate = useNavigate();

  const showAlert = () => {
    alert('Data inserted/deleted successfully!');
  };

  const handleEditAction = (id) => {
    // Implement your edit logic using the id
    handleEdit(id);
    // Navigate to the course form after edit
    navigate('/course');
  };

  const handleDeleteAction = (id) => {
    // Implement your delete logic using the id
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses);
    showAlert();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Dashboard />
          </div>
          <div className="col-md-8">
            <h1>Course Table</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Course Name</th>
                  <th>Course Code</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {courseData.map((row, index) => (
                  <tr key={row.id}>
                    <td>{index + 1}</td>
                    <td>{row.courseName}</td>
                    <td>{row.courseCode}</td>
                    <td>{row.description}</td>
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
    </>
  );
}

export default Coursetable;

