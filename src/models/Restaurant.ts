class Restaurant {
  id: number
  name: string
  rating: string
  description: string
  infos: string[]
  image: string

  constructor(
    id: number,
    name: string,
    rating: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id
    this.name = name
    this.rating = rating
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Restaurant
