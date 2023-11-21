import React, { useState } from 'react'
import Validation from './Validation'

const FormValidation = () => {
    const [values,setValues] = useState({
        name:'',
        email:'',
        password:''
    })

    const [errors,setErrors] = useState({})

    const handleChange = (e) => {
        const newObj = {...values, [e.target.name]:e.target.value}
        setValues(newObj)
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values))
    }

  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
        <h1>Form Validation</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="name"
              placeholder="Username"
              onChange={handleChange}
            />
          </div>
          {errors.name && <p style={{color: "red",textAlign: "left"}}>{errors.name}</p>}
          <p></p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          {errors.email && <p style={{color: "red",textAlign: "left"}}>{errors.email}</p>}
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          {errors.password && <p style={{color: "red",textAlign: "left"}}>{errors.password}</p>}
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FormValidation