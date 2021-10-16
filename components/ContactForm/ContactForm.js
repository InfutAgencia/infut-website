import { useState } from "react";
import Jump from "react-reveal/Jump";
import Fade from "react-reveal/Fade";
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
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation("common");

  //todo VErify Message before send it
  const sendMessage = (data) => {
    setLoading(true);
    axiosClient
      .post("/contacts", data)
      .then((res) => {
        // gtag.event({
        //   action: "submit_form",
        //   category: "Contact",
        //   label: user.message,
        // });

        setError(false);
        setLoading(false);
        reset();
      })
      .catch((err) => {
        // gtag.event({
        //   action: "submit_form_error",
        //   category: "Contact",
        //   label: error.response?.data,
        // });

        setError(true);
        setLoading(false);
      });
  };

  return (
    <ContactContainer id="contacto">
      <Jump>
        <ContactHeading>
          {t("homePage.contactSection.contactForm.headLine")}
        </ContactHeading>
      </Jump>
      <Fade bottom>
        <Form onSubmit={handleSubmit(sendMessage)}>
          <FormWrapper>
            <FormInput
              placeholder={t(
                "homePage.contactSection.contactForm.form.nameField"
              )}
              name="name"
              autoComplete="name"
              required
              {...register("name")}
            ></FormInput>
            <FormInput
              placeholder={t(
                "homePage.contactSection.contactForm.form.emailField"
              )}
              autoComplete="email"
              name="email"
              pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
              {...register("email")}
              required
            ></FormInput>
            <FormInput
              placeholder={t(
                "homePage.contactSection.contactForm.form.phoneField"
              )}
              autoComplete="tel"
              name="phone"
              required
              {...register("phone")}
            ></FormInput>
          </FormWrapper>
          <FormWrapper>
            <TextArea
              placeholder={t(
                "homePage.contactSection.contactForm.form.messageField"
              )}
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
              <span class="button_text">
                {t("homePage.contactSection.contactForm.form.sendButton")}
              </span>
            </SubmitButton>
            {error && (
              <ErrorWarning>
                {t("homePage.contactSection.contactForm.form.errorWarning")}
              </ErrorWarning>
            )}
          </FormWrapper>
        </Form>
      </Fade>
    </ContactContainer>
  );
};

export default ContactForm;
