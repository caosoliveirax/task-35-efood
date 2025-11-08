import Restaurant from '@components/Restaurant'
import { List, ListItem } from './styles'

const RestaurantsList = () => (
  <div className="container">
    <List>
      <ListItem>
        <Restaurant />
      </ListItem>
      <ListItem>
        <Restaurant />
      </ListItem>
      <ListItem>
        <Restaurant />
      </ListItem>
      <ListItem>
        <Restaurant />
      </ListItem>
      <ListItem>
        <Restaurant />
      </ListItem>
      <ListItem>
        <Restaurant />
      </ListItem>
    </List>
  </div>
)

export default RestaurantsList
