import { FormProvider, useForm } from "react-hook-form";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Badges, Card, CoffeeImg, CardFooter, CardActions, AddToCartBtn, Price } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "@phosphor-icons/react";

export interface CoffeeCategories {
    name: string,
    slug: string
}

export type Coffee = {
    coffee: {
        id: string | number,
        name: string,
        description: string,
        price: number | string,
        image_src: string,
        categories: CoffeeCategories[]
    }
}

interface ProductForm {
    quantity?: number
}

export function ProductCard({ coffee }: Coffee) {

    const handleIncrease = () => {
        console.log("teste")
    }

    const handleDecrease = () => {
        console.log("teste 2")
    }

    const productFormValidationSchema = z.object({
        quantity: z.coerce.number().min(1, 'A quantidade mínima é 1')
    })

    const productForm = useForm<ProductForm>({
        resolver: zodResolver(productFormValidationSchema),
        defaultValues: {
            quantity: 1
        }
    })

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

            <CardFooter className="card-footer">
                <Price>
                    <span>R$</span>
                    <p className="baloo-2--extra-bold">{coffee.price}</p>
                </Price>

                <CardActions>
                    <FormProvider {...productForm}>
                        <QuantityInput
                            handleDecrease={handleDecrease}
                            handleIncrease={handleIncrease}
                        />
                        <AddToCartBtn type="button">
                            <ShoppingCart size={17} weight="fill" />
                        </AddToCartBtn>
                    </FormProvider>
                </CardActions>

            </CardFooter>
        </Card >
    )
}