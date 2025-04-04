export default function Textarea({
    label,
    classNameTextarea,
    classNameLabel,
    placeholder,
    id,
    error,
    required,
    type,
    onChange,
    value
}) {

    return (
        <div className="flex flex-col gap-2 w-full max-w-sm">
            {label && (
                <label
                    htmlFor={id}
                    className={`text-[1.25rem] ${classNameLabel} ${error ? "text-red-500" : "text-primary"}`}
                >
                    {label}
                    {required && <span>*</span>}
                </label>
            )}

            <textarea
                id={id}
                className={`border border-primary rounded-xl p-3 focus:ring-2 focus:ring-primary focus:outline-none ${classNameTextarea} ${error ? "border-red-500" : ""}`}
                placeholder={placeholder}
                required={required}
                type={type}
                onChange={onChange}
                value={value}
            />

            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}
