import styled from 'styled-components'

export const ContainerHeader = styled.h1`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme['gray-900']};
  padding: 1rem;
  max-width: 70rem;
  margin: 0.75rem auto;
  border-radius: 8px;
`
