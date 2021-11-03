import { GET_QUOTE } from "redux/action/types";


const intialState = {
    data: []
}

const quotes = (state = intialState, action) => {
    switch (action.type) {
        case GET_QUOTE:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}

export default quotes