/* eslint-disable object-curly-newline */
import { ChangeEvent, FormEvent, useState } from 'react';

import Section from '../Section';
import { Title } from '../../styles/sections';

import { MessageField, SubjectField, SendButton, ContactForm } from './styles';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    subject: '',
    message: '',
  });

  function handleSubject(e: ChangeEvent<HTMLInputElement>) {
    const subject = e.target.value;
    const state = formState;

    setFormState({ ...state, subject });
  }

  function handleMessage(e: ChangeEvent<HTMLTextAreaElement>) {
    const message = e.target.value;
    const state = formState;

    setFormState({ ...state, message });
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(
      `mailto:contato@ifpeopensource.com.br?subject=${formState.subject}&body=${formState.message}`
    );
  }

  return (
    <Section accent>
      <Title>Contato</Title>
      <ContactForm onSubmit={(e) => handleSubmit(e)}>
        <SubjectField
          placeholder="Assunto"
          aria-label="assunto"
          value={formState.subject}
          onChange={(e) => handleSubject(e)}
        />
        <MessageField
          placeholder="Mensagem"
          aria-label="mensagem"
          onChange={(e) => handleMessage(e)}
          value={formState.message}
        />
        <SendButton aria-label="enviar mensagem" value="Enviar" />
      </ContactForm>
    </Section>
  );
};

export default Contact;
