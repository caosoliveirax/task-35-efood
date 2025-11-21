import Button from '@components/Button'
import { CardContainer } from '../../global'
import { Wrapper, Image, Title, Description } from './styles'

type Props = {
  id: number
  nome: string
  preco: number
  foto: string
  descricao: string
  porcao: string
}

const Products = ({ nome, foto, descricao }: Props) => (
  <CardContainer>
    <Image src={foto} alt={nome} />
    <Wrapper>
      <Title>{nome}</Title>
      <Description>{descricao}</Description>
      <Button type="button">Adicionar ao carrinho</Button>
    </Wrapper>
  </CardContainer>
)

export default Products
