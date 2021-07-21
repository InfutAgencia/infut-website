import { useState } from "react";
import * as gtag from "../../lib/gtag";
import axiosClient from "../../config/axios";
import {
  ContactContainer,
  ContactHeading,
  Form,
  FormWrapper,
  FormInput,
  TextArea,
  SubmitButton,
} from "./ContactForm.elements";

const ContactForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //todo VErify Message before send it
  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      await axiosClient.post("/contacts", user);
      gtag.event({
        action: "submit_form",
        category: "Contact",
        label: user.message,
      });
    } catch (error) {
      gtag.event({
        action: "submit_form_error",
        category: "Contact",
        label: user.message,
      });
    }
  };

  return (
    <ContactContainer id="contacto">
      <ContactHeading>Háblanos, estamos para apoyarte</ContactHeading>
      <Form onSubmit={sendMessage}>
        <FormWrapper>
          <FormInput
            placeholder="Nombre"
            name="name"
            onChange={handleUser}
            required
          ></FormInput>
          <FormInput
            placeholder="Email"
            name="email"
            onChange={handleUser}
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            required
          ></FormInput>
          <FormInput
            placeholder="Teléfono"
            name="phone"
            onChange={handleUser}
            required
          ></FormInput>
        </FormWrapper>
        <FormWrapper>
          <TextArea
            placeholder="Mensaje"
            rows="5"
            name="message"
            onChange={handleUser}
            required
          ></TextArea>
          <SubmitButton type="submit">Enviar</SubmitButton>
        </FormWrapper>
      </Form>
    </ContactContainer>
  );
};

export default ContactForm;
