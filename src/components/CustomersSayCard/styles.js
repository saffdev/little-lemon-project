import styled from "styled-components";

export const Container = styled.div`
  width: 20rem;
  height: 40.5rem;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
  padding: 2.6rem 2.4rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 10px 10px 30px 0px rgba(0,0,0,0.2);
`;

export const Rating = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  gap: .5rem;
`;

export const Customer = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;
  };

  span {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  };
`;

export const Testimonial = styled.p`
  width: 100%;
  height: auto;
  text-overflow: ellipsis;
  overflow: hidden;

  ::before {
    content: open-quote;
  };

  ::after {
    content: close-quote;
  };
`;