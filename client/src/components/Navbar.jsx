import { Badge } from "@mui/material";
import {  ShoppingCartOutlined, Logout } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;


const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)

  const user = useSelector((state) => state.user.currentUser);

   const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };


  return (
    <Container>
      <Wrapper>
          <Link to="/">
            <Logo>ShoeStore.</Logo>
          </Link>
        <Right>
         {
          user ? <div style={{ display: "flex", alignItems: "center" }}>
              <span style={{ marginRight: "10px" }}>{user?.username}</span>
              <span onClick={handleLogout} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
                <Logout/>
              </span>
            </div> : <>
               <Link to="/register">
                  <MenuItem>REGISTER</MenuItem>
                </Link>
                
                <Link to="/login">
                  <MenuItem>SIGN IN</MenuItem>
                </Link>
            </>
         }
          
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
