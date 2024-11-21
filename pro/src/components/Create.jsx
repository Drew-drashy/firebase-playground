import React, { useState } from 'react'
import {auth} from '../firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const Create = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const createAccount=(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCred)=> console.log(userCred))
        .catch((err)=>console.log(err))
    }
  return (
    <div>
        create a account here...
        <form onSubmit={createAccount}>
        <input type="email" placeholder='Enter the email' onChange={(e)=>setEmail(e.target.value)}  value={email}/>
        <input type="password" placeholder='Enter the Password'  onChange={(e)=>setPassword(e.target.value)}value={password}  />
        <button type='submit'>Create</button>
        </form>
    </div>
  )
}

export default Create
