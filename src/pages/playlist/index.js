import React from "react";

import { Container, Header, Songlist } from "./styles";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";
console.tron.log("teste");

const Playlist = () => (
  <Container>
    <Header>
      <img src="https://i.imgur.com/W7gHtDI.jpg" alt="Playlist" />

      <div>
        <span>PLAYLIST</span>
        <h1>This is LOONA</h1>
        <p>6 músicas</p>

        <button>PLAY</button>
      </div>
    </Header>

    <Songlist cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Álbum</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>X X</td>
          <td>LOONA</td>
          <td>[X X]</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Butterfly</td>
          <td>LOONA</td>
          <td>[X X]</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Satellite</td>
          <td>LOONA</td>
          <td>[X X]</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Curiosity</td>
          <td>LOONA</td>
          <td>[X X]</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Colors</td>
          <td>LOONA</td>
          <td>[X X]</td>
          <td>3:25</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Where you at</td>
          <td>LOONA</td>
          <td>[X X]</td>
          <td>3:25</td>
        </tr>
      </tbody>
    </Songlist>
  </Container>
);

export default Playlist;
