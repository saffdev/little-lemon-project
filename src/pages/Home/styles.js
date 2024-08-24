import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 3rem;
  };
`;