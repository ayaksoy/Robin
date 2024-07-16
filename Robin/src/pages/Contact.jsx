import React, {useState} from 'react';
import alertify from "alertifyjs";
import Hero from "../components/Hero";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        customerEmail: '',
        contactSubject: '',
        contactMessage: '',
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newContact = {
            name: formData.customerName,
            email: formData.customerEmail,
            subject: formData.contactSubject,
            message: formData.contactMessage,
        };


        fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newContact),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Post işlemi başarılı:', data);
                alertify.success("Your message has been sent successfully.");

            })
            .catch(error => {
                console.error('Hata:', error);

            });


        setFormData({
            customerName: '',
            customerEmail: '',
            contactSubject: '',
            contactMessage: '',
        });
    };
    return (
        <>
            <Hero title="Contact Us"/>
            <div className="page-content-wrapper">
                <div className="box-layout-map-area section-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="box-layout-map-container">
                                    <iframe title="map"
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12057.958532953704!2d29.3189393!3d40.926935!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cada22a9601b2f%3A0xf83f0868c348b10e!2sTeknopark%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1702994362704!5m2!1str!2str"
                                        width="100%" height={450} style={{border: 0}} allowFullScreen loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-icon-text-area section-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-icon-text-wrapper">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="single-contact-icon-text">
                                                <div className="single-contact-icon-text__icon">
                                                    <i className="fa fa-map-marker"/>
                                                </div>
                                                <h3 className="single-contact-icon-text__title">ADDRESS</h3>
                                                <p className="single-contact-icon-text__value">Sabancı Üniversitesi
                                                    Teknokent, Teknoloji Geliştirme Bölgesi, 34956
                                                    Tuzla/İstanbul</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="single-contact-icon-text">
                                                <div className="single-contact-icon-text__icon">
                                                    <i className="fa fa-phone"/>
                                                </div>
                                                <h3 className="single-contact-icon-text__title">PHONE NUMBER</h3>
                                                <p className="single-contact-icon-text__value">+90 537 063 31 62</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="single-contact-icon-text">
                                                <div className="single-contact-icon-text__icon">
                                                    <i className="fa fa-envelope"/>
                                                </div>
                                                <h3 className="single-contact-icon-text__title">MAIL ADDRESS</h3>
                                                <p className="single-contact-icon-text__value">info@kodusta.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-form-content-area section-space--contact-form">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="contact-form-content-wrapper">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="contact-form-wrapper">
                                                <form id="contact-form" onSubmit={handleSubmit}>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-6">
                                                            <input type="text" placeholder="First Name *"
                                                                   name="customerName" id="customerName"
                                                                   value={formData.customerName}
                                                                   onChange={handleInputChange} required/>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-6">
                                                            <input type="text" placeholder="Email *"
                                                                   name="customerEmail" id="customerEmail"
                                                                   value={formData.customerEmail}
                                                                   onChange={handleInputChange} required/>
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <input type="text" placeholder="Subject"
                                                                   name="contactSubject"
                                                                   id="contactSubject" value={formData.contactSubject}
                                                                   onChange={handleInputChange}/>
                                                        </div>
                                                        <div className="col-lg-12">
                                                         <textarea cols={30} rows={10} placeholder="Message *"
                                                                   name="contactMessage" id="contactMessage"
                                                                   value={formData.contactMessage}
                                                                   onChange={handleInputChange} required/>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <button type="submit" id="submit" className="theme-button">
                                                                SEND A MESSAGE
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                                <p className="form-messege"/>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="contact-form-content">
                                                <p>Please view our FAQ to find answers to your questions or send us
                                                    an email for general questions! Due to unexpected volumes, it is
                                                    taking us a little longer than we would like to respond to
                                                    emails. Our current email response time is 3 business days.</p>
                                                <ul className="social-links">
                                                    <li><a href="http://www.facebook.com/"><i
                                                        className="fa fa-facebook"/></a></li>
                                                    <li><a href="http://www.plus.google.com/"><i
                                                        className="fa fa-google-plus"/></a></li>
                                                    <li><a href="http://www.linkedin.com/"><i
                                                        className="fa fa-linkedin"/></a></li>
                                                    <li><a href="http://www.twitter.com/"><i
                                                        className="fa fa-twitter"/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ContactForm;
