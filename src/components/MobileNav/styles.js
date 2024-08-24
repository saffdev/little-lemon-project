import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 100%;
  display: none;

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    font-weight: bold;
  };

  button {
    border: none;
    background-color: transparent;
  };

  .basketIcon {
    max-width: 3.5rem;
  };

  @media (max-width: 768px) {
    display: block;
  };
`;

export const Menu = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  overflow: hidden;

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    list-style: none;
    font-weight: bold;
  };

  button {
    position: fixed;
    left: 5rem;
    top: 3rem;
    border: none;
    background-color: transparent;

    img {
      max-width: 3.5rem;
    };
  };

  .orderBtn {
    padding: 1rem 1.5rem;
    color: white;
    border-radius: 1.6rem;
    background-color: #495E57;
  };

  &.opened {
    transform: translateX(0);
  };
`;