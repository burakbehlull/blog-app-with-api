import { Box, Container, Flex, Text } from "@mantine/core";
import { ProviderProps } from '@types'

export default function Layout({children}:ProviderProps) {
  return (
    <Flex direction="column" h="100vh">
      <Box
        h="10%"
        px="lg"
        py="md"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: "white",
          borderBottom: "1px solid #ccc",
        }}
      >
        <Text fw={600} fz="xl">
          Navbar Alanı
        </Text>
      </Box>

      <Box h="90%">
		  {children}
      </Box>
    </Flex>
  );
}
