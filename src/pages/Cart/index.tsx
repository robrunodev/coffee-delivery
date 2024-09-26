import { MapPinLine } from "@phosphor-icons/react"
import { AddressHeader, CartContainer, FormContainer, OrderDetails, OrderItems, PaymentContainer, TextInput, Title } from "./styles"

export const Cart = () => {
    return (
        <CartContainer>
            <OrderDetails>
                <Title className="baloo-2--bold">Complete seu pedido</Title>
                <FormContainer>
                    <AddressHeader>
                        <MapPinLine size={22} weight="regular" />
                        <div>
                            <p>Endereço de Entrega</p>
                            <span>
                                Informe o endereço onde deseja receber seu pedido
                            </span>
                        </div>
                    </AddressHeader>
                    <form>
                        <TextInput type="text" size={200} placeholder="CEP"/>
                    </form>
                </FormContainer>
                <PaymentContainer>

                </PaymentContainer>
            </OrderDetails>
            <OrderItems>
                <Title className="baloo-2--bold">Cafés selecionados</Title>

            </OrderItems>
        </CartContainer>
    )
}