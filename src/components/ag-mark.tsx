export function AgMark(props: React.ComponentProps<"svg">) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="none"
            {...props}
        >
            <path
                fill="currentColor"
                d="M80 144h128v32H80zm-32 32h64v192H48zm128 0h64v192h-64zm-64 64h64v32h-64z"
            />
            <path
                fill="currentColor"
                d="M304 144h128v32H304zm-32 32h64v160h-64zm32 160h128v32H304zm96-160h64v32h-64zm-32 64h96v32h-96zm32 32h64v64h-64z"
            />
        </svg>
    );
}

export function getAgMarkSVG(color: string) {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none"><path fill="${color}" d="M80 144h128v32H80zm-32 32h64v192H48zm128 0h64v192h-64zm-64 64h64v32h-64z"/><path fill="${color}" d="M304 144h128v32H304zm-32 32h64v160h-64zm32 160h128v32H304zm96-160h64v32h-64zm-32 64h96v32h-96zm32 32h64v64h-64z"/></svg>`;
}
