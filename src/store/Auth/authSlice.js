
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

const endpoint = 'https://Invoice-Mannagement.jeanpierre34.repl.co/auth/';

export const fetchUser = createAsyncThunk('auth/login', async (data) => {


  try {
    const response = await axios.post(`${endpoint}login`, data);

    if (response.data.success) {
      toast.success(response.data.message);
    }
    //  save user to local storage
    localStorage.setItem('user', JSON.stringify(response.data.user));

    return response.data.user;

  } catch (error) {
    console.log(error)
    if (error.code === "ERR_BAD_REQUEST") {
      toast.error(error.message);
      return error.message
    }
    toast.error(error.response.data.message);
    return error.reponse.data.message
  }
})

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
})


const initialState = {
  user: null,
  loading: 'idle' //'idle' | 'pending' | 'succeeded' | 'failed'
}

export const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    isLogin: {
      reducer(state, action) {
        if(localStorage.getItem('user'))
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
      console.log(action)
      state.loading = 'failed';
    })
    builder.addCase(signOutUser.fulfilled, (state, action)=>{
       state.loading = 'succeeded';
    })
  }
})

// Action creators are generated for each case reducer function
export const { isLogin } = authSlice.actions
console.log(authSlice);

export default authSlice.reducer