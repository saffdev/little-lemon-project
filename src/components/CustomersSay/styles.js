import styled from "styled-components";

export const Container = styled.div`
  width: 66%;
  height: 100vh;
  min-height: 59rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.3rem;
  // padding: 4rem;
  // background-color: ${({ theme }) => theme.colors.secondary};

  ::before {
    content: '';
    z-index: -1;
    position: absolute;

    @media (max-width: 1120px) {
      min-height: 100rem;
    };

    @media (max-width: 606px) {
      /* height: 100%; */
      height: 190rem;
      min-height: 190rem;
    };
  };

  @media (max-width: 1120px) {
    width: 90%;
    min-height: 100rem;
  };

  @media (max-width: 606px) {
    height: 100%;
  };
`;

export const Title = styled.h2`
  width: 100%;
  height: auto;
  text-align: center;
`;

export const Cards = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 840px) {
    flex-wrap: wrap;
  };

  @media (max-width: 606px) {
    align-items: center;
    flex-direction: column;
  };
`;