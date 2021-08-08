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
  ErrorWarning,
} from "./ContactForm.elements";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //todo VErify Message before send it
  const sendMessage = async (data) => {
    setLoading(true);
    try {
      await axiosClient.post("/contacts", data);
      if (typeof window !== "undefined") {
        gtag.event({
          action: "submit_form",
          category: "Contact",
          label: user.message,
        });
      }
      setError(false);
      setLoading(false);
      reset();
    } catch (error) {
      if (typeof window !== "undefined") {
        gtag.event({
          action: "submit_form_error",
          category: "Contact",
          label: error.response?.data,
        });
      }
      setError(true);
      setLoading(false);
    }
  };

  return (
    <ContactContainer id="contacto">
      <ContactHeading>Háblanos, estamos para apoyarte</ContactHeading>
      <Form onSubmit={handleSubmit(sendMessage)}>
        <FormWrapper>
          <FormInput
            placeholder="Nombre"
            name="name"
            autoComplete="name"
            required
            {...register("name")}
          ></FormInput>
          <FormInput
            placeholder="Email"
            autoComplete="email"
            name="email"
            pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
            {...register("email")}
            required
          ></FormInput>
          <FormInput
            placeholder="Teléfono"
            autoComplete="tel"
            name="phone"
            required
            {...register("phone")}
          ></FormInput>
        </FormWrapper>
        <FormWrapper>
          <TextArea
            placeholder="Mensaje"
            rows="5"
            name="message"
            autoComplete="off"
            {...register("message")}
            required
          ></TextArea>

          <SubmitButton
            className={loading ? "spinner_loading" : ""}
            type="submit"
          >
            <span class="button_text">Enviar</span>
          </SubmitButton>
          {error && <ErrorWarning>¡Ups! Ha ocurrido un error</ErrorWarning>}
        </FormWrapper>
      </Form>
    </ContactContainer>
  );
};

export default ContactForm;
