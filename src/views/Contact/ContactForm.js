import React, { useState } from 'react'
import AbInput from '../../components/AbInput/AbInput'
import AbTextArea from '../../components/AbTextArea/AbTextArea'
import AbButton from '../../components/AbButton/AbButton'

function ContactForm() {
    const [data,setData]=useState({})
    const [validationErrors, setValidationErrors] = useState({});
    const handleChange=(e)=>
    {
      setData({...data,[e.target.name]:e.target.value})
    }

    const validateInputs = () => {
        let errors = {};
        if (!data.name) {
          errors.name = "Name is required";
        }
        if (!data.email) {
          errors.email = "Email is required";
        }
        if (!data.message) {
          errors.message = "Message is required";
        }
        if (data.message&&data.message.length<3) {
            errors.message = "Message Should be atleast of 4 characters";
          }
        if (
            data.email &&
            !data.email.match(/^\s*\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,16})+\s*$/)
          ) {
            errors.email = "Provide a valid email";
          }
    
        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
      };

      const submitHandler=()=>
      {
        if(validateInputs())
        {
            
        }
      }
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <AbInput
          onChange={(e) => handleChange(e)}
          name="name"
          placeholder="Your Name Here"
          error={!!validationErrors.name}
          helperText={validationErrors.name}
        />
        <AbInput
          onChange={(e) => handleChange(e)}
          name="email"
          placeholder="Your Email Here"
          error={!!validationErrors.email}
          helperText={validationErrors.email}    
         />
        <AbTextArea 
        onChange={(e)=>handleChange(e)}
        name='message'
        placeholder='Your Message Here'
        error={!!validationErrors.message}
        helperText={validationErrors.message}
        />
        <AbButton
          type="contained"
          text="Send Message"
          onClick={submitHandler}
          large={true}
        />
    </div>
  )
}

export default ContactForm
