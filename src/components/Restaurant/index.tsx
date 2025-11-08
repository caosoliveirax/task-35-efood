import Tag from '@components/Tag'
import restaurant from '../../assets/images/restaurant-1.png'
import {
  ButtonLink,
  Description,
  Image,
  Wrapper,
  Title,
  Container
} from './styles'
import Rating from '@components/Rating'

const Restaurant = () => (
  <Container>
    <Image src={restaurant} alt="" />
    <Tag />
    <Wrapper>
      <Title>Hioki Sushi</Title>
      <Rating />
      <Description>
        Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis
        frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega
        rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão
        sem sair do lar com nosso delivery!
      </Description>
      <ButtonLink>Saiba mais</ButtonLink>
    </Wrapper>
  </Container>
)

export default Restaurant
