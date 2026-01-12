import React from 'react'
import { useNavigate } from 'react-router-dom'

function Rooms() {
    let nav = useNavigate()
    function navigate() {
        nav('/admin')
    }
  return (
    <div>
         <div className='back1'>
            <div className='aa'>
          <div className='head'>Home</div>
          <div className='head' style={{marginLeft:'10%'}}>About</div>
          <div className='head' style={{marginLeft:'20%'}}>Contact</div>
        </div>
        <div className='sidepanel'>
          <div className='side' onClick={navigate}>Dashboard</div>
          <div className='side'>Users</div>
          <div className='side'>Rooms</div>
          <div className='side'>Settings</div>
        </div>
        <div>
        <h1 style={{color:'white', marginLeft:'20%', marginTop:'7%', position:'absolute'}}>Rooms</h1>
            </div>
            <div>
                <div className='rooms'style={{marginLeft:'20%'}}>
                    <h4 style={{color:'black', marginLeft:'15%', marginTop:'10%', position:'absolute'}}>Room No: G1</h4>
                    <p style={{marginTop:'35%',marginLeft:'10%', id:'#'}}>Name:</p>
                    <p style={{marginLeft:'10%'}} id='#'>Phone No:</p>
                </div>
                <div className='rooms' style={{marginLeft:'32%'}}>
                    <h4 style={{color:'black', marginLeft:'15%', marginTop:'10%', position:'absolute'}}>Room No: G2</h4>
                    <p style={{marginTop:'35%',marginLeft:'10%', id:'#'}}>Name:</p>
                    <p style={{marginLeft:'10%'}} id='#'>Phone No:</p>
                </div>
                <div className='rooms' style={{marginLeft:'44%'}}>
                    <h4 style={{color:'black', marginLeft:'15%', marginTop:'10%', position:'absolute'}}>Room No: 101</h4>
                    <p style={{marginTop:'35%',marginLeft:'10%', id:'#'}}>Name:</p>
                    <p style={{marginLeft:'10%'}} id='#'>Phone No:</p>
                </div>
                <div className='rooms' style={{marginLeft:'32%'}}>
                    <h4 style={{color:'black', marginLeft:'15%', marginTop:'10%', position:'absolute'}}>Room No: 102</h4>
                    <p style={{marginTop:'35%',marginLeft:'10%', id:'#'}}>Name:</p>
                    <p style={{marginLeft:'10%'}} id='#'>Phone No:</p>
                </div>
                <div className='rooms' style={{marginLeft:'32%'}}>
                    <h4 style={{color:'black', marginLeft:'15%', marginTop:'10%', position:'absolute'}}>Room No: 103</h4>
                    <p style={{marginTop:'35%',marginLeft:'10%', id:'#'}}>Name:</p>
                    <p style={{marginLeft:'10%'}} id='#'>Phone No:</p>
                </div>
                <div className='rooms' style={{marginLeft:'32%'}}>
                    <h4 style={{color:'black', marginLeft:'15%', marginTop:'10%', position:'absolute'}}>Room No: G2</h4>
                    <p style={{marginTop:'35%',marginLeft:'10%', id:'#'}}>Name:</p>
                    <p style={{marginLeft:'10%'}} id='#'>Phone No:</p>
                </div>
            </div>

         </div>
      
    </div>
  )
}

export default Rooms
