import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userdet:{}
}
export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    updateuser: (state,action) => 
    {
      console.log(action.payload)
       state.userdet={...action.payload}
    },
   

    logoutdet:(state)=>{
      state.userdet={};
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateuser,logoutdet } = userSlice.actions

export default userSlice.reducer;