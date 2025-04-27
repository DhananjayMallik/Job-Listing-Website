import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
const Login = ({onLogin}) => {
  const navigate = useNavigate();

  const [state , setState] = useState('Sign Up');

  const [email , setEmail] = useState('');

  const [password , setPassword] = useState('');

  const [name , setName] = useState('');

  const handleLogin = () => {
 
    onLogin(); // set login to true in App.jsx
    navigate('/'); // redirect to homepage
  };

  const onSubmitHandler = async (event) =>{
        event.preventDefault();
  }
  return (
   <form className='login min-h-[80vh] flex items-center shadow-2xl'>
    <div className='flex flex-col gap-3 m-auto items-center p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-2xl'>
      <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
      <p>Please {state === 'Sign Up' ? "Sign Up" : "log in"} Create Account</p>
      
      {
        state === 'Sign Up'  &&    <div className='w-full'>
        <p>FullName</p>
        <input
        className='border border-zinc-300 rounded w-full p-2 mt-1'
        type='text'
        value={name}
        required
        onChange={(e)=>setName(e.target.value)}
        placeholder='Enter UserName'/>
      </div> 
      }
    
      <div className='w-full'>
        <p>Email</p>
        <input
        className='border border-zinc-300 rounded w-full p-2 mt-1'
        type='email'
        value={email}
        required
        onChange={(e)=>setEmail(e.target.value)}
        placeholder='Enter @email.com'/>
      </div>

      <div className='w-full'>
        <p>Password</p>
        <input
        className='border border-zinc-300 rounded w-full p-2 mt-1'
        type='password'
        value={password}
        required
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Enter Password'/>
      </div>
    <button onClick={handleLogin}
    className='bg-blue-500 text-white w-full py-2 rounded-md text-base cursor-pointer'>{state === 'Sign Up' ? "Create Account" : "log in"}</button>
    
    {
      state === 'Sign Up' ? <p>Already have an account?<span onClick = {()=>setState('Login')} className='text-blue-300 underline cursor-pointer'>Login here</span></p>
      :<p>Create an new Account?<span onClick={()=>setState('Sign Up')}  className='text-blue-300 underline cursor-pointer'>click here</span></p>
    }
    </div>

   </form>
  )
}

export default Login;
