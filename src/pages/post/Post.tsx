import React from "react";
import { useParams } from "react-router-dom"

import { Container, Title, Text, Group, Divider, 
	Stack, Textarea, Button, Box,  Avatar } from "@mantine/core";

const blogData = {
  title: "React ile Modern Web Uygulamaları",
  author: "burakbehlull",
  views: 5,
  publishedAt: "20 Temmuz 2025",
  content: "React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir.",
};

export default function Post() {

  const { postId, userId } = useParams()
  
  return (
    <Container size="sm" py="6.3rem">
      <Title order={2} mb="sm">
        {blogData.title}
      </Title>

      <Group spacing="xs" mb="md" align="center">
        <Text color="black" size="sm">
          @{blogData.author}
        </Text>
        <Text color="dimmed" size="sm">•</Text>
        <Text color="dimmed" size="sm">{blogData.views} views</Text>
        <Text color="dimmed" size="sm">•</Text>
        <Text color="dimmed" size="sm">{blogData.publishedAt}</Text>
      </Group>

      <Divider mb="md" />

      <Box
        style={{
          minHeight: "50vh",
          overflowY: "auto",
          paddingRight: "0.5rem",
        }}
        mb="md"
      >
        <Text size="md">
          {blogData.content} - Post: {userId} - {postId}
        </Text>
      </Box>

      <Divider my="xl" />

      <Box>
        <Text size="lg" weight={500} mb="sm">
          Yorum Yap
        </Text>
        <Textarea
          placeholder="Yorumunuzu yazın..."
          minRows={4}
          autosize
          mb="sm"
        />
        <Button>Gönder</Button>
      </Box>
    </Container>
  );
}
