import PropTypes from 'prop-types';
/** @jsxRuntime classic */ // changing this in the future. Remove the line to see the error
/** @jsx jsx */
import { jsx, ThemeProvider } from '@emotion/react';

const theme = {
  color: {
    text: '#93918f',
    dark: '#000000',
    midDark: '#636363',
    midLight: '#d5d5d5',
    light: '#f4f4f4',
  },
  font: {
    family: {
      default: '"Montserrat", sans-serif',
      headline: '"Bitter", serif',
    },
    size: {
      default: '16px',
    },
    lineHeight: {
      default: 1.69,
    },
  },
};

const MyThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

export default MyThemeProvider;

MyThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
