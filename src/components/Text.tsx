import React from "react";

export const Text = (props) => {
  const { color, text} = props;
  

  const classes = {
    colors: {
      sssss: {
        color: 'black',
        fontSize: '18px',
        textDecoration: 'underline',
      },
      succes: {
        color: 'green',
        fontSize: '20px',
        fontStyle: 'italic',
      },
      error: {
        color: 'red',
        fontSize: '24px',
        fontWeight: 'bold',
      },
    }
  };
  return (
    <>     
    <p style={classes.colors[color]} >{text}</p>
    </>
    
  );

};
