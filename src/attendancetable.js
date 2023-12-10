import React from 'react';
import Table from 'react-bootstrap/Table';
import Dashboard from './dashboard';
import { useNavigate } from 'react-router-dom';

function Attendancetable({ attendanceData, handleEdit, handleDelete, attendances, setAttendances }) {
  const navigate = useNavigate();

  const showAlert = () => {
    alert('Data inserted/deleted successfully!');
  };

  const handleEditAction = (id) => {
    // Implement your edit logic using the id
    handleEdit(id);
    // Navigate to the course form after edit
    navigate('/attendance');
  };

  const handleDeleteAction = (id) => {
    // Implement your delete logic using the id
    const updatedAttendances = attendances.filter(attendance => attendance.id !== id);
    setAttendances(updatedAttendances);
    showAlert();
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3">
          <Dashboard />
        </div>
        <div className="col-md-8">
        <h1>Attendance Table</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Student ID</th>
                <th>Course ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.studentID}</td>
                  <td>{row.courseID}</td>
                  <td>{row.date}</td>
                  <td>{row.status}</td>
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

export default Attendancetable;