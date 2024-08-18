import React from "react";

import {Error} from "../styles/loginStyles"

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return message ? <Error>{message}</Error> : null;
};

export default ErrorMessage;
