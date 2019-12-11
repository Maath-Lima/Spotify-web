import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search"></input>
    </Search>

    <User>
      <img
        src="https://pbs.twimg.com/profile_images/1199073644720328710/3XFv81fu_400x400.png"
        alt="avatar"
      ></img>
      Matheus de Lima
    </User>
  </Container>
);

export default Header;
