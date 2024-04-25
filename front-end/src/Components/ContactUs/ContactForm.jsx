import React, { useState } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Loading from '../Loading/Loading';

function ContactForm() {
    const baseURL = "https://apis.unlimited-eg.com/api/contact/";
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ message: '', isErr: false });

    const validationSchema = Yup.object({
        subject: Yup.string().required('Subject is required'),
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        message: Yup.string().required('Message is required')
    });



    const contactFormik = useFormik({
        initialValues: {
            subject: '',
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        },
        validationSchema,
        onSubmit: (values) => {
            const newValues = {
                firstname: values.firstName,
                lastname: values.lastName,
                email: values.email,
                subject: values.subject,
                message: values.message
            };
            setLoading(true);

            axios.post(baseURL, newValues)
                .then((response) => {
                    if (response.status === 201) {
                        setMessage({ message: 'Your message has been successfully sent.', isErr: false });
                        contactFormik.resetForm();
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    setMessage({ message: 'Failed to send message. Please try again.', isErr: true });
                    setLoading(false);
                });
        }
    });

    return (
        <div className="tf-section-2 widget-box-icon">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-section-1">
                            <h2 className="tf-title pb-20">Contact us</h2>
                            <p className="pb-40">Have A Question? Need Help? Don't Hesitate, Drop Us A Line</p>
                        </div>
                    </div>
                    <div className="col-12">
                        <form id="commentform" className="comment-form" onSubmit={contactFormik.handleSubmit}>
                            <div className="flex gap30">
                                <fieldset className="firstName">
                                    <input className="style-1" type="text" id="firstName" placeholder="Your first name*" name="firstName" tabIndex={2} aria-required="true" required onChange={contactFormik.handleChange} value={contactFormik.values.firstName} />
                                </fieldset>
                                <fieldset className="lastName">
                                    <input className="style-1" type="text" id="lastName" placeholder="Your last name*" name="lastName" tabIndex={2} aria-required="true" required onChange={contactFormik.handleChange} value={contactFormik.values.lastName} />
                                </fieldset>
                                <fieldset className="email">
                                    <input className="style-1" type="email" id="email" placeholder="Email address*" name="email" tabIndex={2} aria-required="true" required onChange={contactFormik.handleChange} value={contactFormik.values.email} />
                                </fieldset>
                                <fieldset className="subject">
                                    <input className="style-1" type="text" id="subject" placeholder="Subject" name="subject" tabIndex={2} aria-required="true" required onChange={contactFormik.handleChange} value={contactFormik.values.subject} />
                                </fieldset>
                            </div>
                            <fieldset className="message">
                                <textarea className="style-1" id="message" name="message" rows={4} placeholder="Your message*" tabIndex={4} aria-required="true" required onChange={contactFormik.handleChange} value={contactFormik.values.message} />
                            </fieldset>

                                {
                                    loading ?  <div className=' flex justify-center' > <Loading /> </div>
                                     :
                                     <>
                                        <div className="btn-submit  flex  flex-flex-row-reverse  ">
                                        <button className="tf-button style-1" type="submit">Send message <i className="icon-arrow-up-right2" /></button>
                                        </div>
                                    </>
                                }
                            
                                {
                                    message.message && <p className={message.isErr ? 'text-danger  my-5 ' : 'text-success text-center  my-5'}>{message.message}</p>
                                }

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
