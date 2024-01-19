const Step = ({
    title,
    index,
    activeIndex,
    length,
}: {
    title: string;
    index: number;
    activeIndex: number;
    length: number;
}) => {
    if (index < activeIndex) {
        return (
            <li
                key={title}
                className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
            >
                <div className="min-w-[28px] min-h-[28px] inline-flex justify-center items-center text-xs align-middle">
                    <svg
                        className="w-7 h-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    <span className="ms-2 block text-sm font-medium text-gray-800">
                        {title}
                    </span>
                </div>
                <div className="w-full h-px flex-1 bg-gray-500 group-last:hidden"></div>
            </li>
        );
    }

    if (index === length - 1 && index === activeIndex) {
        return (
            <li
                key={title}
                className="flex items-center gap-x-2 shrink basis-0 group"
            >
                <div className="min-w-[28px] min-h-[28px] inline-flex justify-center items-center text-xs align-middle">
                    <span className="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full border-2 border-primary">
                        {index + 1}
                    </span>
                    <span className="ms-2 block text-sm font-medium text-gray-800">
                        {title}
                    </span>
                </div>
            </li>
        );
    }

    if (index === length - 1) {
        return (
            <li
                key={title}
                className="flex items-center gap-x-2 shrink basis-0 group"
            >
                <div className="min-w-[28px] min-h-[28px] inline-flex justify-center items-center text-xs align-middle">
                    <span className="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
                        {index + 1}
                    </span>
                    <span className="ms-2 block text-sm font-medium text-gray-800">
                        {title}
                    </span>
                </div>
            </li>
        );
    }

    if (index === activeIndex) {
        return (
            <li
                key={title}
                className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
            >
                <div className="min-w-[28px] min-h-[28px] inline-flex justify-center items-center text-xs align-middle">
                    <span className="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full border-2 border-primary">
                        {index + 1}
                    </span>
                    <span className="ms-2 block text-sm font-medium text-gray-800 underline">
                        {title}
                    </span>
                </div>
                <div className="w-full h-px flex-1 bg-gray-500 group-last:hidden"></div>
            </li>
        );
    }

    return (
        <li
            key={title}
            className="flex items-center gap-x-2 shrink basis-0 flex-1 group"
        >
            <div className="min-w-[28px] min-h-[28px] inline-flex justify-center items-center text-xs align-middle">
                <span className="w-7 h-7 flex justify-center items-center flex-shrink-0 bg-gray-100 font-medium text-gray-800 rounded-full">
                    {index + 1}
                </span>
                <span className="ms-2 block text-sm font-medium text-gray-800">
                    {title}
                </span>
            </div>
            <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden"></div>
        </li>
    );
};

export default Step;
