import React from "react";

interface ButtonProps {
  size: 'small' | 'medium' | 'large'; 
  color: 'primary' | 'secondary' | 'succes'; 
  title: string; 
  ronClick: () => void;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { size, color, title, ronClick } = props;
  // класс по умолчанию
  const defaultClass =
    "mb-4 flex items-center rounded-2 h-[40px] w-[max-content] px-4 py-2";

  const classes = {
    colors: {
      primary: {
        button: "bg-amber-700",
        text: "text-red",
      },
      secondary: {
        button: "bg-red-500",
        text: "text-white",
      },
      succes: {
        button: "bg-green-500",
        text: "text-white",
      },
    },
    sizes: {
      small: "rounded-[100px] font-sm",
      medium: "rounded-[14px] font-base",
      large: "rounded-[16px] font-base min-h-[56px]",
    },
  };
  return (
    <div
      className={
        defaultClass + " " + classes.sizes[size] + " " + classes.colors[color].button
      }
    >
      <button className={classes.colors[color].text} onClick={ronClick}>{title}</button>
    </div>
  );
};