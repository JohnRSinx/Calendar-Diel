import styled from 'styled-components'

export const Container = styled.h1`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme['gray-900']};
  padding: 1rem;
  border-radius: 8px;
`
