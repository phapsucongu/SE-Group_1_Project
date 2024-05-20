import {
    GET_USERS,
    GET_LAWYERS,
    ADD_USER,
    ADD_LAWYER,
    DELETE_USER,
    DELETE_LAWYER,
    GET_USER,
    GET_LAWYER,
    GET_APPOINTMENTS,
    DELETE_APPOINTMENT,
    GET_APPOINTMENT,
    GET_APPOINTMENTS
} from '../context/Admincontext.jsx'

export const adminReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case GET_USERS:
            return {
                ...state,
                users: payload,
                usersLoading: false
            }

        case GET_LAWYERS:
            return {
                ...state,
                lawyers: payload,
                lawyersLoading: false
            }

        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload]
            }

        case ADD_LAWYER:
            return {
                ...state,
                lawyers: [...state.lawyers, payload]
            }

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(user => user._id !== payload)
            }

        case DELETE_LAWYER:
            return {
                ...state,
                lawyers: state.lawyers.filter(lawyer => lawyer._id !== payload)
            }

        case GET_USER:
            return { ...state, user: payload }

        case GET_LAWYER:
            return { ...state, lawyer: payload }

        case GET_APPOINTMENTS:
            return {
                ...state,
                appointments: payload,
                appointmentsLoading: false
            }

        case GET_APPOINTMENT:
            return { ...state, appointment: payload }

        case DELETE_APPOINTMENT:
            return {
                ...state,
                appointments: state.appointments.filter(appointment => appointment._id !== payload)
            }

        default:
            return state
    }
}