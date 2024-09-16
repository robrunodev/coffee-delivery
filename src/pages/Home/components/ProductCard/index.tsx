import { FormProvider, useForm } from "react-hook-form";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Badges, Card, CoffeeImg } from "./styles";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export interface CoffeeCategories {
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

    const { formState } = productForm

    console.error({ error: formState.errors })

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
                <FormProvider {...productForm} >
                    <QuantityInput
                        handleDecrease={handleDecrease}
                        handleIncrease={handleIncrease}
                    />
                </FormProvider>
                <button type="button">Comprar</button>
            </div>
        </Card >
    )
}