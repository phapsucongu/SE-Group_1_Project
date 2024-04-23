export const authReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'LOGIN':
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false
            };
        case 'REGISTER':
            return {
                ...state,
                user: payload,
                isAuthenticated: true,
                loading: false
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                loading: false
            };
        case 'AUTH_ERROR':
}};