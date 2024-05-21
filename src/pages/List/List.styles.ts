import styled from "styled-components";

export const ListContainer = styled.section`
  text-align: center;
  margin: 2rem;

  div {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
`
export const Title =  styled.h1`
    font-size: 2rem;
    margin-bottom: 2rem;
`

export const Image = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
`

export const Box = styled.a`
    background-color: #f5f5f5;
    padding: 1rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    text-decoration: none;
    color: #333;
    transition: 0.2s;
    &:hover {
      background-color: #e5e5e5;
    }
`
