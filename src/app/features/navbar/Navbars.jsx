import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutdet } from '../../../Pages/userSlice';

function Navbars() {
    const users = useSelector((state) => state.userSlice.userdet)
     console.log(users)
    
     var dispatch=useDispatch()
     var navigate=useNavigate()
    function logout()
    {
      dispatch(logoutdet())
      navigate("/Login")

    }
  return (
    
    <div >
            <div>
    <marquee className="h2 " scrollamount='25'>WESTERN HILLS CORPORATION</marquee>
    <div className='navimg'>
    
  <img className='img' src="https://i.pinimg.com/474x/32/16/3c/32163c76011c1805b0690ea89e7afd6f.jpg"  ></img>

    <nav className="navbar navbar-expand-lg navbar-light bg-success navbars"  >
    <div className="container-fluid">

<div className="collapse navbar-collapse" id="navbarText">
<ul className="navbar-nav me-auto mb-2 mb-lg-0 nav">
{
    users.phonenumber &&  (
        <>
           <li className="nav-item">
              <Link  to="/AddCustomer" className="nav-link navbartxt">AddCustomer</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="nav-item">
              <Link to="/CustomerList" className="nav-link navbartxt">CustomerList</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="nav-item">
              <Link to="/AddProperties" className="nav-link navbartxt">AddProperties</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </li>
          <li className="nav-item">
              <Link to="/Logout" className="nav-link navbartxt" onClick={logout}>logout</Link>
                       </li>
          
           <li className="nav-item">
        <Link to="/Img" className="nav-link navbartxt" >Images</Link>
        </li>
        </>
    )
}

{
    !users.phonenumber && (
        <>
        <li className="nav-item">
             <Link to="/" className="nav-link navbartxt" >Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li className="nav-item">
          <Link to="/Login" className="nav-link navbartxt">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li className="nav-item">
          <Link to="/Registration" className="nav-link navbartxt">Registration</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link navbartxt" >About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </li>
       
        </>
        
    )
}
</ul>

</div>
</div>

</nav> 
</div>
</div>
</div>
  )
}

export default Navbars