import { GET_ALL_TICKETS, GET_CURRENT_TICKET, SET_ALL_USERS, SET_AUTH, SET_BOOKMARK, SET_CURRENT_USER } from "./actionTypes";

const Reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: payload
            }
        case GET_CURRENT_TICKET:
            return {
                ...state,
                curentTicket: payload
            }
        case GET_ALL_TICKETS:
            return {
                ...state,
                tickets: [...state.tickets, payload]
            }
        case SET_CURRENT_USER:
            return {
                ...state,
                curentUser: payload
            }
        case SET_ALL_USERS:
            return {
                ...state,
                users: [...state.users, payload]
            }
        case SET_BOOKMARK:
            return {
                ...state,
                bookmarks: [...state.bookmarks, payload]
            }
        default:
            return state;
    }
}

export default Reducer