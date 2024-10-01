import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react"
import { ContainerHeader, CartContainer, FormContainer, OptionalField, OrderDetails, OrderForm, OrderFormRow, OrderItems, PaymentContainer, TextInput, Title } from "./styles"

export const Cart = () => {
    return (
        <CartContainer>
            <OrderDetails>
                <Title className="baloo-2--bold">Complete seu pedido</Title>
                <FormContainer>
                    <ContainerHeader>
                        <MapPinLine size={22} weight="regular" />
                        <div>
                            <p>Endereço de Entrega</p>
                            <span>
                                Informe o endereço onde deseja receber seu pedido
                            </span>
                        </div>
                    </ContainerHeader>
                    <OrderForm>
                        <OrderFormRow>
                            <TextInput type="text" size={200} placeholder="CEP" />
                        </OrderFormRow>

                        <OrderFormRow>
                            <TextInput type="text" size={"full"} placeholder="Rua" />
                        </OrderFormRow>

                        <OrderFormRow>
                            <TextInput type="text" size={200} placeholder="Número" />
                            <OptionalField size={'full'} flexSize={1}>
                                <TextInput
                                    type="text"
                                    size={'full'}
                                    placeholder="Complemento"
                                />
                                <span>opcional</span>
                            </OptionalField>
                        </OrderFormRow>

                        <OrderFormRow>
                            <TextInput type="text" size={'full'} flexSize={1} placeholder="Bairro" />
                            <TextInput type="text" size={300} flexSize={1} placeholder="Cidade" />
                            <TextInput type="text" size={60} flexSize={1} placeholder="UF" />
                        </OrderFormRow>

                    </OrderForm>
                </FormContainer>
                <PaymentContainer>
                    <ContainerHeader>
                        <CurrencyDollar size={22} weight="regular" />
                        <div>
                            <p>Pagamento</p>
                            <span>
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar
                            </span>
                        </div>
                    </ContainerHeader>
                </PaymentContainer>
            </OrderDetails>
            <OrderItems>
                <Title className="baloo-2--bold">Cafés selecionados</Title>
            </OrderItems>
        </CartContainer>
    )
}