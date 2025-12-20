import WorkGrid from "../components/workGrid";

function AllProjects() {
    return (
        <div className="min-h-screen bg-neutral-100 dark:bg-black overflow-x-hidden">
            {/* Header Section */}
            <div className="grid grid-cols-2 px-8 pt-8 pb-6 md:pb-12 bg-white dark:bg-neutral-900 items-start">

                {/* Left: Stacked Text */}
                <div className="col-span-1 flex flex-col justify-start">
                    <h1 className="text-[18vw] font-light leading-[0.75] tracking-tighter dark:text-white">
                        ALL
                    </h1>
                    <h2 className="text-[6vw] font-light leading-none tracking-tight dark:text-white mt-[1vw]">
                        PROJECTS
                    </h2>
                </div>

                {/* Right: Scaling Circle Grid */}
                <div className="col-span-1 flex justify-end">
                    {/* The gap and size now use vw to stay proportional to the text */}
                    <div className="grid grid-cols-3 gap-[1vw]">
                        {[...Array(9)].map((_, i) => (
                            <div
                                key={i}
                                className="w-[6vw] h-[6vw] rounded-full border-[0.2vw] border-black dark:border-white"
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="px-4 py-24 bg-neutral-100 dark:bg-black min-h-screen">
                <WorkGrid columns={3} />
            </div>

            <div className="col-span-1 md:col-span-3 pb-32 flex flex-col gap-4 text-center order-4">
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    &copy; {new Date().getFullYear()} Noah Hett. All Rights Reserved.
                </p>
            </div>
        </div>
    );
}

export default AllProjects;
