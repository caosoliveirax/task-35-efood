import { useParams } from 'react-router-dom'

import ProductsList from '@components/ProductsList'
import Header from '@components/Header'

import { useGetRestaurantQuery } from '../../services/api'

const Menu = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id as string)

  if (restaurant) {
    return (
      <>
        <Header size="small" />
        <ProductsList
          banner={restaurant.capa}
          category={restaurant.tipo}
          title={restaurant.titulo}
          menu={restaurant.cardapio}
        />
      </>
    )
  }

  return (
    <>
      <Header size="small" />
      <h3 className="container">Carregando</h3>
    </>
  )
}

export default Menu
