import React from 'react';
import { Error } from '../styles/LoginStyles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <Error>{message}</Error>
);

export default ErrorMessage;