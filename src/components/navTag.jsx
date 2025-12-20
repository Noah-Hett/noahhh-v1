const NavTag = ({ text, textColor = 'text-black dark:text-white', bgColor = 'bg-white dark:bg-black', ...props }) => {
    return (
        <button
            className={`
        /* 1. Layout & Sizing */
        relative pl-3 pr-4 py-1 w-fit text-base md:text-3xl font-semibold
        filter-none backdrop-blur-none transform-gpu translate-z-0
        
        /* 2. Colors (Background & Text) */
        ${bgColor} ${textColor}
        
        /* 3. Borders & Shadow */
        border-black dark:border-white
        border-3
        shadow-[4px_4px_0px_0px_black] dark:shadow-[4px_4px_0px_0px_white]
        
        /* 4. Animation Properties */
        transition-all duration-200 ease-in-out
        
        /* 5. Interaction States (Bottom State) */
        outline-none
        hover:shadow-none focus:shadow-none active:shadow-none
        hover:translate-x-[4px] focus:translate-x-[4px] active:translate-x-[4px]
        hover:translate-y-[4px] focus:translate-y-[4px] active:translate-y-[4px]
      `}
            {...props}
        >
            {text}
        </button>
    );
};

export default NavTag;