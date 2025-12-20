const SkillTag = ({ text, color = 'text-blue-600', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        /* 1. Layout & Sizing */
        relative px-3 py-1 w-fit text-sm 
        filter-none backdrop-blur-none transform-gpu translate-z-0
        
        /* 2. Colors (Background & Text) */
        bg-white dark:bg-black ${color}
        
        /* 3. Borders */
        border-2 border-current
        
        /* 4. The "Hard" Shadow (Initial State) */
        /* x-offset | y-offset | blur | spread | color */
        shadow-[4px_4px_0px_0px_currentColor]
        
        /* 5. Animation Properties */
        transition-all duration-200 ease-in-out
        
        /* 6. Interaction States (Bottom State) */
        outline-none
        hover:shadow-none focus:shadow-none active:shadow-none
        hover:translate-x-[4px] focus:translate-x-[4px] active:translate-x-[4px]
        hover:translate-y-[4px] focus:translate-y-[4px] active:translate-y-[4px]
      `}
    >
      {text}
    </button>
  );
};

export default SkillTag;