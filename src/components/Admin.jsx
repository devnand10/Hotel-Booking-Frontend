import React from 'react'

function Admin() {
  return (
    <div>
      <div className='back1'>
        <div className='aa'>
            <div className='head'>Home</div>
            <div className='head' style={{marginLeft:'10%'}}>About</div>
            <div className='head' style={{marginLeft:'20%'}}>Contact</div>
        </div>
        <div className='sidepanel'>
            <div className='side'>Dashboard</div>
            <div className='side'>Users</div>
            <div className='side'>Rooms</div>
            <div className='side'>Settings</div>
        </div>
        <div>
            <h1 style={{color:'white', marginLeft:'20%', marginTop:'7%', position:'absolute'}}>Welcome to Admin Panel</h1>
            <h3 style={{color:'white', marginLeft:'24%', marginTop:'10%', position:'absolute'}}>Guest & Room Management</h3>
        </div>
        <div className='addguest'>
            <h2 style={{textAlign:'center', color:'black'}}>Add New Guest</h2>
            <form style={{marginLeft:'10%'}}>
                <table style={{marginLeft:'-8.5%', width:'105%', marginTop:'3%'}}>
                    <tr>
                      {/* <th>Guest Name:</th> */}
                      <th>Room Number:</th>
                      {/* <th>Check-in Date:</th> */}
                      <th>Check-out Date:</th>  
                      <th>Phone Number</th>
                    </tr>
                    <tr>
                      <td><input type='text' placeholder='Enter Name' required className='addguests'/></td>
                      <td><input type='number' placeholder='Enter Room No.' required className='addguests'/></td>
                      <td><input type='date' required className='addguests' style={{width:'90%'}}/></td>
                      <td><input type='date' required className='addguests'/></td>
                      <td><input type='number' placeholder='Enter Phone No.' required className='addguests'/></td>
                    </tr>
                    <tr>
                        <td colSpan={5} style={{textAlign:'center', paddingTop:'1%'}}>
                            <button type='submit' className='addbtn'>Add Guest</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>

        <div className='guestlist'>
          <h2 style={{textAlign:'center', color:'black', marginTop:'2%'}}>Guest List</h2>
          <table style={{marginLeft:'0.1%', width:'100%', marginTop:'2%', borderCollapse:'collapse', marginBottom:'2%'}}>
            <tr className='one'>
              <th>Guest Name</th>
              <th>Room Number</th>
              <th>Check-in Date</th>
              <th>Check-out Date</th>
              <th>Phone Number</th>
            </tr>
            <tr className='one'>
              <td>John Doe</td>
              <td>101</td>
              <td>2023-04-01</td>
              <td>2023-04-05</td>
              <td>+91 9876543210</td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  )
}

export default Admin
