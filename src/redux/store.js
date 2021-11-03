
import thunk from "redux-thunk"
import { applyMiddleware } from "redux"
import { createStore } from "redux"
import rootReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store