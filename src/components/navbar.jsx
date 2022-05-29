import React from 'react';
import AnimationIcon from '@mui/icons-material/Animation';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { fetchUser,signOutUser } from '../store/Auth/authSlice';
function Navbar(props) {
	const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch ();
   const signout =  (e)=>{
    e.preventDefault();
   
     dispatch(signOutUser());
     console.log(dispatch)
    
  }
	return (
		<nav
      style={{background:'white'}}
      className="navbar navbar-expand-lg navbar-light  fixed-top">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<AnimationIcon fontSize="large" color="primary" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					{/*
      <form className="d-flex ms-auto">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}

					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="#">
								Invoice
							</Link>
						</li>
            {user ? (
						<li className="nav-item dropdown">
							<Link
								className="nav-link dropdown-toggle"
								to="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
                {user.first_name}
							</Link>
							
								<ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                  <li>
										<Link className="dropdown-item" to="/dashboard">
                     Dashboard
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/dashboard/settings">
                     Settings
										</Link>
									</li>
									<li>
										<Link className="dropdown-item" to="/dashboard/documents">
											Documents
										</Link>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<Link onClick={signout} className="dropdown-item" to="/signout">
											Signout
										</Link>
									</li>
								</ul>
							</li>) : (
              <>  
                {/*<li className="nav-item">
									<Link className="nav-link " to='/'>Login</Link>
								</li>*/}
                <li className="nav-item">
									<Link className="nav-link " to='/register'>Register</Link>
								</li> 
              </>
								
        
							)}
						
						{/*<li className="nav-item">
          <Link className="nav-link disabled">Disabled<
        </li>*/}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
