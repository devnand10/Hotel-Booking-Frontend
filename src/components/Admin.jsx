import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
  let [name, setName] = useState('')
  let [roomNo, setRoomNo] = useState('')
  let [checkIn, setCheckIn] = useState('')
  let [checkOut, setCheckOut] = useState('')
  let [phone, setPhone] = useState('')
  let [guests, setGuests] = useState([])
  let nav = useNavigate()

  // Load guests from localStorage when component mounts
  useEffect(() => {
    const savedGuests = localStorage.getItem('hotelGuests')
    if (savedGuests) {
      setGuests(JSON.parse(savedGuests))
    }
  }, [])

  // Save guests to localStorage whenever guests state changes
  useEffect(() => {
    localStorage.setItem('hotelGuests', JSON.stringify(guests))
  }, [guests])

  function handleSubmit(e) {
    e.preventDefault()
    if (name && roomNo && checkIn && checkOut && phone) {
      const newGuest = {
        id: Date.now(), // Add unique ID for each guest
        name,
        roomNo,
        checkIn,
        checkOut,
        phone
      }
      
      setGuests([...guests, newGuest])
      setName('')
      setRoomNo('')
      setCheckIn('')
      setCheckOut('')
      setPhone('')
    }
  }

  function handleDelete(id) {
    const updatedGuests = guests.filter(guest => guest.id !== id)
    setGuests(updatedGuests)
  }

  function handleClearAll() {
    if (window.confirm('Are you sure you want to clear all guests?')) {
      setGuests([])
    }
  }
  function navigate() {
    nav('/room')
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
          <div className='side'>Dashboard</div>
          <div className='side'>Users</div>
          <div className='side' onClick={navigate}>Rooms</div>
          <div className='side'>Settings</div>
        </div>
        <div>
          <h1 style={{color:'white', marginLeft:'20%', marginTop:'7%', position:'absolute'}}>Welcome to Admin Panel</h1>
          <h3 style={{color:'white', marginLeft:'24%', marginTop:'10%', position:'absolute'}}>Guest & Room Management</h3>
        </div>
        
        <div className='addguest'>
          <h2 style={{textAlign:'center', color:'black'}}>Add New Guest</h2>
          <form style={{marginLeft:'10%'}} onSubmit={handleSubmit}>
            <table style={{marginLeft:'-8.5%', width:'105%', marginTop:'3%'}}>
              <tbody>
                <tr>
                  <th>Guest Name:</th>
                  <th>Room Number:</th>
                  <th>Check-in Date:</th>
                  <th>Check-out Date:</th>  
                  <th>Phone Number:</th>
                </tr>
                <tr>
                  <td>
                    <input 
                      type='text' 
                      placeholder='Enter Name' 
                      required 
                      className='addguests' 
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </td>
                  <td>
                    <input 
                      type='number' 
                      placeholder='Enter Room No.' 
                      required 
                      className='addguests' 
                      value={roomNo}
                      onChange={(e)=>setRoomNo(e.target.value)}
                    />
                  </td>
                  <td>
                    <input 
                      type='date' 
                      required 
                      className='addguests' 
                      style={{width:'90%'}} 
                      value={checkIn}
                      onChange={(e)=>setCheckIn(e.target.value)}
                    />
                  </td>
                  <td>
                    <input 
                      type='date' 
                      required 
                      className='addguests' 
                      value={checkOut}
                      onChange={(e)=>setCheckOut(e.target.value)}
                    />
                  </td>
                  <td>
                    <input 
                      type='tel' 
                      placeholder='Enter Phone No.' 
                      required 
                      className='addguests' 
                      value={phone}
                      onChange={(e)=>setPhone(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan={5} style={{textAlign:'center', paddingTop:'1%'}}>
                    <button type='submit' className='addbtn'>Add Guest</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        <div className='guestlist' style={{maxHeight: '500px', overflowY: 'auto', overflowX: 'auto'}}>
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h2 style={{textAlign:'center', color:'black', marginTop:'1.5%', marginLeft: '45%'}}>Guest List</h2>
            {guests.length > 0 && (
              <button 
                onClick={handleClearAll}
                style={{
                  marginRight: '20px',
                  padding: '5px 15px',
                  backgroundColor: '#ff4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Clear All
              </button>
            )}
          </div>
          
          {guests.length > 0 ? (
            <div style={{overflowX: 'auto',marginTop:'-3%'}}>
              <table style={{
                marginLeft:'0.1%', 
                width:'100%', 
                marginTop:'2%', 
                borderCollapse:'collapse',
                marginBottom:'2%'
              }}>
                <thead>
                  <tr className='one'>
                    <th>Guest Name</th>
                    <th>Room Number</th>
                    <th>Check-in Date</th>
                    <th>Check-out Date</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className='guestdetail'>
                  {guests.map((guest) => (
                    <tr className='one' key={guest.id}>
                      <td>{guest.name}</td>
                      <td>{guest.roomNo}</td>
                      <td>{guest.checkIn}</td>
                      <td>{guest.checkOut}</td>
                      <td>{guest.phone}</td>
                      <td>
                        <button 
                          onClick={() => handleDelete(guest.id)}
                          style={{
                            padding: '5px 10px',
                            backgroundColor: '#ff4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer',
                            fontSize: '12px'
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p style={{textAlign:'center', color:'black', marginTop:'2%'}}>No guests added yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Admin