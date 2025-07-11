import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1rem;
  background-color: rgba(15, 8, 75, 0.5);
  border: 1px solid #26175C;
  border-radius: 8px;
  color: #F0F0F0;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00C4FF;
    box-shadow: 0 0 10px rgba(0, 196, 255, 0.5);
  }
`;

const Label = styled.label`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: #a9a9a9;
  pointer-events: none;
  transition: all 0.3s ease;

  ${StyledInput}:focus ~ &,
  ${StyledInput}:not(:placeholder-shown) ~ & {
    top: -0.75rem;
    left: 0.75rem;
    font-size: 0.8rem;
    color: #00C4FF;
    padding: 0 0.25rem;
    background-color: #0D0221;
  }
`;

const InputField = ({ id, label, type = 'text', ...props }) => {
  return (
    <InputWrapper>
      <StyledInput id={id} type={type} placeholder=" " {...props} />
      <Label htmlFor={id}>{label}</Label>
    </InputWrapper>
  );
};

export default InputField;
