import styled from "styled-components";

export const Container = styled.footer`
  width: 66%;
  height: 45.7rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: white;

  ::before {
    content: "";
    width: 100%;
    height: 45.7rem;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: #495E57;
    z-index: -1;

    @media (max-width: 840px) {
      height: 40rem;
    };

    @media (max-width: 700px) {
      height: 90rem;
    };

    @media (max-width: 337px) {
      height: 95rem;
    };
  };

  @media (max-width: 1120px) {
    width: 90%;
  };

  @media (max-width: 840px) {
    height: 40rem;
  };

  @media (max-width: 700px) {
    height: 90rem;
  };

  @media (max-width: 337px) {
    height: 95rem;
  };
`;

export const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 700px) {
    flex-direction: column;
  };
`;

export const Copyright = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  text-align: center;

  a {
    text-decoration: underline;
    line-height: 150%;
    color: white;
  };
`;

export const Image = styled.img`
  width: 15.5rem;
  height: 32.1rem;
  object-fit: cover;
  margin-top: 4.8rem;
  border-radius: .5rem;

  @media (max-width: 840px) {
    display: none;
  };
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  margin-top: 7.7rem;

  h4 {
    height: 4.32rem;
    color: white;
  };

  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1.5rem;

    li {
      list-style: none;
    };
  };

  a {
    color: white;
  };
`;