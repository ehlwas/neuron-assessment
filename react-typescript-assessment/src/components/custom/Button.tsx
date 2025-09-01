import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary';
  children?: React.ReactNode;
}

const Button = ({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button className={`btn ${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button