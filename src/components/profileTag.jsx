const ProfileTag = ({
    initials,
    bgClass = 'bg-blue-500 dark:bg-blue-500',
    href,
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        relative
        w-10 h-10 md:w-12 md:h-12
        flex items-center justify-center
        rounded-full
        text-xs md:text-sm font-regular

        ${bgClass}

        text-black dark:text-white
        border-2 border-current

        shadow-[3px_3px_0px_0px_currentColor]

        transition-all duration-200 ease-in-out

        hover:shadow-none
        hover:translate-x-[3px]
        hover:translate-y-[3px]

        focus:outline-none
        focus:ring-2
        focus:ring-current
        focus:ring-offset-2
        focus:ring-offset-transparent
      `}
        >
            {initials}
        </a>
    );
};

export default ProfileTag;

