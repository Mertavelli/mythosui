import { CiLocationArrow1 } from "react-icons/ci";

export default function Button({
    children,
    className,
    onClick,
    icon,
    iconPosition = "right",
    iconSize = 20,
    ariaLabel = "Button",
    secondary
}) {
    return (
        <button
            className={`flex items-center justify-center gap-2 rounded-xl p-4 w-full max-w-sm hover:cursor-pointer transition-colors ${className} ${secondary ? "text-primary border border-primary hover:bg-black/5" : "bg-primary hover:bg-primary/95 text-white"}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <div className="flex items-center gap-1.5 hover:gap-3 transition-all">
                {iconPosition === "left" && icon && (
                    <CiLocationArrow1 size={iconSize} />
                )}

                <span className="text-lg">{children}</span>

                {iconPosition === "right" && icon && (
                    <CiLocationArrow1 size={iconSize} />
                )}
            </div>

        </button>
    );
}
