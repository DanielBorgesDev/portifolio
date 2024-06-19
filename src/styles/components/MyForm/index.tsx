import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import emailjs from '@emailjs/browser';

import {
  ButtonForm,
  FormContainer,
  InputContainer,
  InputForm,
  LabelForm,
  TextareaForm,
} from "./styles";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [disableButtonState, setDisableButtonState] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const serviceId = "service_86voidp";
    const templateId = "template_t32vjuw";
    const publicKey = "sDxVBY6pxqQVRuWEB";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      from_message: message,
    };

    setDisableButtonState(true);

    try {
      await toast.promise(
        emailjs.send(serviceId, templateId, templateParams, publicKey),
        {
          pending: {
            render() { return '🏄‍♂️🌊 Sending email...'; }
          },
          success: {
            render() { return '☕ Email Sent!'; }
          },
          error: {
            render() { return 'Error!'; }
          }
        }
      );
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }

    setDisableButtonState(false);
  };

  return (
    <FormContainer action="#" method="POST" onSubmit={handleSubmit}>
      <InputContainer>
        <LabelForm htmlFor="full-name">Full name</LabelForm>
        <InputForm
          type="text"
          name="full-name"
          id="full-name"
          autoComplete="name"
          placeholder="Name *"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </InputContainer>
      <InputContainer>
        <LabelForm htmlFor="email">Email</LabelForm>
        <InputForm
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email *"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </InputContainer>
      <InputContainer>
        <LabelForm htmlFor="phone">Phone</LabelForm>
        <InputForm
          type="text"
          name="phone"
          id="phone"
          autoComplete="tel"
          placeholder="Phone *"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />
      </InputContainer>
      <InputContainer>
        <LabelForm htmlFor="message">Message</LabelForm>
        <TextareaForm
          id="message"
          name="message"
          rows={4}
          placeholder="Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </InputContainer>
      <InputContainer>
        <ToastContainer position="bottom-center" theme="dark" />
        <ButtonForm type="submit" disabled={disableButtonState}>
          Submit
        </ButtonForm>
      </InputContainer>
    </FormContainer>
  );
};

export default MyForm;
