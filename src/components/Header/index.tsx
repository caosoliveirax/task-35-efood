import { Image as BannerImage, Description, HeaderContainer } from './styles'
import banner from '../../assets/images/banner.jpg'
import Logo from '@components/Logo'

const Header = () => (
  <HeaderContainer>
    <BannerImage style={{ backgroundImage: `url(${banner})` }}>
      <div className="container-fh">
        <Logo />
        <Description>
          Viva experiências gastronômicas no conforto da sua casa
        </Description>
      </div>
    </BannerImage>
  </HeaderContainer>
)

export default Header
