import { Box, Flex, Text, Container } from "@mantine/core";

export default function ProfileLayout() {
  return (
    <Flex h="100vh">
      <Box w="70%" p="lg">
        <Container>
          <Text fz="lg" fw={600}>
            Ana İçerik
          </Text>
          <Text c="dimmed">Sayfa içeriği</Text>
        </Container>
      </Box>

      <Box
        w="30%"
        p="lg"
        style={{
          borderLeft: "1px solid #ccc",
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
