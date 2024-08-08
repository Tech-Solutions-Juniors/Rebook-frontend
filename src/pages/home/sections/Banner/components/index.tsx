import styled from "styled-components";
import homeBannerBackgroundVector from "@assets/home-banner-background-vector.png";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: right -50% top / contain url(${homeBannerBackgroundVector}) no-repeat;
  z-index: -1;
`;

export const ContentContainer = styled.main`
  width: 100%;
  max-width: ${(props) => props.theme.containerMaxWidth};
  padding: 1rem;
  display: grid;
  grid-template-columns: 47.5% 48%;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-size: 3.25rem;
`;

export const ComplementText = styled.p`
  font-size: 1rem;
`;

export const ImageBanner = styled.div<{ url: string }>`
  width: 100%;
  height: 100%;
  background: center right / contain url(${(props) => `"${props.url}"`})
    no-repeat;
`;
