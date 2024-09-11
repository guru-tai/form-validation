import {useSelector,useDispatch} from 'react-redux';
import { clearState, loginRequest } from '../features/loginSlice';
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';

const Login=()=>{
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const {isAuthenticate,userType,error}=useSelector((state)=>state.validate)

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(loginRequest({username,password}))
    }

    useEffect(()=>{
        if(isAuthenticate){
            if(userType==='admin'){
                navigate('/admin')
                dispatch(clearState())
            }else if (userType==='user'){
                navigate('/user')
                dispatch(clearState())
            }
        }
    },[dispatch, isAuthenticate, navigate, userType])   
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>UserName:</label>
                    <input
                    type='text'
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>password:</label>
                    <input
                    type='text'
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>
                        submit
                    </button>
                </div>
            </form>
            <div>
            {`for admin credintials=> username: "admin", password: "admin123"`}
            </div>
            <div>
            {`for user credintials=> username: "user", password: "user123"`}
            </div>
            <div>
                {error&&<p>error...{error}</p>}
            </div>
        </div>
    )
}
export default Login;