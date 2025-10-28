import { Box, Flex, Text, Image, Group, Divider, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function Navbar() {

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  
  return (
    <>
		NAVBAR
	</>
  );
}