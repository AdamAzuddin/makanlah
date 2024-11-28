// app/context/order.tsx

"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Define the structure of an order item
interface OrderItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface OrderContextType {
    order: OrderItem[];
    setOrder: React.Dispatch<React.SetStateAction<OrderItem[]>>;
}

const OrderContext = createContext<OrderContextType | undefined>(undefined);

// OrderProvider component to wrap the entire app
export const OrderProvider = ({ children }: { children: ReactNode }) => {
    const [order, setOrder] = useState<OrderItem[]>(() => {
        // Retrieve stored order from localStorage (if any)
        if (typeof window !== 'undefined') {
            const storedOrder = localStorage.getItem('order');
            return storedOrder ? JSON.parse(storedOrder) : [];
        }
        return [];
    });

    useEffect(() => {
        // Persist the order in localStorage whenever it changes
        if (typeof window !== 'undefined') {
            localStorage.setItem('order', JSON.stringify(order));
        }
    }, [order]);

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

// Hook to use the order context
export const useOrder = () => {
    const context = useContext(OrderContext);
    if (!context) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
};
