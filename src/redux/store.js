import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultmiddleware)=> getDefaultmiddleware().concat(thunk)
})

export default store

