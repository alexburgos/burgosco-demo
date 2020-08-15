import React from 'react';
import { func, string } from 'prop-types';
import Button from '../styles/button';

const Toggle = ({ theme, themeToggler }) => {
   if (theme === 'light') {
     return <Button onClick={themeToggler}>Lights Out</Button>
   } else {
     return <Button onClick={themeToggler}>Light On</Button>;
   }
};
Toggle.propTypes = {
  theme: string.isRequired,
  themeToggler: func.isRequired,
};
export default Toggle;
