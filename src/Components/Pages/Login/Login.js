import React, { useState } from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase.init';
import "./Login.css"

const Login = () => {

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    

  return (
    <div className='background mx-auto text-zinc-300 font-bold px-16 py-10 my-16'>
    <h3 className='mb-4 text-info font-bold text-2xl my-8'>Please Login Here</h3>
    <form >
    <div ><input type="email" className="px-8 pl-3 py-2 rounded-md mb-4 text-gray-900 outline-0 font-medium" placeholder='Your Email' /></div>
    <div className=""><input type="password" className="px-8 py-2 pl-3 rounded-md mb-4 text-gray-900 outline-0 font-medium" placeholder='Your Password'/></div>
    <button className='btn btn-info font-bold px-4 py-2 mb-16'>Login</button>
    <div class="divider">OR</div>
    <button className='btn btn-outline text-gray-300 pl-10 bg-white text-black font-medium'>Continue with Google</button>
    </form>
    

</div>
  )
}

export default Login