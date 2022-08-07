import styled from 'styled-components'

export const ModalContainer = styled.div`
  h2 {
    color: ${(props) => props.theme['gray-100']};
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: center;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 4px;
    border: none;
    background: ${(props) => props.theme['gray-300']};
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: ${(props) => props.theme['gray-900']};
    }
    & + input {
      margin-top: 1rem;
    }
  }

  button {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${(props) => props.theme['purple-500']};
    color: #fff;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;
    :hover {
      background: ${(props) => props.theme['purple-700']};
    }
  }
`
