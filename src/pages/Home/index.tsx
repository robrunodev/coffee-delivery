import { BannerBenefits, BannerContainer, BannerIntro, HomeContainer } from "./styles";
import bannerImage from "../../assets/img/banner_coffee.png"
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { BenefitItem, BenefitItemProps } from "./components/BannerBenefits";

const benefits: BenefitItemProps[] = [
    {
        id: Math.random(),
        text: "Compra simples e segura",
        icon: <ShoppingCart weight="fill" size={16} />,
        iconColor: "yellow-dark"
    },
    {
        id: Math.random(),
        text: "Entrega rápida e rastreada",
        icon: <Timer weight="fill" size={16} />,
        iconColor: "yellow"
    },
    {
        id: Math.random(),
        text: "Embalagem mantém o café intacto",
        icon: <Package weight="fill" size={16} />,
        iconColor: "base-text"
    },
    {
        id: Math.random(),
        text: "O café chega fresquinho até você",
        icon: <Coffee weight="fill" size={16} />,
        iconColor: "purple"
    },
]

export function Home() {
    return (
        <>
            <HomeContainer>
                <BannerContainer>
                    <BannerIntro>
                        <p className="baloo-2--extra-bold">Encontre o café perfeito para qualquer hora do dia</p>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                        <BannerBenefits>
                            {
                                benefits.map((item) => {
                                    return (
                                        <BenefitItem
                                            key={item.id}
                                            text={item.text}
                                            icon={item.icon}
                                            iconColor={item.iconColor}
                                        />
                                    )
                                })
                            }
                        </BannerBenefits>
                    </BannerIntro>
                    <div className="banner-image">
                        <img
                            src={bannerImage}
                            alt="Coffee delivery cup"
                        />
                    </div>
                </BannerContainer>
            </HomeContainer>
        </>
    )
}