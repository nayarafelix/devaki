import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`
export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #FFF;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #CCC;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  padding: 4rem 1rem;
`
