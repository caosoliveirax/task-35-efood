import Tag from '@components/Tag'
import { Description, Image, Wrapper, Title, Infos } from './styles'
import Rating from '@components/Rating'
import { CardContainer } from '../../global'
import Button from '@components/Button'

type Props = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
}

const Restaurant = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => (
  <CardContainer>
    <Image src={capa} alt={titulo} />
    <Infos>
      {destacado === true && <Tag>Destaque da semana</Tag>}
      <Tag>{tipo}</Tag>
    </Infos>
    <Wrapper>
      <Title>{titulo}</Title>
      <Rating>{avaliacao}</Rating>
      <Description>{descricao}</Description>
      <Button type="link" to={`/menu/${id}`}>
        Saiba mais
      </Button>
    </Wrapper>
  </CardContainer>
)

export default Restaurant
