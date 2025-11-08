import { colors } from '../../global'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  display: block;
`

export const Wrapper = styled.div`
  position: relative;
  background-color: ${colors.white};
  padding: 8px;
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  padding: 16px 0;
  line-height: 22px;
`

export const ButtonLink = styled.button`
  color: ${colors.beige};
  background-color: ${colors.primary};
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  padding: 4px 6px;
  cursor: pointer;
`
