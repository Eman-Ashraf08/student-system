import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Student from './student';
import Course from './course';
import Attendance from './attendance';
import Dashboard from './dashboard';
import Studenttable from './studenttable';
import Coursetable from './coursetable';
import Attendancetable from './attendancetable';

function App() {
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [attendances, setAttendances] = useState([]);

  const addCourse = (newCourse) => {
    setCourses([...courses, newCourse]);
  };

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const addAttendance = (newAttendance) => {
    setAttendances([...attendances, newAttendance]);
  };

  const handleEdit = (id) => {
    console.log(`Edit clicked for id: ${id}`);
    // Implement your edit logic using the id
  };

  const handleDelete = (id) => {
    console.log(`Delete clicked for id: ${id}`);
    // Implement your delete logic using the id
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/student" element={<Student addStudent={addStudent} handleEdit={handleEdit}/>} />
        <Route path="/course" element={<Course addCourse={addCourse} handleEdit={handleEdit} />}/>
        <Route path="/attendance" element={<Attendance addAttendance={addAttendance} handleEdit={handleEdit} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/studenttable" element={<Studenttable studentData={students} handleEdit={handleEdit} handleDelete={handleDelete} students={students} setStudents={setStudents}/>} />
        <Route path="/coursetable" element={<Coursetable courseData={courses} handleEdit={handleEdit} handleDelete={handleDelete} courses={courses} setCourses={setCourses}/>}/>
        <Route path="/attendancetable" element={<Attendancetable attendanceData={attendances} handleEdit={handleEdit} handleDelete={handleDelete} attendances={attendances} setAttendances={setAttendances}/>}/>

      </Routes>
    </Router>
  );
}

export default App;