"use client"

import { useState, useEffect } from "react"

const Overlay = () => {
    const [coordinates, setCoordinates] = useState({ left: 0, top: 0 });
    
    useEffect(() => {
        const handleMouseMove = (ev: MouseEvent) => {
            setCoordinates({ 
                top: ev.clientY - 20, 
                left: ev.clientX - 20 
            });
        };
        
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
    
    return (
        <div className="absolute h-screen w-screen z-0">
            <div
                className="w-10 h-10 rounded-full fixed"
                style={{
                    top: `${coordinates.top}px`,
                    left: `${coordinates.left}px`,
                    pointerEvents: "none",
                    boxShadow: '0 0 250px 250px rgba(120, 120, 220, 0.04)',
                    background: 'rgba(120, 120, 220, 0.04)'
                }}
            >
            </div>
        </div>
    )
}

export default Overlay