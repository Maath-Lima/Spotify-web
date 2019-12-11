import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>

    <List>
      <Playlist to="/playlists/1">
        <img src="https://i.imgur.com/W7gHtDI.jpg" alt="Playlist" />
        <strong>This is LOONA</strong>
        <p>Álbum da década escolhido pela billboard!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://i.imgur.com/W7gHtDI.jpg" alt="Playlist" />
        <strong>This is LOONA</strong>
        <p>Álbum da década escolhido pela billboard!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://i.imgur.com/W7gHtDI.jpg" alt="Playlist" />
        <strong>This is LOONA</strong>
        <p>Álbum da década escolhido pela billboard!</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://i.imgur.com/W7gHtDI.jpg" alt="Playlist" />
        <strong>This is LOONA</strong>
        <p>Álbum da década escolhido pela billboard!</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
