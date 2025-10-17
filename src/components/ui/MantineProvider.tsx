import { useState } from 'react';
import { MantineProvider, createTheme } from '@mantine/core';
import { ProviderProps } from '@types'

export default function Provider({ children }:ProviderProps) {
  const [colorScheme, setColorScheme] = useState<string>('light');

  const toggleColorScheme = () => setColorScheme((prev:string) => (prev === 'light' ? 'dark' : 'light'));
  

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
