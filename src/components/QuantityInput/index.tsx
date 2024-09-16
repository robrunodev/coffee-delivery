import { Minus, Plus } from "@phosphor-icons/react";
import { useFormContext } from "react-hook-form";

interface QuantityInputProps {
    handleDecrease: () => void;
    handleIncrease: () => void;
}

export function QuantityInput({ handleDecrease, handleIncrease }: QuantityInputProps) {

    const { register } = useFormContext()


    return (
        <div>
            <button type="button" onClick={handleDecrease}>
                <Minus size={14} />
            </button>
            <input type="number"
                {...register('quantity', {
                    valueAsNumber: true,
                })}
            />
            <button type="button" onClick={handleIncrease}>
                <Plus size={14} />
            </button>
        </div>
    )
}