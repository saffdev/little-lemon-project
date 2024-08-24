import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 100%;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-weight: bold;
  };

  li {
    font-family: Karla;
  }

  .basketIcon {
    max-width: 3.5rem;
  };

  .orderBtn {
    padding: 1rem 1.5rem;
    color: white;
    border-radius: 1.6rem;
    background-color: #495E57;
  };

  @media (max-width: 768px) {
    display: none;
  };
`;