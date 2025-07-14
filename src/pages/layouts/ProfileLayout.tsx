import { Box, Flex, Text, Container } from "@mantine/core";

export default function ProfileLayout() {
  return (
    <Flex h="100vh">
      <Box w="70%" p="lg" style={{
			marginLeft: "60px"
	  }}>
        <Container p={30}>
          <Text fz="lg" fw={600} style={{
			 marginTop: "35px"
		  }}>
            Ana İçerik
          </Text>
		  
		  {[...Array(50)].map((_, i) => (
              <Text key={i} mt="sm" c="dimmed">
                {i + 1}. içerik satırı – kayar
              </Text>
            ))}
          <Text c="dimmed">Sayfa içeriği</Text>
        </Container>
      </Box>

      <Box
        w="30%"
        p="lg"
        style={{
			position: "fixed",
				top: 0,
				right: 0,
				height: "100vh",
				borderLeft: "1px solid #ccc",
				backgroundColor: "#f8f9fa",
				marginTop: "60px"
			}}
      >
        <Text fz="lg" fw={600}>
          Kullanıcı profili
        </Text>
        <Text c="dimmed">@burakbehlull</Text>
      </Box>
    </Flex>
  );
}
