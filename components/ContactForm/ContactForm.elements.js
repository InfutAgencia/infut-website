import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #00d1c1;
`;
export const Form = styled.form`
  width: 820px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3rem auto;

  @media screen and (max-width: 820px) {
    width: 100%;
    flex-direction: column;
    margin: 0;
    padding: 2rem;
  }
`;
export const ContactHeading = styled.p`
  font-weight: bolder;
  margin-top: 3rem;
  font-size: 2rem;
  @media screen and (max-width: 960px) {
    width: 100%;
    flex-direction: column;
    margin: 0;
    padding: 2rem;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 820px) {
    width: 100%;
    margin: 0rem 1rem;
  }
`;
export const FormInput = styled.input`
  background-color: #00d1c1;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 27px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #1c2237;
  width: 100%;
  &::placeholder {
    color: #2d2d2d;
    font-size: 18px;
  }
`;
export const TextArea = styled.textarea`
  background-color: #00d1c1;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 15px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #1c2237;
  resize: none;
  width: 100%;
  &::placeholder {
    color: #2d2d2d;
  }
`;
export const SubmitButton = styled.button`
  font-size: 18px;
  outline: none;
  border: none;
  margin-top: 0px;
  padding: 10px 20px;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

export const ErrorWarning = styled.small`
  font-size: 16px;
  color: rgb(238, 0, 0);
  font-weight: 700;
  margin: 8px 0;
`;
