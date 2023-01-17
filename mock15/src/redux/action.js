import { GET_ALL_TICKETS, GET_CURRENT_TICKET, SET_ALL_USERS, SET_AUTH, SET_BOOKMARK, SET_CURRENT_USER } from "./actionTypes"

export const SetAuth = (data) => {
    return {
        type: SET_AUTH,
      payload:data
    }
}

export const getCurrentTicket = (data) => {
    return {
        type: GET_CURRENT_TICKET,
      payload:data
    }
}
export const getAllTicket = (data) => {
    return {
        type: GET_ALL_TICKETS,
      payload:data
    }
}

export const setCurrentUser = (data) => {
    return {
        type: SET_CURRENT_USER,
      payload:data
    }
}
export const setAllUsers = (data) => {
    return {
        type: SET_ALL_USERS,
      payload:data
    }
}

export const setBookmark = (data) => {
    return {
        type: SET_BOOKMARK,
      payload:data
    }
}