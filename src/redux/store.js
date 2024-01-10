import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import { persistStore } from "redux-persist";

import reducer from "./reducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultmiddleware)=> getDefaultmiddleware().concat(thunk)
})

export const persistor = persistStore(store)
export default store

