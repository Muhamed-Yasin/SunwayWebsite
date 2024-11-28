import { useState } from "react";
import React from "react";
import emailjs from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, phone, message }, setState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(name, email, phone, message);
  
    // Replace below with your own Service ID, Template ID, and Public Key from your EmailJS account
    const serviceID = "service_twkijz8";
    const templateID = "template_o9h3b4k";
    const publicKey = "JFLJ-1TYjWG2K8G4e";
  
    // Send form data to yourself
    emailjs.sendForm(serviceID, templateID, e.target, publicKey).then(
      (result) => {
        console.log(result.text);
        setIsSubmitting(false); // Reset the submitting state
      },
      (error) => {
        console.log(error.text);
        setIsSubmitting(false); // Reset the submitting state
      }
    );
  
    // Send acknowledgment email to the user
    const acknowledgmentTemplateID = "template_6f5rl8e";
    const acknowledgmentParams = {
      user_name: name,
      user_email: email,
    };
  
    emailjs.send(serviceID, acknowledgmentTemplateID, acknowledgmentParams, publicKey).then(
      (result) => {
        console.log("Acknowledgment email sent:", result.text);
        clearState(); // Clear the form
      },
      (error) => {
        console.log("Failed to send acknowledgment email:", error.text);
        clearState(); // Clear the form
      }
    );
  };
  
 return (
  <>      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" validate onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={email}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                

                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                        value={phone}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={message}
                    required
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                {isSubmitting ? "Submitting..." : "Send"}
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Head Office Address
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Our Locations
                </span>{" "}
                Aluva: 
                <br/>
                Yousuf: 8304822396
                <br/>
                Edavanakkad:
                <br/>
                Siddick Valiyara: 9447299795
                <br/>
                Kothamangalam:
                <br/>
                Ali: 9496663623
                <br/>
                Perumbavoor:
                <br/> 
                Naseer: 9037388544
                <br />
                Kakkanad:
                <br/>
                Abdul Kalam: 7907723901
              </p>
              <p>
                <a
                  href="https://wa.me/+917907723901?text=Hello%20Sunway%20Energy%20Solutions,%20I%20would%20like%20to%20chat%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-custom btn-lg"
                ><i className="fa fa-whatsapp"></i>Chat on WhatsApp
                </a>
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Sunway Energy Solutions
          </p>
        </div>
      </div>
      </>

  );
};
