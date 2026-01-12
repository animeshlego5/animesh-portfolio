export function AgMark(props: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 512 256"
            {...props}
        >
            <path
                fill="currentColor"
                d="M64 0h128v64h-128zM0 64h64v192h-64zM192 64h64v192h-64zM64 128h128v64h-128zM320 0h128v64h-128zM256 64h64v128h-64zM320 192h128v64h-128zM448 128h64v64h-64zM384 128h64v64h-64z"
            />
        </svg>
    );
}

export function getAgMarkSVG(color: string) {
    // Simplified path for smaller viewbox 256x128 (0.5 scale)
    return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M32 0h64v32h-64zM0 32h32v96h-32zM96 32h32v96h-32zM32 64h64v32h-64zM160 0h64v32h-64zM128 32h32v64h-32zM160 96h64v32h-64zM224 64h32v32h-32zM192 64h32v32h-32z"/></svg>`;
}
