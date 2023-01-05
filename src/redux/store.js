
import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./orderReducer";

const store = configureStore({
    reducer: {products:counterSlice.reducer}
  })

  export default store