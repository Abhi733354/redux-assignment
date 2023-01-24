import { createStore } from "redux";

import cartReducer from "./reducers/index";
export const store = createStore(cartReducer)