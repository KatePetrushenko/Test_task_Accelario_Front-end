import { createSlice } from '@reduxjs/toolkit'

export const entriesSlice = createSlice({
    name: 'entries',
    initialState: {
      entries: []
    },
    reducers: {
      getEntries: (state, action) => {
        return action.payload;
      }
    },
  })
  
  export const { getEntries } = entriesSlice.actions
  
  export default entriesSlice.reducer;