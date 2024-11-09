import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/img/logo.svg';
import { HeaderContainer, HeaderNav, QuantityBadge } from "./styles";
import { memo, useContext } from "react";
import { CartContext } from "../../contexts/CartContext";


export const Header = memo(function Header() {

    const { totalCartQty } = useContext(CartContext)

    return (
        <HeaderContainer>
            <NavLink to="/">
                <img src={logo} alt="Logo" />
            </NavLink>
            <HeaderNav>
                <NavLink to="/">
                    <MapPin weight="fill" size={22} />
                    <span>São Paulo, SP</span>
                </NavLink>
                <NavLink to="/cart">
                    <QuantityBadge>
                        {totalCartQty}
                    </QuantityBadge>
                    <ShoppingCart weight="fill" size={22} />
                </NavLink>
            </HeaderNav>
        </HeaderContainer>
    )
})