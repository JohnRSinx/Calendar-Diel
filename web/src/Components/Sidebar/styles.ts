import styled from 'styled-components'

export const Container = styled.aside`
  background: ${(props) => props.theme['gray-900']};
  border-radius: 8px;
  padding: 1rem 0rem;
  flex: 1;
  height: 100%;

  h2 {
    text-align: center;
  }
`
export const FormSidebar = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const BaseInput = styled.input`
  background: ${(props) => props.theme['gray-900']};
  height: 2.5rem;

  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['purple-500']};
  border-radius: 2px;

  font-size: 1.125rem;
  padding: 0 0.05rem;
  margin: 0.5rem 0rem;
  color: ${(props) => props.theme['gray-100']};
  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['purple-500']};
  }
  &::placeholder {
    color: ${(props) => props.theme['gray-100']};
  }
`
export const InputSidebar = styled(BaseInput)`
  width: 80%;
`
export const InputNumber = styled(BaseInput)`
  width: 4rem;
`

export const ButtonSidebar = styled.button`
  width: 80%;
  border: 0;
  padding: 1rem 0rem;
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
`
