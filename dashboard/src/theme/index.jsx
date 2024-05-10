import { useMemo } from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';

import { customShadows } from './custom-shadows';
import { darkPalette } from './palette';
import { overrides } from './overrides';
import { shadows } from './shadows';
import { typography } from './typography';



export default function ThemeProvider({ children }) {
  const memoizedValue = useMemo(
    () => ({
      palette: darkPalette(),
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
      shape: { borderRadius: 8 },
    }),
    []
  );

  const theme = createTheme(memoizedValue);

  theme.components = overrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.node,
};
