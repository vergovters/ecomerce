import React from 'react';
import { useState, useEffect } from "react";
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";
import styled from "styled-components";


const OrdersContainer = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
`;

const OrderCard = styled.div`
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    margin-bottom: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const OrderHeading = styled.h1`
    font-size: 1.5em;
    color: #333;
`;

const OrderDetail = styled.p`
    font-size: 1em;
    color: #666;
    margin: 5px 0;
`;

const ProductContainer = styled.div`
    margin-top: 10px;
    padding-left: 20px;
`;

const ProductDetail = styled.p`
    font-size: 0.9em;
    color: #555;
    margin: 3px 0;
`;
const OrdersList = () => {
    const [orders, setOrders] = useState([]);
    const user = useSelector((state) => state.user.currentUser);

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("/orders/find/" + user._id);
                setOrders(res.data);
            } catch {}
        };
        getOrders();
    }, []);

    console.log(orders);

    return (
       <OrdersContainer>
        {orders.map((order) => (
            <OrderCard key={order._id}>
                <OrderHeading>Order ID: {order._id}</OrderHeading>
                <OrderDetail>Status: {order.status}</OrderDetail>
                <OrderDetail>Total: {order.amount}</OrderDetail>
                <OrderDetail>Products:</OrderDetail>
                <ProductContainer>
                    {order.products.map((product) => (
                        <div key={product._id}>
                            <ProductDetail>Product ID: {product._id}</ProductDetail>
                            <ProductDetail>Quantity: {product.quantity}</ProductDetail>
                        </div>
                    ))}
                </ProductContainer>
            </OrderCard>
        ))}
    </OrdersContainer>
    );
}

export default OrdersList;
