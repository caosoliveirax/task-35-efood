import Tag from '@components/Tag'
import {
  ButtonLink,
  Description,
  Image,
  Wrapper,
  Title,
  Container,
  Infos
} from './styles'
import Rating from '@components/Rating'

type Props = {
  name: string
  rating: string
  description: string
  infos: string[]
  image: string
}

const Restaurant = ({ name, image, description, infos, rating }: Props) => (
  <Container>
    <Image src={image} alt={name} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Wrapper>
      <Title>{name}</Title>
      <Rating>{rating}</Rating>
      <Description>{description}</Description>
      <ButtonLink to="/menu">Saiba mais</ButtonLink>
    </Wrapper>
  </Container>
)

export default Restaurant
