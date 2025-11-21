import ProductItem from '@components/Product'
import { BannerRestaurant, Category, List, Title } from './styles'
import type { Restaurant } from 'pages/Home'

export type Props = {
  banner: string
  category: string
  title: string
  menu: Restaurant['cardapio']
}

const ProductsList = ({ menu, banner, category, title }: Props) => (
  <>
    <BannerRestaurant style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <Category>{category}</Category>
        <Title>{title}</Title>
      </div>
    </BannerRestaurant>
    <div className="container">
      <List>
        {menu.map((prato) => (
          <li key={prato.id}>
            <ProductItem
              id={prato.id}
              descricao={prato.descricao}
              preco={prato.preco}
              porcao={prato.porcao}
              nome={prato.nome}
              foto={prato.foto}
            />
          </li>
        ))}
      </List>
    </div>
  </>
)

export default ProductsList
