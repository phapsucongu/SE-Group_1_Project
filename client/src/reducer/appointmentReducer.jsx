import {
	APPOINTMENTS_LOADED_SUCCESS,
	APPOINTMENTS_LOADED_FAIL,
	ADD_APPOINTMENT,
	DELETE_APPOINTMENT,
	UPDATE_APPOINTMENT,
	FIND_APPOINTMENT
} from '../contexts/constants'

export const appointmentReducer = (state, action) => {
	const { type, payload } = action
	switch (type) {
		case APPOINTMENTS_LOADED_SUCCESS:
			return {
				...state,
				appointments: payload,
				appointmentsLoading: false
			}

		case APPOINTMENTS_LOADED_FAIL:
			return {
				...state,
				appointments: [],
				appointmentsLoading: false
			}

		case ADD_APPOINTMENT:
			return {
				...state,
				appointments: [...state.appointments, payload]
			}

		case DELETE_APPOINTMENT:
			return {
				...state,
				appointments: state.appointments.filter(appointment => appointment._id !== payload)
			}

		case FIND_APPOINTMENT:
			return { ...state, appointment: payload }

		case UPDATE_APPOINTMENT:
			const newPosts = state.appointments.map(appointment =>
				appointment._id === payload._id ? payload : appointment
			)

			return {
				...state,
				appointments: newPosts
			}

		default:
			return state
	}
}
