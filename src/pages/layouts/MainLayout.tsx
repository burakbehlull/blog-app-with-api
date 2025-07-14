import { Box, Container, Flex, Text } from "@mantine/core";

export default function MainLayout({children}) {
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

      <Box h="100%"
	  style={{
		paddingTop: "5rem",
		paddingLeft: "1.3rem",
	  }}
	  >
		  {children}
      </Box>
    </Flex>
  );
}
