import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Title, Text, Group, Divider, TextInput, Button, Box, } from "@mantine/core";
import { TiptapEditor } from "@components";

export default function CreatePost() {
  const { postId, userId } = useParams();

  const [title, setTitle] = useState("React ile Modern Web Uygulamaları");
  const [savedHTML, setSavedHTML] = useState("");

  const handleShow = (html: string) => {
    setSavedHTML(html);
    console.log("Kayıt Edilen HTML:", html);
  }
  const handleSave = () => {}


  return (
    <Container size="sm" py="6.3rem">
      <TextInput
        label="Başlık"
        placeholder="Başlık girin"
        value={title}
        onChange={(event) => setTitle(event.currentTarget.value)}
        mb="md"
      />

      <Group spacing="xs" mb="md" align="center">
        <Text color="black" size="sm">
          @burakbehlull
        </Text>
        <Text color="dimmed" size="sm">•</Text>
        <Text color="dimmed" size="sm">5 views</Text>
        <Text color="dimmed" size="sm">•</Text>
        <Text color="dimmed" size="sm">20 Temmuz 2025</Text>
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
        <TiptapEditor onShow={handleShow} onSave={handleSave} />
      </Box>

      <Divider my="xl" />
      
      <Box mt="xl">
        <Title order={4}>Görünüm: </Title>
        <Box
          dangerouslySetInnerHTML={{ __html: savedHTML }}
          style={{
            border: "1px dashed #ccc",
            padding: "1rem",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
            marginTop: "1rem",
          }}
        />
      </Box>
    </Container>
  );
}
