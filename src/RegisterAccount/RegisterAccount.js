import React, { useState } from "react";

import "./RegisterAccount.css";
import { Link } from "react-router-dom";

const initFormValue = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
};

const isEmptyValue = (value) => {
    return !value || value.trim().length < 1;
}

const isEmailValid = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


export default function RegisterAccount() {
    const [formValue, setFormValue] = useState(initFormValue);
    const [formError, setFormError] = useState({});

    const validateForm =() => {
        const error = {};

        if(isEmptyValue(formValue.name)) {
            error["name"]= "Name is required";
        }

        if(isEmptyValue(formValue.email)) {
            error["email"]= "Email is required";
        }else{
            if(!isEmailValid(formValue.email)) {
                error["email"]= "Email is invalid";
            }
        }

        if(isEmptyValue(formValue.password)) {
            error["password"]= "Password is required";
        }

        if(isEmptyValue(formValue.confirmPassword)) {
            error["confirmPassword"]= "Confirm password is required";
        }else if (formValue.password !== formValue.confirmPassword) {
            error["confirmPassword"]= "Confirm password is not match";
        }
        

        setFormError(error);


        return Object.keys(error).length === 0;
    }


    const handleChange = (e) => {
        const {value,name} = e.target;
        setFormValue ({
            ...formValue,
            [name]: value,
        })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()) {
            console.log("form value",formValue)
        }else {
            console.log("form invalid")
        }


        console.log("form value",formValue)
    }
    console.log(formError);

    return <div className="Register-page">
        <div className="Register-form-container">
            <h1 className="title">Register account</h1>
            <form onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Nhập họ và tên"
                            value={formValue.name}
                            onChange={handleChange}
                        />
                        {formError.name &&
                        <div className="error-feedback">{formError.name}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input
                            id="email"
                            // type="email"
                            name="email"
                            className="form-control"
                            placeholder="Nhập email"
                            value={formValue.email}
                            onChange={handleChange}

                        />
                        {formError.email &&
                        <div className="error-feedback">{formError.email}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Nhập password"
                            value={formValue.password}
                            onChange={handleChange}

                        />
                        {formError.password &&
                        <div className="error-feedback">{formError.password}</div>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password" className="form-label">
                            Confirm Password
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Nhập lại password"
                            value={formValue.confirmPassword}
                            onChange={handleChange}
                        />
                        {formError.confirmPassword &&
                        <div className="error-feedback">{formError.confirmPassword}</div>}
                    </div>
                    <button type="submit" className="submit-btn">
                        Register
                    </button>     
                    <Link to="/Login" >
                        <div className="login">
                            Đã có tài khoản , quay lại đăng nhập
                        </div>
                    </Link>                
                    
                
            </form>
        </div>
    </div>;
}