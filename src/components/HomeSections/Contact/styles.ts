import styled from 'styled-components';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SubjectField = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: props.placeholder,
}))`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};

  border: 2px solid transparent;
  transition: border 0.5s;

  outline: none;

  padding: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.detail};

  &::placeholder {
    color: ${({ theme }) => theme.formPlaceholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const MessageField = styled.textarea`
  font-size: 1.3rem;
  color: ${({ theme }) => theme.text};

  border: 2px solid transparent;
  transition: border 0.5s;

  resize: vertical;
  height: 200px;
  outline: none;

  padding: 8px;
  border-radius: 8px;
  background: ${({ theme }) => theme.detail};

  &::placeholder {
    color: ${({ theme }) => theme.formPlaceholder};
  }

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const SendButton = styled.input.attrs(() => ({
  type: 'submit',
}))`
  background: ${({ theme }) => theme.primary};
  color: #f5f5f5;

  border: none;
  outline: none;

  font-size: 1.3rem;
  text-align: center;

  display: block;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 1024px) {
    font-size: 1.78rem;
  }
`;
