
import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify';

const endpoint = 'https://Invoice-Mannagement.jeanpierre34.repl.co/invoices/';


export const requestPayment = createAsyncThunk('payment/request', async (data, { getState }) => {


  try {

    const response = await axios.put(`${endpoint}payment-request`, data);


    return response.data;
  } catch (error) {
    console.log("line 27", error.response.data)
    if (error.code === "ERR_BAD_REQUEST") {
      toast.error(error.response.data.message);
      return null;
    }
    toast.error(error.response.data.message);
    return null;
  }
}


)

export const deleteDocument = createAsyncThunk('document/delete', async (data) => {

  try {

    const response = await axios.delete(`${endpoint}delete`, {
      headers: {
        Authorization: ''
      },
      data: data
    });
    return (response)

  } catch (error) {
    console.log(error)

  }

})

export const getDocuments = createAsyncThunk('getdocs/request', async (userid) => {

  try {
    console.log(userid)

    const response = await axios.get(`${endpoint}${userid}`);



    return response;
  } catch (error) {
    console.log("line 27", error)
    if (error.code === "ERR_BAD_REQUEST") {
      toast.error(error.response.data.message);
      return null;
    }
    toast.error(error.response.data.message);
    return null;
  }
})
export const uploadDocuments = createAsyncThunk('document/upload', async (data, thunkAPI) => {



  try {
    let percentage = 0;
    const config = {
      onUploadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
        const percentComplete = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
        // setUploaddingPercent(percentComplete);

        percentage = percentComplete;
        thunkAPI.dispatch({ type: "invoices/updatePercentUpload", payload: percentComplete });
      },
      headers: {
        'authorization': `Bearer ${localStorage.getItem('token')}`
      },
    }
    const response = await axios.post(endpoint, data, config);
    return { response, percentage };

  } catch (error) {
    console.log("line", error)

  }

})

const initialState = {
  invoices: [],
  loading: 'idle', //'idle' | 'pending' | 'succeeded' | 'failed',
  error: null,
  uploadPercent: 0
}

export const invoiceSlice = createSlice({
  name: 'invoices',
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
    updatePercentUpload: {
      reducer(state, action) {

        state.uploadPercent = action.payload
      },
      prepare(percent) {
        return {
          payload: percent
        }
      }

    },



    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
  extraReducers: (builder) => {
    // upload the invoices
    builder.addCase(uploadDocuments.fulfilled, (state, action) => {
      console.log(state)

      state.uploadPercent = action.percentage;


      console.log(state);

    }).addCase(uploadDocuments.pending, (state, action) => {
      console.log(state);

      state.uploadPercent = action.percentage;



    })
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getDocuments.fulfilled, (state, action) => {

      // Add user to the state array
      state.loading = 'succeeded';
      state.invoices = action.payload.data;

    }).addCase(getDocuments.pending, (state, action) => {
      // Add user to the state array     
      state.loading = 'pending';
    }).addCase(getDocuments.rejected, (state, action) => {
      // Add user to the state array     
      state.loading = 'failed';
    });

    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(requestPayment.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading = 'succeeded';
      state.invoices.find((value) => {
        if (value._id === action.payload.doc._id) {
          value.payment_request = action.payload.doc.payment_request;
        }
      })


    }).addCase(requestPayment.pending, (state, action) => {
      // Add user to the state array     
      state.loading = 'pending';
    }).addCase(requestPayment.rejected, (state, action) => {
      // Add user to the state array     
      state.loading = 'failed';
    });

    // delete document
    builder.addCase(deleteDocument.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      console.log(action.payload)



    }).addCase(deleteDocument.pending, (state, action) => {
      // Add user to the state array     
      state.loading = 'pending';
    }).addCase(deleteDocument.rejected, (state, action) => {
      // Add user to the state array     
      state.loading = 'failed';
    });

  }
})

// Action creators are generated for each case reducer function
//export const { isLogin } = authSlice.actions

export default invoiceSlice.reducer