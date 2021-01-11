import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import carl from "../avatars/carl.jpg";
import doug from "../avatars/doug.jpg";
import russel from "../avatars/russel.jpg";
import julius from "../avatars/julius.jpg";
import cat from "../avatars/cat.jpg";

import {
  Container,
  Header,
  NickName,
  IconHeader,
  ContentContainer,
  ContentBox,
  Avatar,
  Message,
  Arrow,
  Name,
  Icons
} from "./styles";

const Twitter = props => {
  const items = [
    {
      avatar: doug,
      header: "@russel",
      message:
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms."
    },
    {
      avatar: carl,
      header: "@carlf",
      message:
        "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words."
    },
    {
      avatar: russel,
      header: "@russel",
      message:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero.'
    },
    {
      avatar: cat,
      header: "@carlf",
      message:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete."
    },
    {
      avatar: julius,
      header: "@russel",
      message:
        "The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
    }
  ];
  return (
    <Container>
      <Header>
        <NickName>@delightful</NickName>
        <IconHeader>
          <FaRegEdit />
        </IconHeader>
      </Header>
      <ContentContainer>
        {items.map(item => {
          return <Item {...item} key={item.message} />;
        })}
      </ContentContainer>
    </Container>
  );
};

const Item = props => {
  const { avatar, message, header } = props;
  return (
    <ContentBox>
      <Avatar avatar={avatar}>
        <FaTwitter />
      </Avatar>
      <Message>
        <Name>{header}</Name>
        {message}
      </Message>
      <Arrow />
    </ContentBox>
  );
};

export default Twitter;
