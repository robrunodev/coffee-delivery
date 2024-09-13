import { Badges, Card, CoffeeImg } from "./styles";

export interface CoffeeCategories {
    // name: "Tradicional" | 'Com Leite' | 'Gelado' | 'Especial' | 'Alcoólico',
    // slug: "traditional" | 'with-milk' | 'iced' | 'special' | 'alcoholic'
    name: string,
    slug: string
}

export type Coffee = {
    coffee: {
        id: string | number,
        name: string,
        description: string,
        price: number,
        image_src: string,
        categories: CoffeeCategories[]
    }
}

export function ProductCard({ coffee }: Coffee) {
    return (
        <Card>
            <CoffeeImg src={coffee.image_src} alt={coffee.name} />
            <Badges>
                {coffee.categories.length > 0 && coffee.categories.map((category, idx) => (
                    <span key={`${idx}_${category.slug}`}>
                        {category.name}
                    </span>)
                )}
            </Badges>
            <p className="baloo-2--extra-bold">{coffee.name}</p>
            <span>{coffee.description}</span>
            <div className="price-actions">
                <p className="price">{coffee.price}</p>
                <input type="number" />
                <button>Comprar</button>
            </div>
        </Card>
    )
}