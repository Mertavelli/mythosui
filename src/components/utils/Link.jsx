import { MdArrowOutward } from "react-icons/md";

export default function Link({
    href,
    children,
    className,
    icon,
    iconPosition = "right",
    iconSize = 20,
    ariaLabel = "Link",
    secondary
}) {
    return (
        <a
            href={href}
            className={`flex items-center justify-center gap-2 rounded-xl p-4 w-full max-w-sm hover:cursor-pointer transition-colors ${className} ${secondary ? "text-primary border border-primary hover:bg-black/5" : "bg-primary hover:bg-primary/95 text-white"}`}
            aria-label={ariaLabel}
        >
            <div className="flex items-center gap-1.5 hover:gap-3 transition-all">
                {iconPosition === "left" && icon && (
                    <MdArrowOutward size={iconSize} />
                )}

                <span className="text-lg">{children}</span>

                {iconPosition === "right" && icon && (
                    <MdArrowOutward size={iconSize} />
                )}
            </div>

        </a>
    );
}
