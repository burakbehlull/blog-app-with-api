import { Box, Container, Flex, Text } from "@mantine/core";

export default function MainLayout({children}) {
  return (
    <Flex direction="column" h="100vh">
      <Box
        h="9.9%"
        px="lg"
        py="md"
        style={{
          borderBottom: "1px solid #ccc",
        }}
      >
        <Text fw={600} fz="xl">
          Navbar
        </Text>
      </Box>

      <Box h="90.1%" >
		  {children}
      </Box>
    </Flex>
  )
}
