import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <img src={logo} alt="Logo" style={{ height: '70px' }}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hackathon
          </Typography>
         < Button color="inherit" component={Link} to="/student" sx={{ '&:hover': { backgroundColor: 'white' ,color:'black' } }}>
            Student
          </Button>

          <Button color="inherit" component={Link} to="/course" sx={{ '&:hover': { backgroundColor: 'white' ,color:'black' } }}>
            Course
          </Button>
          <Button color="inherit" component={Link} to="/attendance" sx={{ '&:hover': { backgroundColor: 'white' ,color:'black' } }}>
            Attendance
          </Button>
          {/* <Button color="inherit" component={Link} to="/dashboard" sx={{ '&:hover': { backgroundColor: 'white' ,color:'black' } }}>
            Dashboard
          </Button> */}

        </Toolbar>
      </AppBar>
    </Box>
  );
}