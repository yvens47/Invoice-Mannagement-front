import React, { Component } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Register from './components/login/register';
import Login from './components/login/login';
import ForgotPassword from './components/login/forgot-password';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Dashboard from './components/dashboard/dashboard';
import DashboardHome from './components/dashboard/home';
import DocumentHome from './components/dashboard/documentHome';
import AccountBalance from './components/dashboard/accountBalance';
import AccountSetting from './components/dashboard/accountSettings';
import AddCompany from './components/companies/add-company';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isLogin, signOutUser } from './store/Auth/authSlice';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    this.props.isLogin();
  }
  signOut(e) {

    e.preventDefault();
    this.props.signOutUser();

    const endpoint =
      'https://Invoice-Mannagement.jeanpierre34.repl.co/auth/logout';
    axios
      .get(endpoint)
      .then(response => {
        localStorage.removeItem('user');
      }

      )
      .catch(error => console.log(error));
  }

  render() {

    return (
      <main style={{ paddingTop: '60px' }}>
        <Navbar />
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
            <>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path='/forgot-password' element={<ForgotPassword />} />
              <Route path='/add-company' element={<AddCompany />} />
            </>

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
                <Route path='settings' element={<AccountSetting />} />
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
function mapDispatchToProps(dispatch) {
  return {
    // dispatching actions returned by action creators
    signOutUser: () => dispatch(signOutUser()),
    // decrement: () => dispatch(decrement()),
    isLogin: () => dispatch(isLogin())
    //reset: () => dispatch(reset()),
  }
}

//export default connect(mapStateToProps)(TodoList)

export default connect(
  mapStateToProps,
  mapDispatchToProps
  //{ isLogin,signOutUser }
)(App);
