import React, { useState } from 'react';
import './Style.css';

const Validation = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        gridCheck: '',
        phone_number: '',
        msg_subject: ''
    });
    const [error, setError] = useState({});

    const Change = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const Submit = () => {
        const err = {};
        if (!input.name) {
            err.name = "Please enter your name";
        }
        if (!input.email) {
            err.email = "Please enter your email";
        }
        if (!input.gridCheck) {
            err.gridCheck = "Please enter your gridCheck";
        }
        if (!input.phone_number) {
            err.phone_number = "Please enter your phone number";
        }
        if (!input.msg_subject) {
            err.msg_subject = "Please enter your message";
        }
        setError(err); // Set the error state with the validation errors
    };

    return (
        <section className="contact-area pb-100">
            <div className="container">
                <div className="contact-form">
                    <div className="title">
                        <span>Contact Us</span>
                        <h3>Contact With Us</h3>
                    </div>

                    <form id="contactForm">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input type="text" name="name" onChange={Change} id="name" className="form-control" required data-error="Please enter your name" placeholder="Name" />
                                    <span style={{ color: 'red' }}>{error.name}</span>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input type="email" name="email" onChange={Change} id="email" className="form-control" required data-error="Please enter your email" placeholder="Email" />
                                    <span style={{ color: 'red' }}>{error.email}</span>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input type="text" name="phone_number" onChange={Change} id="phone_number" requireddata-error="Please enter your number" className="form-control" placeholder="Phone" />
                                    <span style={{ color: 'red' }}>{error.phone_number}</span>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <div className="form-group">
                                    <input type="text"
                                        name="msg_subject" id="msg_subject" onChange={Change} className="form-control" required
                                        data-error="Please enter your subject" placeholder="Subject" />
                                    <span style={{ color: 'red' }}>{error.msg_subject}</span>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control" id="message" size="50" cols="30" rows="5" required
                                        data-error="Write your message" placeholder="Your Message"></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <div className="form-check">
                                        <input name="gridCheck" onChange={Change} value="I agree to the terms and privacy policy."
                                            className="form-check-input" type="checkbox" id="gridCheck" required />
                                        <label className="form-check-label" for="gridCheck">
                                            I agree to the <a href="#">terms</a> and <a href="#">privacy policy</a>
                                        </label>
                                        <div className="help-block with-errors gridCheck-error"></div>
                                        <span style={{ color: 'red' }}>{error.gridCheck}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12">
                                <button type="button" onClick={() => Submit()} className="default-btn">
                                    Send Message
                                    <i className="flaticon-play-button"></i>
                                    <span></span>
                                </button>
                                <div id="msgSubmit" className="h3 text-center hidden"></div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Validation;

