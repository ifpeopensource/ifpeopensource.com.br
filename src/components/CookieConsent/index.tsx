import { useContext } from 'react';
import ReactCookieConsent from 'react-cookie-consent';
import { ThemeContext } from 'styled-components';

import useWindowDimensions from '../../hooks/useWindowDimensions';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept,
  onDecline,
}) => {
  const theme = useContext(ThemeContext);
  const { width } = useWindowDimensions();

  return (
    <ReactCookieConsent
      disableStyles
      enableDeclineButton
      flipButtons
      onAccept={onAccept}
      onDecline={onDecline}
      style={{
        position: 'fixed',
        opacity: width >= 0 ? '1' : '0', // Prevent layout shift
        transition: 'opacity 0.5s ease-in-out',
        zIndex: 999,
        display: 'flex',
        flexDirection: width > 768 ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'calc(100% - 4rem)',
        margin: '0 2rem 1rem 2rem',
        gap: '1rem',
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: `0 0 0.75rem 0.75rem ${theme.shadow}`,
        backgroundColor: theme.cookieBanner,
      }}
      buttonText="Aceitar"
      declineButtonText="Recusar"
      buttonStyle={{
        backgroundColor: theme.primary,
        color: theme.text,
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
        marginRight: width >= 1205 ? '0.5rem' : '0',
        marginBottom: width <= 1209 ? '0.5rem' : '0',
      }}
      declineButtonStyle={{
        backgroundColor: theme.detail,
        color: theme.text,
        fontWeight: 'bold',
        border: 'none',
        borderRadius: '0.5rem',
        padding: '0.5rem 1rem',
        cursor: 'pointer',
      }}
    >
      Nosso site usa cookies para melhorar sua experiência e analisar o tráfego.
      Ao clicar em &quot;Aceitar&quot;, você concorda com o uso de cookies.
    </ReactCookieConsent>
  );
};

export default CookieConsent;
