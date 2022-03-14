import { useState } from 'react';
import Jump from 'react-reveal/Jump';
import Fade from 'react-reveal/Fade';
import axiosClient from '../../config/axios';
import {
  ContactContainer,
  ContactHeading,
  Form,
  FormWrapper,
  FormInput,
  TextArea,
  SubmitButton,
  ErrorWarning
} from './ContactForm.elements';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //todo VErify Message before send it
  const sendMessage = (data) => {
    setLoading(true);
    axiosClient
      .post('/contacts', data)
      .then((res) => {
        console.log(res.data);
        if (typeof window !== 'undefined') {
          gtag.event({
            action: 'SubmitContactForm',
            category: 'Contact',
            label: res.data?.message
          });
          gtag.dataLayerEvent({
            eventName: 'SubmitContactForm'
          });
        }

        setError(false);
        setLoading(false);
        reset();
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <ContactContainer id="contacto">
      <Jump>
        <ContactHeading>Talk to us, we are here to support you.</ContactHeading>
      </Jump>
      <Fade bottom>
        <Form onSubmit={handleSubmit(sendMessage)}>
          <FormWrapper>
            <FormInput
              placeholder="Name"
              name="name"
              autoComplete="name"
              required
              {...register('name')}
            ></FormInput>
            <FormInput
              placeholder="Email"
              autoComplete="email"
              name="email"
              pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
              {...register('email')}
              required
            ></FormInput>
            <FormInput
              placeholder="Phone number"
              autoComplete="tel"
              name="phone"
              required
              {...register('phone')}
            ></FormInput>
          </FormWrapper>
          <FormWrapper>
            <TextArea
              placeholder="Message"
              rows="5"
              name="message"
              autoComplete="off"
              {...register('message')}
              required
            ></TextArea>

            <SubmitButton
              className={loading ? 'spinner_loading' : ''}
              type="submit"
            >
              <span className="button_text">Send message</span>
            </SubmitButton>
            {error && (
              <ErrorWarning>Whoops! An error has occurred</ErrorWarning>
            )}
          </FormWrapper>
        </Form>
      </Fade>
    </ContactContainer>
  );
};

export default ContactForm;
