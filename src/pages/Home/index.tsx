import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import bannerImage from "../../assets/img/banner_coffee.png";
import coffees from '../../assets/products.json';
import { BenefitItem } from "./components/BannerBenefits";
import { ProductCard } from "./components/ProductCard";
import {
    BannerBenefits,
    BannerContainer,
    IntroImg,
    Intro,
    Container,
    HomeContainer,
    Products
} from "./styles";

export function Home() {
    return (
        <HomeContainer>
            <BannerContainer>
                <Intro>
                    <p className="baloo-2--extra-bold">
                        Encontre o café perfeito para qualquer hora do dia
                    </p>
                    <span>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </span>
                    <BannerBenefits>
                        <BenefitItem
                            key={Math.random()}
                            text="Compra simples e segura"
                            icon={<ShoppingCart weight="fill" size={16} />}
                            iconColor="yellow-dark"
                        />
                        <BenefitItem
                            key={Math.random()}
                            text="Entrega rápida e rastreada"
                            icon={<Timer weight="fill" size={16} />}
                            iconColor="yellow"
                        />
                        <BenefitItem
                            key={Math.random()}
                            text="Embalagem mantém o café intacto"
                            icon={<Package weight="fill" size={16} />}
                            iconColor="base-text"
                        />
                        <BenefitItem
                            key={Math.random()}
                            text="O café chega fresquinho até você"
                            icon={<Coffee weight="fill" size={16} />}
                            iconColor="purple"
                        />
                    </BannerBenefits>
                </Intro>
                <IntroImg src={bannerImage} alt="Coffee delivery cup" />
            </BannerContainer>
            <Container>
                <h2 className="list-title baloo-2--extra-bold">Nossos cafés</h2>
                <Products>
                    {coffees.length > 0 && coffees.map((coffee) => (
                        <ProductCard key={coffee.id} product={coffee} />
                    ))}
                </Products>
            </Container>
        </HomeContainer>
    )
}