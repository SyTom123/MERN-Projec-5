import { useState } from 'react';
import {useNavigate}  from 'react-router-dom';
import { useDispatch} from 'react-redux';
import './Login.scss'
import { getUser } from '../../services/userService';
import {setCookie} from "../../helpers/cookie";
import {authen} from '../../components/actions/authen'
const Login = () => {
    const dispatch = useDispatch();
    const [typeCheckbox, setTypeCheckbox] = useState("password");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value
        const response = await getUser(email, password);
        if(response.length > 0){
            const time = 1;
            setCookie("id", response[0].id, time);
            setCookie("fullname", response[0].fullName, time);
            setCookie("token", response[0].token, time);
            dispatch(authen(true));
            
            navigate("/");
        }
        else {
            e.target.elements.email.value = "";
            e.target.elements.password.value="";
            alert('Tài khoản hoặc mật khẩu không đúng');

        }

    }
    const handleCheckbox = () => {
        if(typeCheckbox == "password") {
            setTypeCheckbox("text")
        }
        else {
            setTypeCheckbox("password")
        }
    }
    
  return (
    <div className='login'>
       <div className="login__form">
            <h3 className="login__title">Login</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="Email" id='email' required autoComplete="on"/> <br />
                <label htmlFor="password">Password:</label>
                <input type={typeCheckbox} name="password" placeholder="Password" id='password' autoComplete="off" required /> <br />
                <input type="checkbox" name='checkbox' id='checkbox' onClick={handleCheckbox}/> 
                <label htmlFor="checkbox" >Hiển thị mật khẩu</label>  
                <div className='button'>
                    <button className='button-success'>Login</button> <br />
                </div> 
            </form>
            
       </div>
    </div>
  )
}

export default Login;