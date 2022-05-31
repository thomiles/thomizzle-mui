import React from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export interface ButtonProps extends MuiButtonProps {
  children: string;
}

export const Button = ({ children, ...buttonProps }: ButtonProps) => {
  return <MuiButton {...buttonProps}>{children}</MuiButton>;
};
