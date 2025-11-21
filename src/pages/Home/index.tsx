import { useEffect, useState } from 'react'
import RestaurantsList from '@components/RestaurantsList'

import Header from '@components/Header'

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
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Header size="big" />
      <RestaurantsList restaurants={restaurants} />
    </>
  )
}

export default Home
