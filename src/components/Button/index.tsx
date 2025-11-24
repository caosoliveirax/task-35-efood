import type { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  children: ReactNode
  to?: string
  onClick?: () => void
}

const Button = ({ type, children, to, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }

  return <ButtonLink to={to as string}>{children}</ButtonLink>
}

export default Button
