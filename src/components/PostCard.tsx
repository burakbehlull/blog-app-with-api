import { Box, Flex, Text, Image, Group, Divider, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export default function PostCard() {

  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);
  
  return (
    <Box px="md" py="md" style={{
		marginRight: "35px"
	}}>
      <Flex justify="space-between" align="start">
        <Box mr="lg" style={{ flex: 1 }}>
          <Text fw={700} fz="xl">
            C# öğrenmek 103: Asp.Net Core
          </Text>

          <Text mt="xs" c="dimmed" fz="sm">
            C# ile Web geliştirme yapalım. Bu yazımızda, yüzeysel olarak bir Web
            uygulaması çıkaracağız.
          </Text>

		  {/*spacing="xs"*/}	
          <Group mt="md" gap="xs">
            <Text fz="xs" c="gray">May 18</Text>
          </Group>
        </Box>

        <Image
          src="https://i.ibb.co/hD1wXsR/image.png"
          alt="Post image"
          radius="sm"
          w={isMobile ? 100 : 130}
        />
      </Flex>

      <Divider mt="xl" />
    </Box>
  );
}