import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard/dashboard';
import DashboardHome from './components/dashboard/home';
import DocumentHome from './components/dashboard/documentHome';
import AccountBalance from './components/dashboard/accountBalance';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLogin, signOutUser } from './store/Auth/authSlice';
import axios from 'axios';


class App extends Component {
	componentDidMount() {
		this.props.isLogin();
	}
	signOut(e) {
    e.preventDefault();
   console.log(this.props)
    // this.props.signOutUser();
		
		const endpoint =
			'https://Invoice-Mannagement.jeanpierre34.repl.co/auth/logout';
		axios
			.get(endpoint)
			.then(response =>{

        localStorage.removeItem('user');
      }
        
        )
			.catch(error => console.log(error));
	}

	render() {
    console.log(this.props)
  
  
		return (
			<main>
				<Navbar signout={this.signOut} />
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>

				<Routes>
					{!this.props.user ? (
						<Route path="/" element={<Login />} />
					) : (
						<Route path="*" element={<Navigate to="/dashboard" replace />} />
					)}

					{!this.props.user ? (
						<Route path="*" element={<Navigate to="/" replace />} />
					) : (
						<Route path="/dashboard" element={<Dashboard />}>
							<Route index element={<DashboardHome />} />
							<Route path="documents" element={<DocumentHome />} />
							<Route path="balance" element={<AccountBalance />} />
						</Route>
					)}
				</Routes>
			</main>
		);
	}
}
function mapStateToProps(state) {
	const { auth } = state;
	return { user: auth.user };
}

//export default connect(mapStateToProps)(TodoList)

export default connect(
	mapStateToProps,
	{ isLogin,signOutUser }
)(App);
