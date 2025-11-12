import {
  Image as BannerImage,
  Description,
  HeaderContainer,
  NavLink
} from './styles'
import banner from '../../assets/images/banner.jpg'
import Logo from '@components/Logo'

export type Props = {
  size: 'big' | 'small'
}

const Header = ({ size }: Props) => (
  <HeaderContainer size={size}>
    <BannerImage style={{ backgroundImage: `url(${banner})` }}>
      <div className="container container-fh">
        {size === 'big' ? (
          <>
            <Logo />
            <Description>
              Viva experiências gastronômicas no conforto da sua casa
            </Description>
          </>
        ) : (
          <>
            <NavLink to="/">Restaurantes</NavLink>
            <Logo />
            <NavLink to="/cartshop">0 - produto(s) no carrinho</NavLink>
          </>
        )}
      </div>
    </BannerImage>
  </HeaderContainer>
)

export default Header
