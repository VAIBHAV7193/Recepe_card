import { legacy_createStore as createStore , applyMiddleware} from "redux";

import { RootReducer } from "./CombineReducer";



export const UserStore = createStore(RootReducer);