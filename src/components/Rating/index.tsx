import { RatingContainer, Score } from './styles'
import star from '../../assets/images/star.png'

type Props = {
  children: string
}

const Rating = ({ children }: Props) => (
  <RatingContainer>
    <Score>{children}</Score>
    <img src={star} alt="Estrela de avaliação" />
  </RatingContainer>
)

export default Rating
