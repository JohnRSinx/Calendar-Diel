import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:focus {
  box-shadow: 0  0 0 2px ${(props) => props.theme['blue-800']};
}
body {
  background: ${(props) => props.theme['gray-800']};
  color: ${(props) => props.theme['gray-300']};
}
body , input , textarea, button {
  font-family: 'Roboto',  sans-serif;
  font-weight: 400;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
}

.react-modal-overlay{
  background: rgba(0,0,0,0.5);
  position: fixed;
  top:  0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content{
  width: 100%;
  max-width: 576px;
  background: ${(props) => props.theme['gray-900']};
  padding: 3rem;
  border-radius: 8px;
}
`
