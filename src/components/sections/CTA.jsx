export default function CTA({ title, text, titleRight }) {
    const content = titleRight
        ? [<p key="text" className="text-[1.25rem] break-all">{text}</p>,
        <h1 key="title" className="text-[5rem] font-semibold text-center leading-none break-all">{title}</h1>]
        : [<h1 key="title" className="text-[5rem] font-semibold text-center leading-none break-all">{title}</h1>,
        <p key="text" className="text-[1.25rem] break-all">{text}</p>];

    return (
        <div className="grid grid-cols-2 py-20">
            {content}
        </div>
    );
}
