import { Box, Flex, Text, Container, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { PostCard } from "@components";
import { useParams } from "react-router-dom"

export default function ProfileLayout() {
  const theme = useMantineTheme();
  
  const { userId } = useParams()
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  const NAVBAR_HEIGHT = 60;

  return (
    <Box mt={NAVBAR_HEIGHT}>
      {isMobile && (
        <Box p="md" style={{
			marginLeft: "36px",
			paddingTop: "3rem",
			
		}}>
          <Text fz="lg" fw={600}>
            Kullanıcı Profili
          </Text>
          <Text c="dimmed">@burakbehlull</Text>
        </Box>
      )}

      <Flex direction={isMobile ? "column" : "row"}>
        <Box
          w={isMobile ? "100%" : "63%"}
          p="lg"
          style={{ marginLeft: isMobile ? 0 : 60 }}
        >
          <Container>
            {[...Array(5)].map((_, i) => (
              <PostCard key={i} />
            ))}
          </Container>
        </Box>

        {!isMobile && (
          <Box
            w="30%"
            p="lg"
            style={{
              position: "fixed",
              top: NAVBAR_HEIGHT,
              right: 0,
              height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
              borderLeft: "1px solid #ccc",
              backgroundColor: "#f8f9fa",
            }}
          >
            <Text fz="lg" fw={600}>
              Kullanıcı Profili
            </Text>
            <Text c="dimmed">@burakbehlull - {userId}</Text>
          </Box>
        )}
      </Flex>
    </Box>
  );
}
