// In your Redux reducer file


const initialState = {
  error: null,
  authData: null,
  users: [],
  googleuser: { check: 0 },
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_ERROR':
    case 'SIGNUP_ERROR':
      return {
        ...state,
        error: action.payload,
      };
      case 'CLEAR_GOOGLE':
        return {
          ...state,
          googleuser:{check:0},
          error:null,
          authData:null,
        }
    case 'GOOGLE_VERIFY':
      return {
        ...state,
        googleuser: action?.data,
      }
    case 'GOOGLE_SIGNUP':
      return {

        ...state,
        error: null,
        authData: action?.data,


      };
    case 'AUTH_SUCCESS':
      localStorage.setItem('profile', JSON.stringify(action?.data));
      return {

        ...state,
        error: null,
        authData: action?.data,


      };
    case 'FETCH_USERS':

      return {
        ...state,
        users: action.data,

      }
    default:
      return state;
  }
};

export default authReducer;
