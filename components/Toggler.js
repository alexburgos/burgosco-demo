import React from 'react';
import { func, string } from 'prop-types';
import Button from '../styles/Button';

const Toggle = ({ theme, themeToggler }) => {
   if (theme === 'light') {
     return <Button onClick={themeToggler}>🌚</Button>
   } else {
     return <Button onClick={themeToggler}>🌞</Button>;
   }
};
Toggle.propTypes = {
  theme: string.isRequired,
  themeToggler: func.isRequired,
};
export default Toggle;
