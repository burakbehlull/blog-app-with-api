import { useState } from 'react';
import { MantineProvider, createTheme, ColorScheme } from '@mantine/core';

export default function Provider({ children }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    colorScheme,
	 colors: {
      dark: [
        '#e4e4e7', // text
        '#a1a1aa', // 
        '#71717a', // subtext
        '#71717a', // placeholder
        '#52525b',
        '#111111',
        '#09090b', // button and input -> 18181b
        '#09090b', // body
        '#a1a1aa', //
      ],
    },
  });

  return (
    <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
      {children}
    </MantineProvider>
  );
}
