"use client"

import { useState } from "react";

export function Tool({
    title = "Title of the tool",
    description = "Short description of the tool",
    link = "#",
    category = "tools",
    isLink = true,
    snippet = "code here"
}) {
    const [isCopied, setIsCopied] = useState(false);
    const handleSnippetClick = () => {
        navigator.clipboard.writeText(snippet)
            .then(() => setIsCopied(true))
            .then(() => setTimeout(() => {
                setIsCopied(false);
            }, 3000))
            .catch(err => console.error("Failed to copy:", err));
    };
    return (
        <>
            <div className="shadow-md rounded-lg w-72 py-8 px-4 border-2 place-self-center">
                <h5 className="font-semibold text-3xl mb-3">{title}</h5>
                <span className="text-white bg-[#0d3b66] text-sm px-3 py-1 rounded-3xl">{category}</span>
                <p className={`mt-5 ${!isCopied && "mb-6"}`}>{description}</p>
                {isCopied && <p className="text-sm text-green-600 italic mb-1">Code copied to clipboard!</p>}
                {isLink ?
                    <a href={link} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-3 text-center hover:cursor-pointer">Click here</a>
                    :
                    <button onClick={handleSnippetClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center hover:cursor-pointer">Copy Code</button>
                }
            </div>
        </>
    );
};