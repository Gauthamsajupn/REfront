import React from 'react'
import { Button, Grid, Paper, TextField, Typography, } from '@mui/material'
import { Link } from 'react-router-dom'

const Signup = () => {
  const paperStyle={padding:20, height:'70vm', width:280, margin:"20px auto"}
  return (   
    <Grid >
      <Paper elevation={10} style={paperStyle}>
        <h1 color='primary'>Signup</h1>
        <TextField type= 'name' id="standard-basic" label="Username" variant="standard" /><br /><br />
        <TextField type= 'email'  label="Email" variant="standard" /> <br/><br />
        <TextField type= 'password'  label="Password" variant="standard" /><br/><br/>
        <TextField type= 'password'  label="Re-enter Password" variant="standard" /><br/><br/>
        <Button variant="contained" href="#contained-buttons">Signup</Button><br/><br />
        <Typography  variant='h7' color='primary'> 
          <Link to='/Login' style={{ color: 'primary', textDecoration: "none" }}> Already have an account</Link>
       </Typography>
      </Paper> 
   </Grid>
  )
}

export default Signup