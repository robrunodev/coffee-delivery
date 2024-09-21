import { ShoppingCart } from "@phosphor-icons/react";
import { useContext, useState } from "react";
import { QuantityInput } from "../../../../components/QuantityInput";
import { CartContext } from "../../../../contexts/CartContext";
import { AddToCartBtn, Badges, Card, CardActions, CardFooter, CoffeeImg, Price } from "./styles";
import { Coffee } from "../../../../interfaces/Coffee";

interface ProductCardProps {
    product: Coffee
}

export function ProductCard({ product }: ProductCardProps) {

    const [quantity, setQuantity] = useState(1)

    const { addToCart } = useContext(CartContext)

    const handleIncrease = () => {
        setQuantity(state => state + 1)
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(state => state - 1)
        }
    }

    const handleAddToCart = () => {
        addToCart(product, quantity)
        setQuantity(1)
    }


    return (
        <Card>
            <CoffeeImg src={product.image_src} alt={product.name} />

            <Badges>
                {product.categories.length > 0 && product.categories.map((category, idx) => (
                    <span key={`${idx}_${category.slug}`}>
                        {category.name}
                    </span>)
                )}
            </Badges>

            <p className="baloo-2--extra-bold">{product.name}</p>

            <span>{product.description}</span>

            <CardFooter className="card-footer">
                <Price>
                    <span>R$</span>
                    <p className="baloo-2--extra-bold">{product.price}</p>
                </Price>

                <CardActions>
                    <QuantityInput
                        handleDecrease={handleDecrease}
                        handleIncrease={handleIncrease}
                        quantity={quantity}
                    />
                    <AddToCartBtn type="button" onClick={handleAddToCart}>
                        <ShoppingCart size={17} weight="fill" />
                    </AddToCartBtn>
                </CardActions>

            </CardFooter>
        </Card >
    )
}