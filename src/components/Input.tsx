import React from "react";

export const Input = (props) => {
  const { size, typesq, title,length,ronChange } = props;
  
  const defaultClass =
    "mb-4 bg-sky-200 flex items-center h-[40px] px-4 py-2 rounded-lg flex items-center rounded-2 h-[40px] px-4 py-2 outline-hidden";
    const k=1;
  const classes = {
    types: {
        succes: "text-green-800 border-2 border-green-500 ",
        error: "text-red-800 border-2 border-red-900",
      },
      
    lengths: {
        full: "w-full",
        medium: "w-96",
        short: "w-48",
    }
  };
  return (
    <>
    <input className={defaultClass+" "+classes.types[typesq]+" "+classes.lengths[length]} placeholder={title} onChange={ronChange} type="text"/>
    </>
  );
};
