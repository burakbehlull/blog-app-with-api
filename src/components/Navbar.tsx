import { Box, Flex, Text, Group, useMantineTheme, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

  return (
    <Box
      component="nav"
      sx={{
        backgroundColor: theme.colors.dark[6],
        color: "white",
        padding: "0.8rem 1.5rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Flex justify="space-between" align="center">
        <Text fw={700} fz="xl">
          Blog App
        </Text>

        {!isMobile && (
          <Group gap="xl">
            <Button variant="subtle" color="gray" c="#212529">
              Home
            </Button>
            <Button variant="subtle" color="gray" c="#212529">
              About
            </Button>
            <Button variant="subtle" color="gray" c="#212529">
              Contact
            </Button>
          </Group>
        )}

        <FaUserCircle size={26} style={{ cursor: "pointer" }} />
      </Flex>
    </Box>
  );
}
