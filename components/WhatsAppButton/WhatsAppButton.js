import React from 'react';
import { ButtonContainer, WhatsAppIcon } from './WhatsAppButton.elements';
import * as gtag from '../../lib/gtag';
const WhatsAppButton = () => {
  const PHONE_NUMBER = process.env.NEXT_PUBLIC_PHONE_NUMBER;
  const DEFAULT_MESSAGE =
    'Hi%21%20Infut%2C%20I%20have%20a%20project%20and%20need%20you%20to%20help%20me%20growth%20and%20be%20to%20the%20next%20level%20in%20the%20digital%20universe.';
  const sendMessage = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      console.log('events');
      gtag.event({
        action: 'Join Chat',
        category: 'Contact',
        label: 'Contact via WhatsApp Button'
      });
      gtag.dataLayerEvent({
        eventName: 'JoinChat'
      });
    }
    window.open(`https://wa.me/57${PHONE_NUMBER}/?text=${DEFAULT_MESSAGE}`);
  };
  return (
    <ButtonContainer onClick={sendMessage}>
      <WhatsAppIcon />
    </ButtonContainer>
  );
};

export default WhatsAppButton;
