import React from "react";
import {
  ComplementText,
  Container,
  ContentContainer,
  ImageBanner,
  Title,
} from "./components";

import { Props } from "./types/props";

const Banner: React.FC<Props> = ({ imageUrl, title, subtitle }) => {
  return (
    <Container>
      <ContentContainer>
        <div>
          <Title>{title}</Title>

          <ComplementText>{subtitle}</ComplementText>
        </div>

        <ImageBanner url={imageUrl} />
      </ContentContainer>
    </Container>
  );
};

export default Banner;
