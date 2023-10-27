import { useState } from "react";
import "./Register.scss";

import {Link, useNavigate} from 'react-router-dom';
import { registerUser } from "../../../api/user.api";
const Register = () => {
    const navigate = useNavigate();
    const [typeCheckbox, setTypeCheckbox] = useState("password");

    const handleCheckbox = () => {
        if (typeCheckbox == "password") {
            setTypeCheckbox("text")
        }
        else {
            setTypeCheckbox("password")
        }
    }
    const handleSubmit =async (e) => {
        e.preventDefault();
        
        const fullName = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const password = e.target.elements.password.value;
        const rePassword = e.target.elements.rePassword.value;
        if(fullName == "") {
            alert("Tên không được để trống");
            return;
        }
        if(email == "") {
            alert("Email không được để trống");
            return;
        }
        // const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // if(!regex.test(password)) {
        //     alert("Password yếu");
        //     return;
        // }
        if(password == "") {
            alert("Password không được để trống");
            return;
        }
        if(rePassword != password) {
            alert("Mật khẩu không khớp");
            return;
        }

        const user = {
            fullName: fullName,
            email,
            password,
        }
        try {
            const response = await registerUser(user);
            if(response) {
                alert("Đăng ký thành công");
                navigate("/login");
            }
           
        } catch (error) {
            alert(error.response.data.message);
        }

       
    }
    return (
        <div className='register'>
            <div className="register__form">
                <h3 className="register__title">Register</h3>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="email">Full Name:</label>
                    <input type="text" name="name" placeholder="Name" id='name'  autoComplete="on" /> <br />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" placeholder="Email" id='email' autoComplete="on" /> <br />
                    
                    <label htmlFor="password">Password:</label>
                    <input type={typeCheckbox} name="password" placeholder="Password" 
                    id='password' autoComplete="off" onCopy={(e)=> {e.preventDefault()}} /> <br />
                   
                    <label htmlFor="rePassword">Nhập lại Password:</label>
                    <input type={typeCheckbox} name="rePassword" placeholder="Re Password"
                     id='rePassword' autoComplete="off" onCopy={(e)=> {e.preventDefault()}}/> <br />
                    
                    <input type="checkbox" name='checkbox' id='checkbox' onClick={handleCheckbox} />
                    <label htmlFor="checkbox" >Hiển thị mật khẩu</label>
                    <div className='button'>
                        <button className='button-success'>Register</button> <br />
                        <Link to = "/login">Hoặc đăng nhập</Link>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register;