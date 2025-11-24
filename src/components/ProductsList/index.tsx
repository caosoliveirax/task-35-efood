import ProductItem from '@components/Product'
import {
  BannerRestaurant,
  Category,
  List,
  Modal,
  ModalContent,
  Title
} from './styles'

import close from '../../assets/images/close.png'
import type { Restaurant } from 'pages/Home'
import Button from '@components/Button'
import { useState } from 'react'

export type Props = {
  banner: string
  category: string
  title: string
  menu: Restaurant['cardapio']
}

export type ModalState = {
  isVisible: boolean
  menu: Restaurant['cardapio'][number] | null
}

const ProductsList = ({ menu, banner, category, title }: Props) => {
  const priceFormatter = (price = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    menu: null
  })

  const closeModal = () => {
    setModal({ isVisible: false, menu: null })
  }

  return (
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
                aoClicar={() => setModal({ isVisible: true, menu: prato })}
              />
            </li>
          ))}
        </List>
      </div>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <img
            src={modal.menu?.foto}
            alt={`Foto do prato ${modal.menu?.nome}`}
          />
          <img
            onClick={() => {
              closeModal()
            }}
            className="close"
            src={close}
            alt="Icone de fechar"
          />
          <div className="wrapper">
            <h4>{modal.menu?.nome}</h4>
            <p>{modal.menu?.descricao}</p>
            <p>Serve: de {modal.menu?.porcao}</p>
            <Button type="button">
              Adicionar ao carrinho - {priceFormatter(modal.menu?.preco)}
            </Button>
          </div>
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default ProductsList
