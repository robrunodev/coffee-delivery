export interface CoffeeCategories {
    name: string,
    slug: string
}

export type Coffee = {
    id: string | number,
    name: string,
    description: string,
    price: number,
    image_src: string,
    categories: CoffeeCategories[]
    stock: number
    quantity?: 0 | number
}