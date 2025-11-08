import { colors } from '../../global'
import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  margin: 80px 0;
`

export const ListItem = styled.li`
  border: 1px solid ${colors.primary};
`
