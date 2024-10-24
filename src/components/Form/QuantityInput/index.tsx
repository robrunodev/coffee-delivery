import { Minus, Plus } from "@phosphor-icons/react";
import { Box, ControlQtyBtn } from "./styles";

interface QuantityInputProps {
    handleDecrease: () => void;
    handleIncrease: () => void;
    quantity?: number;
}

export function QuantityInput({ handleDecrease, handleIncrease, quantity }: QuantityInputProps) {

    return (
        <Box>
            <ControlQtyBtn type="button" onClick={handleDecrease}>
                <Minus size={14} />
            </ControlQtyBtn>
            {quantity}
            <ControlQtyBtn type="button" onClick={handleIncrease}>
                <Plus size={14} />
            </ControlQtyBtn>
        </Box>
    )
}