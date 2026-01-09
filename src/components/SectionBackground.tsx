interface SectionBackgroundProps {
    isDynamic?: boolean;
}

export const SectionBackground = ({ isDynamic = false }: SectionBackgroundProps) => {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Base Theme Color */}
            <div className="absolute inset-0 bg-background" />

            {/* Background Layer */}
            <div
                className={`absolute inset-0 dark:opacity-[0.25] ${isDynamic ? 'opacity-[0.7] animate-vivid-shift' : 'opacity-[0.3]'}`}
                style={{
                    background: isDynamic
                        ? 'linear-gradient(135deg, hsl(265 80% 92%), hsl(275 75% 90%), hsl(285 80% 93%), hsl(270 85% 88%), hsl(280 70% 92%))'
                        : 'hsl(265 60% 95%)',
                    backgroundSize: isDynamic ? '400% 400%' : '100% 100%',
                }}
            />

            {/* Aurora Blobs - Only for Hero - Hidden in Dark Mode */}
            {isDynamic && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none dark:hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-blob" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-blob delay-500" />
                    <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px] animate-blob delay-200" />
                </div>
            )}

            {/* Cinematic Noise Overlay - Hidden in Dark Mode */}
            {isDynamic && <div className="absolute inset-0 noise-bg mix-blend-soft-light opacity-20 pointer-events-none dark:hidden" />}

            {/* Sharper Classy Grid */}
            <div
                className={`absolute inset-0 dark:opacity-[0.15] ${isDynamic ? 'opacity-[0.3] animate-grid-pulse' : 'opacity-[0.25]'}`}
                style={{
                    backgroundImage: `
                        linear-gradient(to right, hsl(var(--foreground)/12%) 1px, transparent 1px),
                        linear-gradient(to bottom, hsl(var(--foreground)/12%) 1px, transparent 1px)
                    `,
                    backgroundSize: '48px 48px',
                    maskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at 50% 50%, black 20%, transparent 100%)'
                }}
            />

            {/* Cinematic Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(var(--background),0.3)_100%)] shadow-[inset_0_0_150px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_150px_rgba(0,0,0,0.4)]" />
        </div>
    );
};
