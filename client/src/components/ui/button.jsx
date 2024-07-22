import React from "react";

export const Button = ({ variant, size, className, children, ...props }) => {
  const baseStyles = "py-2 px-4 rounded";
  const variantStyles = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    ghost: "bg-transparent text-primary",
  };
  const sizeStyles = {
    icon: "p-2",
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${
    size && sizeStyles[size]
  } ${className}`;

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
};
