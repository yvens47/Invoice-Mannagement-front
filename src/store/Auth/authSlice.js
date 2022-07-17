
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

const endpoint = 'https://Invoice-Mannagement.jeanpierre34.repl.co/auth/';


export const fetchUser = createAsyncThunk('auth/login', async (data) => {


  try {

    const response = await axios.post(`${endpoint}login`, data);

    if (response.data.success) {
      //  save token
      console.log("line 17", response.data)
      localStorage.setItem('token', response.data.token);
      toast.success(response.data.message);
    }
    //  save user to local storage
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return response.data.user;

  } catch (error) {

    if (error.code === "ERR_BAD_REQUEST") {
      toast.error(error.response.data.message);
      return null;
    }
    toast.error(error.response.data.message);
    return null;
  }
})

export const registerUser = createAsyncThunk('auth/register', async (data) => {


  try {

    const response = await axios.post(`${endpoint}register`, data);

    if (response.data.success) {

      localStorage.setItem('token', response.data.token);
      toast.success(response.data.message);
    }
    //  save user to local storage
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return response.data.user;

  } catch (error) {
    console.log("line 27", error.response.data.errors[0])
    if (error.code === "ERR_BAD_REQUEST") {
      toast.error(error.response.data.message);
      return null;
    }
    toast.error(error.response.data.message);
    return null;
  }
});


export const signOutUser = createAsyncThunk('auth/signout', async () => {


  try {
    const response = await axios.get(`${endpoint}logout`);

    //  save user to local storage
    localStorage.removeItem('user');
    toast.success('Logout Successfully!')

    return response.data.message;

  } catch (error) {
    console.log(error)
    if (error.code === "ERR_BAD_REQUEST") {
      toast.error(error.message);
      return error.message
    }
    toast.error(error.response.data.message);
    return error.reponse.data.message
  }
});

export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (email) => {
  try {
    // get request here

    const response = await axios.get(`${endpoint}forgot-password/${email}`);
    console.log(response)
    if (response.data.success) {
      toast.success(response.data.message)
    }
    if (!response.data.success) {
      toast.error(response.data.message)
    }

    return response.data.message;

  }
  catch (error) {
    console.log(error)
  }


})

export const changePassword = createAsyncThunk('auth/changePasword', async (data) => {

  try {
    const response = await axios.post(`${endpoint}change-password`, data, {
      headers: { "Authorization": `Bearer ${data.token}` }
    });

    toast.success(response.data.message)

  } catch (error) {
    console.log(error)
    toast.error(error.response.data.message)
  }


})



const initialState = {
  user: null,
  loading: 'idle', //'idle' | 'pending' | 'succeeded' | 'failed',
  error: null
}

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isLogin: {
      reducer(state, action) {
        if (localStorage.getItem('user'))
          state.user = JSON.parse(localStorage.getItem('user'))
        else
          state.user = null
      },
      prepare(user) {
        return {
          payload: user
        }
      }

    },


    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = 'succeeded';
      state.user = (action.payload);
    }).addCase(fetchUser.pending, (state, action) => {
      // Add user to the state array     
      state.loading = 'pending';
    }).addCase(fetchUser.rejected, (state, action) => {
      // Add user to the state array     
      state.loading = 'failed';
    });

    builder.addCase(signOutUser.fulfilled, (state, action) => {
      // Add user to the state array  
      state.user = null;
      state.loading = 'succeed';
    }).addCase(signOutUser.pending, (state, action) => {
      state.loading = 'pending';
    }).addCase(signOutUser.rejected, (state, action) => {
      // Add user to the state array     
      state.loading = 'failed';
    });
    // register
    builder.addCase(registerUser.fulfilled, (state, action) => {
      // Add user to the state array  
      state.user = null;
      state.loading = 'succeeded';
    }).addCase(registerUser.rejected, (state, action) => {
      state.loading = 'failed';
    })

    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      // Add user to the state array  
      state.user = null;
      state.loading = 'succeed';
    }).addCase(forgotPassword.pending, (state, action) => {
      state.loading = 'pending';
    }).addCase(forgotPassword.rejected, (state, action) => {
      // Add user to the state array     
      state.loading = 'failed';
    });

    // change password
    builder.addCase(changePassword.fulfilled, (state, action) => {
      // Add user to the state array  
      // state.user = null;
      state.loading = 'succeed';
    }).addCase(changePassword.pending, (state, action) => {
      state.loading = 'pending';
    }).addCase(changePassword.rejected, (state, action) => {
      // Add user to the state array     
      state.loading = 'failed';
    });
  }
})

// Action creators are generated for each case reducer function
export const { isLogin } = authSlice.actions

export default authSlice.reducer