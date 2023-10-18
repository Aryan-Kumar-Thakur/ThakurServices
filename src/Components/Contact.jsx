import React, { useState } from "react";

const Contact = () => {
    const [data,setdata] = useState({
        fullname:"",
        phone:"",
        email:"",
        message:"",
    })

    const formSubmit = (event)=>{
        event.preventDefault()
        alert(`My name is ${data.fullname} . My mobile number is ${data.phone} . My email is ${data.email} And Here what I want to say ${data.message}.`)
    }

    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setdata((prevdata)=>{
            return{
                ...prevdata,
                [name]: value,
            }
        })
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="com-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your Name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Phone</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="mobile number" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label" >Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent}></textarea>
                        </div>

                        <div class="col-auto">
                            <button type="submit" class="btn btn-outline-primary mb-3">Contact Us</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact