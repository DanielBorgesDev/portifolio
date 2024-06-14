import styled from 'styled-components';

export const FormContainer = styled.form`
  display: grid;
width: 100%;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

export const InputContainer = styled.div``;

export const LabelForm = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

export const InputForm = styled.input`
  display: block;
  width: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  ::placeholder {
    color: #a0aec0;
  }
`;

export const TextareaForm = styled.textarea`
  display: block;
  width: 100%;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  ::placeholder {
    color: #a0aec0;
  }
`;

export const ButtonForm = styled.button`
  display: inline-flex;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  border: none;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  font-size: 1rem;
  font-weight: 500;
  border-radius: 0.375rem;
  color: white;
  background-color: #964b00;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: background-color 0.3s, opacity 0.3s;

  &:hover {
    background-color: ${({ disabled }) => !disabled && 'rgba(210, 155, 116, 0.8)'};
  }
`;
