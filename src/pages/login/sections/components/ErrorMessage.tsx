import React from "react";

import {Error} from "../styles/loginStyles"

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <Error className="error">{message}</Error>
);

export default ErrorMessage;
