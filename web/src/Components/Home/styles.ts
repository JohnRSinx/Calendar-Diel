import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: grid;
  max-width: 70rem;
  margin: 1.25rem auto;
  padding: 1rem;
  grid-template-columns: 18rem 1fr;
  align-items: flex-start;
  border-radius: 8px;
  gap: 1.5rem;

  background: ${(props) => props.theme['gray-900']};

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }

     {
      grid-template-columns: 1fr;
    }
  }
`
