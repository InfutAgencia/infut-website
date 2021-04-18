import { Container } from "../layout/Layout.elements";
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
  return (
    <ContactContainer id="contacto">
      <ContactHeading>Háblanos, estamos para apoyarte</ContactHeading>
      <Form>
        <FormWrapper>
          <FormInput placeholder="Nombre"></FormInput>
          <FormInput placeholder="Email"></FormInput>
          <FormInput placeholder="Teléfono"></FormInput>
        </FormWrapper>
        <FormWrapper>
          <TextArea placeholder="Mensaje" rows="5"></TextArea>
          <SubmitButton>Enviar</SubmitButton>
        </FormWrapper>
      </Form>
    </ContactContainer>
  );
};

export default ContactForm;
