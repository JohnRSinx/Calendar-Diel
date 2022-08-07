import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: grid;
  max-width: 70rem;
  margin: 1rem auto;
  padding: 1rem;
  grid-template-columns: 256px 256px 1fr;
  align-items: flex-start;
  border-radius: 8px;
  gap: 1.5rem;

  background: ${(props) => props.theme['gray-800']};

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }

     {
      grid-template-columns: 1fr;
    }
  }
`
export const SearchAndCardContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme['gray-900']};
    padding: 1rem 2rem;
    border-radius: 8px;
    align-items: center;
    @media (max-width: 768px) {
       {
        padding: 1rem 5rem;
      }
    }
    label {
      margin: 0.25rem 0rem;
      font-weight: 700;
    }
  }

  form > input {
    background: ${(props) => props.theme['gray-900']};
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['purple-500']};
    border-radius: 2px;

    font-size: 1.125rem;
    color: ${(props) => props.theme['gray-100']};
    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme['purple-500']};
    }
    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
    }
  }
  form > button {
    width: 70%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    background: ${(props) => props.theme['purple-500']};
    color: ${(props) => props.theme['gray-100']};
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme['purple-700']};
    }
  }
`
