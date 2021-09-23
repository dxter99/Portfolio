import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

  

const Contacts = () => {
  const history = useHistory();
  const [successMessage, setsuccessMessage] = useState("");
  const{register, handleSubmit,formState:{errors} } = useForm();

  const serviceID = "service_id";
  const templateID = "template_id";
  const userID = "user_AuaxxQWTbmD09bhut01ol";

  const onSubmit =(data,r)=>{
    sendEmail(
        serviceID,
        templateID,
        {
            name: data.name,
            Phone: data.Phone,
            Email: data.Email,
            Subject: data.Subject,
            Discription: data.Discription
        },
        userID
    )
    r.target.reset();
  }

    const sendEmail = (serviceID, templateID, variables, userID)=> {
        emailjs.send(serviceID, templateID, variables, userID)
          .then(() => {
              setsuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
              
          }).catch(err=>console.error(`Something went wrong ${err}`));
      }
    
return (
        <div id="Contacts" className="contacts">
            <div className="text-center">
            <h1>Contact Me</h1>
            <p>Let's get in touch we can have some chat!</p>
        <span className="success-message">{successMessage}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/*NAME INPUT*/}
                        <div className="text-center">
                        <input
                        id="Name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        aria-invalid={errors.name ? "true" : "false"}
                        {...register("name",{
                                required:"Please enter your name",
                                maxLength:{
                                    value:20,
                                    message:'Please enter a name with fewer then 20 characters'
                                },
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.name && errors.name.message}
                        </span>
                        {/*PHONE INPUT*/}
                        <div className="text-center">
                        <input
                        id="Phone"
                        type="Phone"
                        className="form-control"
                        placeholder="Phone Number"
                        name="Phone"
                        aria-invalid={errors.Phone ? "true" : "false"}
                        {...register("Phone",{
                                required:"Please add your phone number",
                                pattern:{
                                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                                    message: "Invalid Phone Number"
                                },
                                maxLength:{
                                    value:10,
                                    message:'Please enter a name with fewer then 10 Number'
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                         <span className="error-message">
                            {errors.Phone && errors.Phone.message}
                        </span>
                        {/*EMAIL INPUT*/}
                        <div className="text-center">
                        <input
                        id="Email"
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="Email"
                        aria-invalid={errors.Email ? "true" : "false"}
                        {...register("Email",{
                                required:"Please provide you email",
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid Email"
                                }
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.Email && errors.Email.message}
                        </span>
                        {/*SUBJECT INPUT*/}
                        <div className="text-center">
                        <input
                        type="Subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="Subject"
                        aria-invalid={errors.Subject ? "true" : "false"}
                        {...register("Subject",{
                                required:"Please enter Subject.",
                            })
                        }
                        />
                        <div className="line"></div>
                        </div>
                        <span className="error-message">
                            {errors.Subject && errors.Subject.message}
                        </span>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/*DESCRIPTION INPUT*/}
                        <div className="text-center">
                        <textarea
                        id="Discription"
                        type="text"
                        className="form-control"
                        placeholder="Discription"
                        name="Discription"
                        aria-invalid={errors.Discription ? "true" : "false"}
                        {...register("Discription",{
                                required:"Please describe shortly your project needs...",
                            })
                        }
                        ></textarea>
                        <div className="line"></div></div>
                        <span className="error-message">
                        {errors.Discription && errors.Discription.message}
                        </span>
                        <button className="btn-main-offer contact-btn" style={{letterSpacing: '10px'}} type="submit">contact me</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
