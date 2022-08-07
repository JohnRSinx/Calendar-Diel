import styled from 'styled-components'

export const CardsContainer = styled.article`
  background: ${(props) => props.theme['gray-900']};
  border-radius: 8px;

  align-items: center;
  margin-top: 1rem;
  padding: 1rem 1rem;

  @media (max-width: 768px) {
     {
      padding: 1rem 5rem;
    }
  }

  p {
    font-weight: 700;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4.5rem;
  align-items: center;

  div {
    display: flex;
  }
`

export const Buttons = styled.button`
  display: flex;
  margin-right: 0.5rem;
  border: 0;
  padding: 0.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme['gray-100']};
  :hover {
    background: ${(props) => props.theme['purple-700']};
  }
`
