// In your Redux actions file (authActions.js)
import * as api from '../api/index.js';

export const getuser = (username) => async (dispatch) => {
  
  try {
    const {data} = await api.getusers(username);
    // console.log(data);
    dispatch({ type: 'FETCH_USERS', data });
  } catch (error) {
    console.log(error);
    
  }
};

export const signin = (formdata, navigate) => async (dispatch) => {
 
  try {
    const { data } = await api.signin(formdata);
    dispatch({ type: 'AUTH_SUCCESS', data });
    navigate('/');
  } catch (error) {
    const errorMessage = error.response.data;
    dispatch({ type: 'SIGNIN_ERROR', payload: errorMessage });
  }
};
// export const googlesignin=(formdata)=>async(dispatch)=>{
//   try {
//     const { data } = await api.signin(formdata);
 
//     dispatch({ type: 'AUTH_SUCCESS', data });
//     navigate('/');
//   } catch (error) {
//     const errorMessage = error.response.data;
//     dispatch({ type: 'SIGNIN_ERROR', payload: errorMessage });
//   }
// }
export const googlesignup = (formdata,navigate)=>async(dispatch)=>{
  try {
    
    const {data}=await api.signup(formdata);
    console.log(data)
    dispatch({type:'GOOGLE_SIGNUP',data});
    localStorage.setItem('profile', JSON.stringify(data));
    
    navigate('/');
  } catch (error) {
    const errorMessage = error.response;
    dispatch({ type: 'SIGNUP_ERROR', payload: errorMessage });
  }
}
export const signup = (formdata,setisSignin,isSignin) => async (dispatch) => {
  try {
    const { data } = await api.signup(formdata);
    
    dispatch({ type: 'AUTH_SUCCESS', data });
    setisSignin(!isSignin)
  } catch (error) {
    const errorMessage = error.response.data;
    dispatch({ type: 'SIGNUP_ERROR', payload: errorMessage });
  }
};
export const getgoogleuser = (email)=> async(dispatch)=>{
  try {  
    const {data}=await api.getgoogleuser(email);
    dispatch({type:'GOOGLE_VERIFY',data});

  } catch (error) {
    
  }
}
