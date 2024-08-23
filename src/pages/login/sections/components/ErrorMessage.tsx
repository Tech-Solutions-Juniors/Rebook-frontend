import React from 'react';
import { Error } from '../styles/loginStyles';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <Error>{message}</Error>
);

export default ErrorMessage;