
import { FETCH_LAWYER_SUCCESS, FETCH_LAWYER_FAILURE } from '../actions/types';

const initialState = {
  lawyer: null, // Thực thể lawyer được lưu trữ ở đây
  error: null, // Lưu trữ lỗi nếu có
};

const lawyerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LAWYER_SUCCESS:
      return {
        ...state,
        lawyer: action.payload, // Lưu trữ dữ liệu thực thể lawyer
        error: null, // Reset lỗi nếu có
      };
    case FETCH_LAWYER_FAILURE:
      return {
        ...state,
        lawyer: null, // Reset dữ liệu nếu gặp lỗi
        error: action.payload, // Lưu trữ thông báo lỗi
      };
    default:
      return state;
  }
};

export default lawyerReducer;