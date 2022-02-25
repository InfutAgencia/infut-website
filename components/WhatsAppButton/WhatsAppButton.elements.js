import styled, { keyframes } from 'styled-components';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const ripple = keyframes`

  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(1.5);
  }

`;

export const ButtonContainer = styled.div`
  width: 60px;
  height: 60px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  box-shadow: 2px 2px 5px 1px rgba(255, 255, 255, 0.1);
  z-index: 100;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: inherit;
    border-radius: 50%;
    z-index: -1;
    animation: ${ripple} 2s ease-out infinite;
  }

  @media screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    bottom: 20px;
    right: 10px;
    font-size: 22px;
  }
`;

export const WhatsAppIcon = styled(AiOutlineWhatsApp)`
  color: white;
`;
