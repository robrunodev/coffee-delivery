import { CurrencyDollar, MapPinLine } from "@phosphor-icons/react"
import { ContainerHeading, CartContainer, AddressContainer, OrderDetails, AddressForm, OrderItems, PaymentContainer, Title } from "./styles"
import { TextInput } from "../../components/TextInput"

export const Cart = () => {
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
                        />

                        <TextInput
                            type="text"
                            placeholder="Rua"
                            containerProps={{ style: { gridArea: 'street' } }}
                        />

                        <TextInput
                            type="text"
                            placeholder="Número"
                            containerProps={{ style: { gridArea: 'number' } }}
                        />

                        <TextInput
                            type="text"
                            placeholder="Complemento"
                            optional={true}
                            containerProps={{ style: { gridArea: 'fullAddress' } }}
                        />

                        <TextInput
                            type="text"
                            placeholder="Bairro"
                            containerProps={{ style: { gridArea: 'neighborhood' } }}
                        />

                        <TextInput
                            type="text"
                            placeholder="Cidade"
                            containerProps={{ style: { gridArea: 'city' } }}
                        />

                        <TextInput
                            type="text"
                            placeholder="UF"
                            containerProps={{ style: { gridArea: 'state' } }}
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
                </PaymentContainer>
            </OrderDetails>
            <OrderItems>
                <Title className="baloo-2--bold">Cafés selecionados</Title>
            </OrderItems>
        </CartContainer>
    )
}