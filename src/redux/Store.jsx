
import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../redux/todoSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});
console.log(store);

export default store;
