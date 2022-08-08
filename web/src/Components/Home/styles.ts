import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  max-width: 70rem;
  margin: 2rem auto;
  border-radius: 8px;
  gap: 1rem;
  background: ${({ theme }) => theme['gray-800']};

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
export const SearchAndCardContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`

export const SearchContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  background: ${(props) => props.theme['gray-900']};
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1rem 5rem;
  }
  label {
    margin: 0.25rem 0rem;
    font-weight: 700;
  }

  input {
    width: 100%;
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
  button {
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

    :hover {
      background: ${(props) => props.theme['purple-700']};
    }
  }
`
