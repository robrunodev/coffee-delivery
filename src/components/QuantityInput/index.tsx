import { Minus, Plus } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";
import { Box, ControlQtyBtn, QtyInput } from "./styles";

interface QuantityInputProps {
    handleDecrease: () => void;
    handleIncrease: () => void;
}

export function QuantityInput({ handleDecrease, handleIncrease }: QuantityInputProps) {

    const { register } = useFormContext()


    return (
        <Box>
            <ControlQtyBtn type="button" onClick={handleDecrease}>
                <Minus size={14} />
            </ControlQtyBtn>

            <QtyInput type="text"
                {...register('quantity', {
                    valueAsNumber: true,
                })}
            />
            
            <ControlQtyBtn type="button" onClick={handleIncrease}>
                <Plus size={14} />
            </ControlQtyBtn>
        </Box>
    )
}