import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor = () => {
    const mainCursor = useRef<HTMLDivElement>(null);
    const secondaryCursor = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            if (mainCursor.current && secondaryCursor.current) {
                mainCursor.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
                secondaryCursor.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
            }
            if (!isVisible) setIsVisible(true);
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName.toLowerCase() === 'button' ||
                target.tagName.toLowerCase() === 'a' ||
                target.closest('.glass-card') ||
                target.closest('.interactive-item')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);
        const onMouseLeave = () => setIsVisible(false);
        const onMouseEnter = () => setIsVisible(true);

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseOver);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseleave', onMouseLeave);
        document.addEventListener('mouseenter', onMouseEnter);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseOver);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseleave', onMouseLeave);
            document.removeEventListener('mouseenter', onMouseEnter);
        };
    }, [isVisible]);

    return (
        <div className={`fixed inset-0 pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden md:block`}>
            {/* Main Dot */}
            <div
                ref={mainCursor}
                className={`fixed top-0 left-0 w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out will-change-transform z-10 ${isClicking ? 'scale-75' : 'scale-100'}`}
            />
            {/* Outer Ring */}
            <div
                ref={secondaryCursor}
                className={`fixed top-0 left-0 w-10 h-10 border border-primary/30 rounded-full -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out will-change-transform ${isHovering ? 'scale-150 bg-primary/5 border-primary/50' : 'scale-100'
                    } ${isClicking ? 'scale-90 bg-primary/20' : ''}`}
            />
        </div>
    );
};
