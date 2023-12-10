import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';
import './style2.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ButtonAppBar from './navbar';


function Student({ addStudent }) {
  const [studentName, setStudentName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const navigate = useNavigate();

 

  const handleSubmit = () => {
    const newStudent = {
      id: new Date().getTime(),
      studentName,
      contactInfo
    };

    addStudent(newStudent);

    // Navigate back to the course table after successful submit
    navigate('/studenttable');
  };
  return (
    <div>
        <ButtonAppBar/>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Student Form </h2>
          <label>Student Name</label>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='md' id='form1' type='text' onChange={(e) => setStudentName(e.target.value)}/>
          <label>Contact Info.</label>
          <MDBInput wrapperClass='mb-4' label='Contact Info' size='md' id='form2' type='text' onChange={(e) => setContactInfo(e.target.value)}/>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleSubmit}>Submit</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </div>

  );
}

export default Student;