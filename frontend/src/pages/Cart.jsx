// Cart.js
import React from 'react';
import { HiOutlineX } from "react-icons/hi";

function Cart({ isOpen, onClose }) { 

    return (
        <div className={ `
        fixed top-0 right-0 h-full w-80 bg-[#1a1a1a] shadow-lg z-50
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
    `}>
            <div className="flex justify-end p-4">
                <button onClick={onClose} className="text-white">
                    <HiOutlineX className="text-2xl" />
                </button>
            </div>
            <div className="p-4">
                
            </div>
        </div>
    );
}

export default Cart;