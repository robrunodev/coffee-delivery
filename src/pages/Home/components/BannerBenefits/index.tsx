import { ReactNode } from "react";
import { BenefitItemContainer, IconWrapper } from "./style";
import { defaultTheme } from '../../../../styles/themes/default';

export interface BenefitItemProps {
    id: any
    text: string
    icon: ReactNode
    iconColor: keyof typeof defaultTheme
}

export function BenefitItem({ text, icon, iconColor }: Omit<BenefitItemProps, 'id'>) {
    return (
        <BenefitItemContainer>
            <IconWrapper color={iconColor}>
                {icon}
            </IconWrapper>
            <p>{text}</p>
        </BenefitItemContainer>
    )
}