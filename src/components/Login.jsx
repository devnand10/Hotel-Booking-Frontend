import React from 'react'
import './style.css'

function Login() {
  return (
    <div>
    <div className='back'>
        <div className='aa'>
            <div className='head'>Home</div>
            <div className='head' style={{marginLeft:'10%'}}>About</div>
            <div className='head' style={{marginLeft:'20%'}}>Contact</div>
        </div>

        <div className='box'>
            <h2 style={{textAlign:'center', fontSize:'30px', marginTop:'10%'}}>LOGIN</h2>
            <input type="text" placeholder="Username" className='btn'/> <br />
            <input type="password" placeholder="Password" className='btn'/>
            <br />
            <button className='submit'>Login</button><br />
            {/* <a href="" className='forgot'>forgot password</a> */}
        </div>
    </div>
    <div className='footer'>
        <p style={{marginLeft:'-80%'}}> © 2024 All Rights Reserved by YourCompany </p>
        <p style={{marginLeft:'80%', marginTop:'-2%'}}>privacy policy | terms of service</p>
        </div>
    </div>
     
  )
}

export default Login
