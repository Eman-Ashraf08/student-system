import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from 'mdb-react-ui-kit';
import './style2.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ButtonAppBar from './navbar';

function Attendance({ addAttendance }) {
  const [studentId, setStudentId] = useState('');
  const [courseId, setCourseId] = useState('');
  const [date, setDate] = useState('');
  const [studentStatus, setStudentStatus] = useState(''); 
  const navigate = useNavigate();

  const handleStudentIdChange = (event) => {
    setStudentId(event.target.value);
  };

  const handleCourseIdChange = (event) => {
    setCourseId(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleStatusChange = (status) => {
    setStudentStatus(status);
  };



  const handleSubmit = () => {
    const newAttendance = {
      id: new Date().getTime(),
      studentId,
      courseId,
      date,
      status: studentStatus,
    };

    addAttendance(newAttendance);

    // Navigate back to the attendance table after a successful submit
    navigate('/attendancetable');
  };

  return (
    <div style={{ backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
      <ButtonAppBar />
      <MDBContainer
        fluid
        className='d-flex align-items-center justify-content-center bg-image'
        style={{
          backgroundImage:
            'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)',
        }}
      >
        <div className='mask gradient-custom-3'></div>
        <MDBCard
          className='m-5'
          style={{ maxWidth: '600px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        >
          <MDBCardBody className='px-5'>
            <h2 className='text-uppercase text-center mb-5'>Attendance Form</h2>

            {/* Student ID Selector */}
            <label style={{ marginBottom: '8px', display: 'block', color: '#555' }}>
              Student ID
            </label>
            <select
              value={studentId}
              onChange={handleStudentIdChange}
              className='form-select mb-4'
            >
              <option value="">-- Select --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {/* Course ID Selector */}
            <label style={{ marginBottom: '8px', display: 'block', color: '#555' }}>
              Course ID
            </label>
            <select
              value={courseId}
              onChange={handleCourseIdChange}
              className='form-select mb-4'
            >
              <option value="">-- Select --</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            {/* Date Input */}
            <label style={{ marginBottom: '8px', display: 'block', color: '#555' }}>
              Date
            </label>
            <MDBInput
              wrapperClass='mb-4'
              label='Date'
              size='md'
              id='date'
              type='date'
              value={date}
              onChange={handleDateChange}
            />

            {/* Status Input */}
            <label style={{ marginBottom: '8px', display: 'block', color: '#555' }}>
              Status
            </label>
            <div className="mb-4">
              <label className="radio-label">
                <input
                  type="radio"
                  value="present"
                  checked={studentStatus === 'present'}
                  onChange={() => handleStatusChange('present')}
                />
                Present
              </label><br></br>
              <label className="radio-label">
                <input
                  type="radio"
                  value="absent"
                  checked={studentStatus === 'absent'}
                  onChange={() => handleStatusChange('absent')}
                />
                Absent
              </label>
            </div>

            {/* Submit Button */}
            <MDBBtn
              className='mb-4 w-100 gradient-custom-4'
              size='lg'
              onClick={handleSubmit}
              style={{ fontWeight: 'bold' }}
            >
              Submit
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default Attendance;
