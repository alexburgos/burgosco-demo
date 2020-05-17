import React from 'react';
import { func, string } from 'prop-types';
import Button from '../styles/Button';

const Toggle = ({ theme, themeToggler }) => {
  return <Button onClick={themeToggler}>{theme === 'light' ? '🌙' : '☀️'}</Button>;
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
