import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import logo from '../../assets/img/logo.svg';
import { HeaderContainer, HeaderNav } from "./styles";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logo} alt="Logo" />
            <HeaderNav>
                <NavLink to="/">
                    <MapPin weight="fill" size={22} />
                    <span>Porto Alegre, RS</span>
                </NavLink>
                <NavLink to="/">
                    <ShoppingCart weight="fill" size={22} />
                </NavLink>
            </HeaderNav>
        </HeaderContainer>
    )
}