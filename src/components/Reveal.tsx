import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
}

export const Reveal = ({ children, width = '100%', delay = 0 }: RevealProps) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.15 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                position: 'relative',
                width,
                overflow: 'hidden',
                visibility: isVisible ? 'visible' : 'hidden'
            }}
        >
            <div
                style={{
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    opacity: isVisible ? 1 : 0,
                    transition: `all 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
                }}
            >
                {children}
            </div>
        </div>
    );
};
