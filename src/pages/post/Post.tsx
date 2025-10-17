import React from "react";
import { useParams } from "react-router-dom"

import { Container, Title, Text, Group, Divider, 
	Stack, Textarea, Button, Box, Avatar, Paper } from "@mantine/core";

import { IPost } from "@types";


const blogData : IPost = {
  title: "React ile Modern Web Uygulamaları",
  author: "burakbehlull",
  views: 5,
  publishedAt: "20 Temmuz 2025",
  content: "React, kullanıcı arayüzleri oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir.",
};
const comments : any = [
  {
    id: 1,
    user: "ayse_krt",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "Harika yazı, ellerine sağlık!",
  },
  {
    id: 2,
    user: "mehmet_dev",
    avatar: "https://i.pravatar.cc/150?img=12",
    content: "React hakkında bu kadar sade bir anlatım görmemiştim.",
  },
];

export default function Post() {

  const { postId, userId } = useParams()
  
  return (
    <Container size="sm" py="6.3rem">
      <Title order={2} mb="sm">
        {blogData.title}
      </Title>

      <Group gap="xs" mb="md" align="center">
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


      {comments.length > 0 && (
        <Box mb="xl">
          <Text size="lg" weight={500} mb="sm">
            Yorumlar ({comments.length})
          </Text>
          <Stack gap="md">
            {comments.map((comment) => (
              <Paper key={comment.id} shadow="xs" p="md" radius="md" withBorder>
                <Group align="flex-start">
                  <Avatar src={comment.avatar} radius="xl" />
                  <Box>
                    <Text size="sm" weight={500}>
                      @{comment.user}
                    </Text>
                    <Text size="sm">{comment.content}</Text>
                  </Box>
                </Group>
              </Paper>
            ))}
          </Stack>
        </Box>
      )}

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
