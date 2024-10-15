import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "@phosphor-icons/react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Radio } from "../../components/Form/Radio"
import { TextInput } from "../../components/TextInput"
import { AddressContainer, AddressForm, CartContainer, ContainerHeading, OrderDetails, OrderItems, PaymentContainer, PaymentOptions, Title } from "./styles"
import { zodResolver } from "@hookform/resolvers/zod"



const newOrderSchema = z.object({
    cep: z.number({ required_error: 'Informe o CEP' }),
    street: z.string().min(1, 'Informe a Rua'),
    st_number: z.number({ required_error: 'Informe o Número' }),
    fullAddress: z.string().optional(),
    neighborhood: z.string().min(1, 'Informe o Bairro'),
    city: z.string().min(1, 'Informe a Cidade'),
    state: z.string().min(1, 'Informe o Estado'),
    paymentMethod: z.enum(['credit', 'debit', 'money'], {
        required_error: 'Informe a forma de pagamento'
    })
})

type OrderInfo = z.infer<typeof newOrderSchema>

export const Cart = () => {

    const { register, handleSubmit, watch } = useForm<OrderInfo>({
        resolver: zodResolver(newOrderSchema),
    })

    return (
        <CartContainer>
            <OrderDetails>
                <Title className="baloo-2--bold">Complete seu pedido</Title>
                <AddressContainer>
                    <ContainerHeading iconColor="yellow-dark">
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
                            placeholder="CEP"
                            containerProps={{ style: { gridArea: 'cep' } }}
                            {...register('cep')}
                        />

                        <TextInput
                            type="text"
                            placeholder="Rua"
                            containerProps={{ style: { gridArea: 'street' } }}
                            {...register('street')}
                        />

                        <TextInput
                            type="text"
                            placeholder="Número"
                            containerProps={{ style: { gridArea: 'number' } }}
                            {...register('st_number')}
                        />

                        <TextInput
                            type="text"
                            placeholder="Complemento"
                            optional={true}
                            containerProps={{ style: { gridArea: 'fullAddress' } }}
                            {...register('fullAddress')}
                        />

                        <TextInput
                            type="text"
                            placeholder="Bairro"
                            containerProps={{ style: { gridArea: 'neighborhood' } }}
                            {...register('neighborhood')}
                        />

                        <TextInput
                            type="text"
                            placeholder="Cidade"
                            containerProps={{ style: { gridArea: 'city' } }}
                            {...register('city')}
                        />

                        <TextInput
                            type="text"
                            placeholder="UF"
                            containerProps={{ style: { gridArea: 'state' } }}
                            {...register('state')}
                        />
                    </AddressForm>

                </AddressContainer>
                <PaymentContainer>
                    <ContainerHeading iconColor="purple">
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
                            isSelected={true}
                            value='credit'
                            {...register('paymentMethod')}
                        />
                        <Radio
                            icon={<Bank size={16} />}
                            text="cartão de débito"
                            isSelected={false}
                            value='debit'
                            {...register('paymentMethod')}
                        />
                        <Radio
                            icon={<Money size={16} />}
                            text="Dinheiro"
                            isSelected={false}
                            value='debit'
                            {...register('paymentMethod')}
                        />
                    </PaymentOptions>

                </PaymentContainer>
            </OrderDetails>
            <OrderItems>
                <Title className="baloo-2--bold">Cafés selecionados</Title>
            </OrderItems>
        </CartContainer>
    )
}