import React, { createContext, useReducer, useState } from 'react';
import { appointmentReducer } from '../reducer/appointmentReducer.jsx';
import axiosInstance, {
	apiUrl,
	APPOINTMENTS_LOADED_FAIL,
	APPOINTMENTS_LOADED_SUCCESS,
	ADD_APPOINTMENT,
	DELETE_APPOINTMENT,
	FIND_APPOINTMENT,
} from './constants';
import setAuthToken from '../utils/setAuthToken';
import { LOCAL_STORAGE_TOKEN_NAME } from './constants';
import axios from 'axios';

export const AppointmentContext = createContext();

const AppointmentContextProvider = ({ children }) => {
	// State
	const [appointmentState, dispatch] = useReducer(appointmentReducer, {
		appointment: null,
		appointments: [],
        lawyerMap: new Map(),
		appointmentsLoading: true,
	});

	//const [lawyerMap, setLawyerMap] = useState(new Map()); // New state to store lawyer data
	const [showAddAppointmentModal, setShowAddAppointmentModal] = useState(false);
	const [showUpdateAppointmentModal, setShowUpdateAppointmentModal] = useState(false);
	const [showToast, setShowToast] = useState({
		show: false,
		message: '',
		type: null,
	});

	// Get all appointments
	const getAppointments = async () => {
		if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
			setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
		}
		try {
			const response = await axiosInstance.get(`${apiUrl}/appointment/`);
			if (response.data.success) {
				const appointments = response.data;
                console.log(appointments);
				dispatch({ type: APPOINTMENTS_LOADED_SUCCESS, payload: appointments });
			}
		} catch (error) {
			dispatch({ type: APPOINTMENTS_LOADED_FAIL });
		}
	};

    const getLawyerMap = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }
        try {
            const response = await axiosInstance.get(`${apiUrl}/lawyer/`);
            if (response.data.success) {
                const lawyers = response.data;
                console.log(lawyers);
                dispatch({ type: APPOINTMENTS_LOADED_SUCCESS, payload: lawyers });
            }
        } catch (error) {
            dispatch({ type: APPOINTMENTS_LOADED_FAIL });
        }
    }
	// Add appointment
	const addAppointment = async (newAppointment) => {
		try {
			const response = await axiosInstance.post(`${apiUrl}/appointments`, newAppointment);
			if (response.data.success) {
				dispatch({ type: ADD_APPOINTMENT, payload: response.data.appointment });
				return response.data;
			}
		} catch (error) {
			return error.response.data ? error.response.data : { success: false, message: 'Server error' };
		}
	};

	// Delete appointment
	const deleteAppointment = async (appointmentId) => {
		try {
			const response = await axiosInstance.delete(`${apiUrl}/appointments/${appointmentId}`);
			if (response.data.success) dispatch({ type: DELETE_APPOINTMENT, payload: appointmentId });
		} catch (error) {
			console.log(error);
		}
	};

	// Find appointment when user is updating appointment
	const findAppointment = (appointmentId) => {
		const appointment = appointmentState.appointments.find((appointment) => appointment._id === appointmentId);
		dispatch({ type: FIND_APPOINTMENT, payload: appointment });
	};

	const getLawyer = async (lawyerId) => {
		try {
			const response = await axiosInstance.get(`${apiUrl}/lawyer/${lawyerId}`);
			if (response.data.success) {
				return response.data.lawyer;
			}
		} catch (error) {
			console.error(error);
		}
	};

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
	};

	return <AppointmentContext.Provider value={appointmentContextData}>{children}</AppointmentContext.Provider>;
};

export default AppointmentContextProvider;
