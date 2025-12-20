import React, { useState, useEffect } from 'react';

// Dynamically import all images from the photography folder
const imageModules = import.meta.glob('../photography/*.{png,jpg,jpeg,webp,svg}', { eager: true });

// Convert imports to array
const photos = Object.values(imageModules).map((mod, index) => ({
    id: index,
    src: mod.default,
    alt: `Personal Photo ${index + 1}`,
}));

export default function PersonalGrid() {
    const [columns, setColumns] = useState(2); // Start with minimum 2

    useEffect(() => {
        // Tailwind 'lg' breakpoint is 1024px by default. 
        // We want 3 columns for lg+, and 2 columns for anything smaller.
        const mediaQuery = window.matchMedia('(min-width: 1024px)');

        const handleResize = (e) => {
            setColumns(e.matches ? 3 : 2);
        };

        // Set initial value
        handleResize(mediaQuery);

        mediaQuery.addEventListener('change', handleResize);
        return () => mediaQuery.removeEventListener('change', handleResize);
    }, []);

    // Distribute photos into columns
    const columnPhotos = Array.from({ length: columns }, () => []);
    photos.forEach((photo, index) => {
        columnPhotos[index % columns].push(photo);
    });

    return (
        <section className="w-full relative">
            {/* Background Gradient Wrapper */}
            <div
                className="absolute inset-0 -z-10 h-full pointer-events-none bg-[linear-gradient(to_bottom,#94BEA3_0%,white_15%,white_50%,#f5f5f5_60%,#f5f5f5_100%)] dark:bg-none dark:bg-black"
            />

            <div className="max-w-[1400px] mx-auto px-4 py-8">
                <div className="flex gap-4 md:gap-8">
                    {columnPhotos.map((col, colIndex) => (
                        <div
                            key={colIndex}
                            className={`flex-1 flex flex-col gap-4 md:gap-8 ${columns === 3
                                ? (colIndex === 1 ? 'pt-24' : colIndex === 2 ? 'pt-12' : '')
                                : (colIndex === 1 ? 'pt-24' : '')
                                }`}
                        >
                            {col.map((photo) => (
                                <div key={photo.id} className="w-full" data-cursor-expand data-cursor-color="transparent">
                                    <img
                                        src={photo.src}
                                        alt={photo.alt}
                                        className="w-full h-auto object-cover block"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
