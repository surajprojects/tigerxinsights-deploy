"use client"

import { useState } from "react";
import { BurgerIcon } from "../icons";

export function MobileHeader() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <button onClick={toggleMenu}>
                <BurgerIcon />
            </button>
            {isOpen && (
                <ul className="absolute right-0 bg-white shadow-md p-5 w-32 z-50 rounded-md">
                    <li>
                        <a href="/work" onClick={toggleMenu}>Works</a>
                    </li>
                    <li>
                        <a href="/blog" onClick={toggleMenu}>Blog</a>
                    </li>
                    <li>
                        <a href="/toolkit" onClick={toggleMenu}>Toolkit</a>
                    </li>
                    <li>
                        <a href="/contact" onClick={toggleMenu}>Contact</a>
                    </li>
                </ul>
            )}
        </>
    );
};