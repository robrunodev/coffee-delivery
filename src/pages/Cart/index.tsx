import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { Radio } from "../../components/Form/Radio"
import { TextInput } from "../../components/Form/TextInput"
import { AddressContainer, AddressForm, CartContainer, ContainerHeading, OrderDetails, OrderItem, OrderItems, OrderItemsContainer, PaymentContainer, PaymentOptions, Title } from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Warning } from "../../components/Warning"
import { QuantityInput } from "../../components/Form/QuantityInput"

const newOrderSchema = z.object({
    cep: z.string().min(1, 'Informe o CEP').max(9, 'CEP inválido'),
    street: z.string().min(1, 'Informe a Rua'),
    st_number: z.number({ message: 'Informe o Número' }),
    fullAddress: z.string().optional(),
    neighborhood: z.string().min(1, 'Informe o Bairro'),
    city: z.string().min(1, 'Informe a Cidade'),
    state: z.string().min(1, 'Informe o Estado'),
    paymentMethod: z.enum(['credit', 'debit', 'money'], {
        message: 'Informe a forma de pagamento'
    })
})

type OrderInfo = z.infer<typeof newOrderSchema>

export const Cart = () => {

    const { cartItems } = useContext(CartContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<OrderInfo>({
        resolver: zodResolver(newOrderSchema),
    })

    const selectedPaymentMethod = watch('paymentMethod')

    console.log({ selectedPaymentMethod, errors })

    const handleOrderCheckout: SubmitHandler<OrderInfo> = (data) => {
        console.log(JSON.stringify(data))
        if (cartItems.length === 0) {
            return alert('Seu carrinho está vazio')
        }
    }

    return (
        <CartContainer>
            <OrderDetails>
                <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
                    <Title className="baloo-2--bold">Complete seu pedido</Title>
                    <AddressContainer>
                        <ContainerHeading color="yellow-dark">
                            <MapPinLine size={22} weight="regular" />
                            <div>
                                <p>Endereço de Entrega</p>
                                <span>
                                    Informe o endereço onde deseja receber seu pedido
                                </span>
                            </div>
                        </ContainerHeading>

                        <AddressForm>
                            <TextInput
                                type="text"
                                error={errors.cep}
                                placeholder="CEP"
                                containerProps={{ style: { gridArea: 'cep' } }}
                                {...register('cep', {
                                    valueAsNumber: true
                                })}
                            />

                            <TextInput
                                type="text"
                                error={errors.street}
                                placeholder="Rua"
                                containerProps={{ style: { gridArea: 'street' } }}
                                {...register('street')}
                            />

                            <TextInput
                                type="text"
                                error={errors.st_number}
                                placeholder="Número"
                                containerProps={{ style: { gridArea: 'number' } }}
                                {...register('st_number', {
                                    valueAsNumber: true
                                })}
                            />

                            <TextInput
                                type="text"
                                error={errors.fullAddress}
                                placeholder="Complemento"
                                optional={true}
                                containerProps={{ style: { gridArea: 'fullAddress' } }}
                                {...register('fullAddress')}
                            />

                            <TextInput
                                type="text"
                                error={errors.neighborhood}
                                placeholder="Bairro"
                                containerProps={{ style: { gridArea: 'neighborhood' } }}
                                {...register('neighborhood')}
                            />

                            <TextInput
                                type="text"
                                error={errors.city}
                                placeholder="Cidade"
                                containerProps={{ style: { gridArea: 'city' } }}
                                {...register('city')}
                            />

                            <TextInput
                                type="text"
                                error={errors.state}
                                placeholder="UF"
                                containerProps={{ style: { gridArea: 'state' } }}
                                {...register('state')}
                            />
                        </AddressForm>

                    </AddressContainer>
                    <PaymentContainer>
                        <ContainerHeading color="purple">
                            <CurrencyDollar size={22} weight="regular" />
                            <div>
                                <p>Pagamento</p>
                                <span>
                                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                                </span>
                            </div>
                        </ContainerHeading>

                        <PaymentOptions>
                            <Radio
                                icon={<CreditCard size={16} />}
                                text="Cartão de crédito"
                                isSelected={selectedPaymentMethod === 'credit'}
                                value='credit'
                                {...register('paymentMethod')}
                            />
                            <Radio
                                icon={<Bank size={16} />}
                                text="cartão de débito"
                                isSelected={selectedPaymentMethod === 'debit'}
                                value='debit'
                                {...register('paymentMethod')}
                            />
                            <Radio
                                icon={<Money size={16} />}
                                text="Dinheiro"
                                isSelected={selectedPaymentMethod === 'money'}
                                value='money'
                                {...register('paymentMethod')}
                            />

                            {errors.paymentMethod ? (
                                <Warning text={errors.paymentMethod.message} type="error" />
                            ) : null}

                        </PaymentOptions>

                    </PaymentContainer>
                </form>
            </OrderDetails>

            <OrderItems>
                <Title className="baloo-2--bold">Cafés selecionados</Title>

                <OrderItemsContainer>
                    {cartItems.length > 0 && cartItems.map((item) => (
                        <OrderItem key={item.id}>
                            <img src={item.image_src} alt={item.name} />
                            <div className="order-item__infos">
                                <span>{item.name}</span>
                                <QuantityInput
                                    handleDecrease={() => { }}
                                    handleIncrease={() => { }}
                                    quantity={item.quantity}
                                />
                            </div>
                        </OrderItem>
                    ))}
                </OrderItemsContainer>

                <button type="submit" form="order">Finalizar Pedido</button>
            </OrderItems>
        </CartContainer>
    )
}