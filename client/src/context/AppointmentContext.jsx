import { createContext, useReducer, useState } from 'react'
import { appointmentReducer } from '../reducers/appointmentReducer'
import {
	apiUrl,
	APPOINTMENTS_LOADED_FAIL,
	APPOINTMENTS_LOADED_SUCCESS,
	ADD_APPOINTMENT,
	DELETE_APPOINTMENT,
	UPDATE_APPOINTMENT,
	FIND_APPOINTMENT
} from './constants'
import axios from 'axios'

export const AppointmentContext = createContext()

const AppointmentContextProvider = ({ children }) => {
	// State
	const [appointmentState, dispatch] = useReducer(appointmentReducer, {
		appointment: null,
		appointments: [],
		appointmentsLoading: true
	})

	const [showAddAppointmentModal, setShowAddAppointmentModal] = useState(false)
	const [showUpdateAppointmentModal, setShowUpdateAppointmentModal] = useState(false)
	const [showToast, setShowToast] = useState({
		show: false,
		message: '',
		type: null
	})

	// Get all appointments
	const getAppointments = async () => {
		try {
			const response = await axios.get(`${apiUrl}/appointments`)
			if (response.data.success) {
				dispatch({ type: APPOINTMENTS_LOADED_SUCCESS, payload: response.data.appointments })
			}
		} catch (error) {
			dispatch({ type: APPOINTMENTS_LOADED_FAIL })
		}
	}

	// Add appointment
	const addAppointment = async newAppointment => {
		try {
			const response = await axios.appointment(`${apiUrl}/appointments`, newAppointment)
			if (response.data.success) {
				dispatch({ type: ADD_APPOINTMENT, payload: response.data.appointment })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Delete appointment
	const deleteAppointment = async appointmentId => {
		try {
			const response = await axios.delete(`${apiUrl}/appointments/${appointmentId}`)
			if (response.data.success)
				dispatch({ type: DELETE_APPOINTMENT, payload: appointmentId })
		} catch (error) {
			console.log(error)
		}
	}

	// Find appointment when user is updating appointment
	const findAppointment = appointmentId => {
		const appointment = appointmentState.appointments.find(appointment => appointment._id === appointmentId)
		dispatch({ type: FIND_APPOINTMENT, payload: appointment })
	}

	// Update appointment
	const updateAppointment = async updatedAppointment => {
		try {
			const response = await axios.put(
				`${apiUrl}/appointments/${updatedAppointment._id}`,
				updatedAppointment
			)
			if (response.data.success) {
				dispatch({ type: UPDATE_APPOINTMENT, payload: response.data.appointment })
				return response.data
			}
		} catch (error) {
			return error.response.data
				? error.response.data
				: { success: false, message: 'Server error' }
		}
	}

	// Appointment context data
	const appointmentContextData = {
		appointmentState,
		getAppointments,
		showAddAppointmentModal,
		setShowAddAppointmentModal,
		showUpdateAppointmentModal,
		setShowUpdateAppointmentModal,
		addAppointment,
		showToast,
		setShowToast,
		deleteAppointment,
		findAppointment,
		updateAppointment
	}

	return (
		<AppointmentContext.Provider value={appointmentContextData}>
			{children}
		</AppointmentContext.Provider>
	)
}

export default AppointmentContextProvider