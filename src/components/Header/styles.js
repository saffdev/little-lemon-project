import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 10.0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform .3s ease-in-out;
  position: fixed;
  top: 0;
  align-self: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 7rem;
  z-index: 10;

  @media (max-width: 768px) {
    height: 8rem;
    // padding: 0 3rem;
  };
`;

export const Content = styled.div`
  width: 66%;

  @media (max-width: 1120px) {
    width: 90%;
  };

  @media (max-width: 768px) {
    height: 9rem;
  };
`;