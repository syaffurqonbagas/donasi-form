
import axios from "axios";
import { GET_QUOTE } from "./types";

export const loadQuotes = () => async (dispatch) => {
    try {
        const quotes = await axios.get("https://quotes.rest/qod?language=en")
        const data = await quotes.data.contents.quotes;
        const myQuote = data[0].quote
        console.log("ini data quote", myQuote)
        dispatch({
            type: GET_QUOTE,
            payload: myQuote
        })
    } catch (error) {
        console.log("error")
    }
}