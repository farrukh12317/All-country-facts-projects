import React from "react";

export const Contact =()=>{
    const Handleformdata = (formdata)=>{
       let submitdata  = Object.fromEntries(formdata.enterise())

    }
    return (
<div className="main-from">
    <div class="container">
        <div class="header">
            <h1>We Value Your Feedback</h1>
            <p>Your opinion helps us improve our services</p>
        </div>
        
        <div class="form-container">
            <form  action={Handleformdata}>
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <i class="fas fa-user"></i>
                    <input type="text" id="name" placeholder="Enter your name"/>
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address</label>
                    <i class="fas fa-envelope"></i>
                    <input type="email" id="email" placeholder="Enter your email"/>
                </div>
                
                <div class="form-group">
                    <label for="feedback">Your Feedback</label>
                    <i class="fas fa-comment"></i>
                    <textarea id="feedback" placeholder="Please share your feedback with us..."></textarea>
                </div>
                
                <button type="submit" class="submit-btn">
                    <i class="fas fa-paper-plane"></i> Submit Feedback
                </button>
            </form>
            
            <div class="additional-info">
                <p>Prefer to contact us directly? <a href="#">Click here</a></p>
            </div>
        </div>
    </div>
    </div>)

}