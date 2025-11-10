import { Link } from 'react-router-dom'
import { colors } from '../../global'
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  display: block;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const Wrapper = styled.div`
  position: relative;
  background-color: ${colors.white};
  border: 1px solid ${colors.primary};
  border-top: none;
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

export const ButtonLink = styled(Link)`
  display: inline-block;
  color: ${colors.beige};
  background-color: ${colors.primary};
  border: none;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  padding: 4px 6px;
  cursor: pointer;
  text-decoration: none;
`
