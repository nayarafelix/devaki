import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Button = styled.a`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #FFF;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.2s;
  text-decoration: none;
  margin-top: 30px;
  &:hover {
    background-color: #CCC;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 14px;
  margin-top: 20px;
`;

export const Bio = styled.p`
  margin-top: 20px;
  text-align: center;
  max-width: 800px;
  line-height: 1.5;
  background-color: #F5F5F5;
  padding: 1rem 1rem;
  border-radius: 4px;
`
