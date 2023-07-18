import React, { useEffect, useState } from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Google, Login } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getgoogleuser, googlesignup, signin, signup } from '../../actions/Auth'

import { LoginSocialGoogle } from "reactjs-social-login";
const initialdata = { username: '', firstname: '', lastname: '', email: '', password: '', confirmpassword: '' }
const Authpage = () => {


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignin, setisSignin] = useState(true);
  const [formdata, setformdata] = useState(initialdata);
  const googleuser = useSelector((state) => state.authReducer.googleuser);
  const error = useSelector((state) => state.authReducer.error);
  const [googledata, setgoogledata] = useState({})
  //console.log(error)
  const handlesubmit = (e) => {
    if (isSignin == true) {
      //console.log("signin");
      dispatch(signin(formdata, navigate));
    }
    else {
      //console.log("signup");
      dispatch(signup(formdata, setisSignin, isSignin));

    }
  }
  const handlegooglesubmit = async ()=>{
    const {email,given_name,family_name}=googledata;
    formdata.email=email;
    formdata.firstname=given_name;
    formdata.lastname=family_name;
   
    dispatch(googlesignup(formdata,navigate))
  
  }
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value })
  }
  const handleswitch = () => {
    setisSignin(!isSignin);
    setformdata(initialdata);
    if (error)
      error.message = '';
  }
  useEffect(() => {
    if(googleuser.check===1)
    {
      
      const data={result:{},token:""};
      data.result=googleuser.result;
      data.token=googleuser.token;
      dispatch({ type: 'AUTH_SUCCESS', data });
      dispatch({type:'CLEAR_GOOGLE'})
      navigate('/')
    }
  }, [googleuser.check])
 
  console.log(googleuser);

  return (
    <div className='h-screen w-screen flex flex-col  items-center '>
      {googleuser.check === 0 || googleuser.check===1 ? (
        <div className='h-[500px] w-[500px]'>
          <h3 className='flex justify-center text-[35px] m-5 font-poppins font-bold'>
            <div className=' w-[30px] h-full'>
              <LockOpenIcon className='scale-125' />
            </div>

            {isSignin === true ? (
              "Sign In"
            ) : ("Sign Up")}
          </h3>

          {isSignin === true ? (
            <form >
              <div className='flex flex-col p-2 gap-2'>

                <input name='username' onChange={handlechange} type="text" className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Username*' />
                <input name='password' onChange={handlechange} type="password" className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Password*' />
              </div>
            </form>
          ) : (
            <form>
              <div className='flex flex-col p-2 gap-2'>
                <input name='username' onChange={handlechange} type="text" className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Username*' />

                <div className='flex gap-2 flex-1'>
                  <input name='firstname' onChange={handlechange} type="text" required={true} className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='First Name*' />
                  <input name='lastname' onChange={handlechange} type="text" required={true} className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Last Name*' />
                </div>
                <div>

                  <input name='email' onChange={handlechange} type="email" required={true} className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Email*' />

                </div>
                <div className='flex flex-col gap-2'>
                  <input name='password' onChange={handlechange} type="password" required={true} className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Password*' />
                  <input name='confirmpassword' onChange={handlechange} type="password" required={true} className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Confirm Password*' />

                </div>

              </div>
            </form>
          )}
          {error?.message?.length > 0 && (
            <div className='flex justify-end px-2 text-red-600'>
              *{error.message}
            </div>
          )}

          <div className='p-2 flex flex-col'>
            <button onClick={handlesubmit} className='w-full h-[60px] rounded-lg bg-blue-900 text-[24px] mt-2'>
              {isSignin == true ? ("Sign In") : ("Sign Up")}

            </button>
            <LoginSocialGoogle
              client_id={"615136400415-4s3dtmu7pj9ppi40gccmh6e555eaf7ce.apps.googleusercontent.com"}
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={async ({ data }) => {
                const { email } = await data;
                setgoogledata(data);
                if (email)
                {
                  dispatch(getgoogleuser(email));
                 
                }
                                  
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <button

                className="w-full h-[60px] rounded-lg bg-red-500 text-[24px] mt-2 flex items-center justify-center"
              // style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Google style={{ marginRight: '8px' }} /> {isSignin == true ? "Sign In " : "Sign up "}with Google
              </button>
            </LoginSocialGoogle>
          </div>
          <div className='flex justify-end p-2 '>
            <button className='bg-none outline-none border-none' onClick={handleswitch}>
              {isSignin === true ?
                (
                  <div className='flex gap-1'>
                    <p className='text-dimWhite'>Dont have an account ?</p>
                    <p>Sign Up</p>
                  </div>
                ) :
                (
                  <div className='flex gap-1'>
                    <p className='text-dimWhite'>Already have an account ?</p>
                    <p>Sign In</p>
                  </div>
                )}

            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className='flex flex-col p-2 gap-2'>
            <h3 className='flex justify-center text-[35px] m-5 font-poppins font-bold'>
              <div className=' w-[30px] h-full'>
                <LockOpenIcon className='scale-125' />
              </div>
              Create User
            </h3>
            <input name='username' onChange={handlechange} type="text" className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Username*' />
            <input name='password' onChange={handlechange} type="password" className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Password*' />
            <input name='confirmpassword' onChange={handlechange} type="password" required={true} className='w-full rounded-lg h-[60px] text-[24px] text-center outline-none border-none text-black' placeholder='Confirm Password*' />
            <button onClick={handlegooglesubmit} className='w-full h-[60px] rounded-lg bg-blue-900 text-[24px] mt-2'>
                Sign Up
            </button>

          </div>
        </div>
      )}

    </div>
  )
}

export default Authpage