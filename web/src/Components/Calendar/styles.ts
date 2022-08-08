import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['gray-900']};
  border-radius: 8px;
  padding: 1rem;
  flex: 1;
  height: 100%;

  h1 {
    border-radius: 8px;
    padding: 1rem;
    :hover {
      background: ${(props) => props.theme['blue-800']};
    }
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    margin: 1rem 0rem;
  }
  li {
    width: 100%;
    padding: 1rem;
    border-radius: 8px;
    :hover {
      background: ${(props) => props.theme['blue-800']};
    }
  }
  li.today {
    background: ${(props) => props.theme['purple-500']};
    :hover {
      background: ${(props) => props.theme['purple-700']};
    }
  }
  span {
    display: flex;
    justify-content: center;
  }
`
export const MonthAndYear = styled.div`
  display: flex;
  justify-content: space-between;
`
