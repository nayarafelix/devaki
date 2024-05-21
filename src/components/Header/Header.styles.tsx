import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
`
export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #fff;
  color: #333;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #f0f0f0;
  }
`
