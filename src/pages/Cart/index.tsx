import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "@phosphor-icons/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { Radio } from "../../components/Form/Radio"
import { TextInput } from "../../components/Form/TextInput"
import { AddressContainer, AddressForm, CartContainer, ConfirmOrderBtn, ContainerHeading, OrderDetails, OrderItem, OrderItemInfos, OrderItems, OrderItemsContainer, PaymentContainer, PaymentOptions, RemoveItemButton, Title, TotalCartInfo } from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { Warning } from "../../components/Warning"
import { QuantityInput } from "../../components/Form/QuantityInput"
import { Coffee } from "../../interfaces/Coffee"
import { moneyFormatter } from "../../utils/formatters"


const shippingPrice = 3.5

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

export type OrderInfo = z.infer<typeof newOrderSchema>

export const Cart = () => {

    const { cartItems, incrementItemQty, decrementItemQty, totalCartValue } = useContext(CartContext)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<OrderInfo>({
        resolver: zodResolver(newOrderSchema),
    })

    const selectedPaymentMethod = watch('paymentMethod')

    const handleOrderCheckout: SubmitHandler<OrderInfo> = () => {
        if (cartItems.length === 0) {
            return alert('Seu carrinho está vazio')
        }
    }

    function handleItemIncrement(itemId: Coffee['id']) {
        incrementItemQty(itemId)
    }

    function handleItemDecrement(itemId: Coffee['id']) {
        decrementItemQty(itemId)
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
                                <OrderItemInfos>
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-price">{moneyFormatter(item.price)}</span>
                                </OrderItemInfos>
                                <div className="order-item__actions">
                                    <QuantityInput
                                        handleIncrease={() => handleItemIncrement(item.id)}
                                        handleDecrease={() => handleItemDecrement(item.id)}
                                        quantity={item.quantity}
                                    />
                                    <RemoveItemButton onClick={() => { }}>
                                        <Trash size={16} weight="regular" />
                                        Remover
                                    </RemoveItemButton>
                                </div>
                            </div>
                        </OrderItem>
                    ))}
                    
                    <TotalCartInfo>
                        <div>
                            <span>Total de Items</span>
                            <span>{moneyFormatter(totalCartValue)}</span>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <span>{moneyFormatter(shippingPrice)}</span>
                        </div>
                        <div>
                            <span>Total</span>
                            <span>{moneyFormatter(totalCartValue + shippingPrice)}</span>
                        </div>
                        <ConfirmOrderBtn type="submit" form="order">
                            Confirmar Pedido
                        </ConfirmOrderBtn>
                    </TotalCartInfo>

                </OrderItemsContainer>
            </OrderItems>
        </CartContainer>
    )
}