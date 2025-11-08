import { RatingContainer, Score } from './styles'

import star from '../../assets/images/star.png'

const Rating = () => (
  <RatingContainer>
    <Score>4.6</Score>
    <img src={star} alt="Estrela de avaliação" />
  </RatingContainer>
)

export default Rating
