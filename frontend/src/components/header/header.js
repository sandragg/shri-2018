import React from "react";
import {HeaderWrapper, HeaderItemsWrapper} from "./header-styled";
import logo from "../../assets/images/logo.svg";

export const Header = ({children}) => (
    <HeaderWrapper logoUrl={logo}>
        {children &&
        <HeaderItemsWrapper>
            {children}
        </HeaderItemsWrapper>}
    </HeaderWrapper>
);
