import { configureStore } from "@reduxjs/toolkit";

import couterRd from "./Createslice"
const store = configureStore({
  reducer:{
    counter:couterRd
  }
})


export default store