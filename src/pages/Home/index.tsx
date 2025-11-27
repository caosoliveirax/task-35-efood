import RestaurantsList from '@components/RestaurantsList'

import Header from '@components/Header'
import { useGetRestaurantsQuery } from '../../services/api'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: string
  descricao: string
  capa: string
  cardapio: {
    id: number
    nome: string
    descricao: string
    preco: number
    porcao: string
    foto: string
  }[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Header size="big" />
        <RestaurantsList restaurants={restaurants} />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
