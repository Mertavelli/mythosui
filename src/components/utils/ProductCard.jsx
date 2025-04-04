import { IconContext } from "react-icons";
import { FaPlus } from "react-icons/fa6";

export default function ProductCard({ className, href, name, src = '/test-img.jpg', description, price }) {
    return (
        <a href={href}>
            <div className={`grid grid-cols-1 p-5 rounded-xl shadow-2xl w-full max-w-sm ${className}`}>

                <div className="flex justify-center">
                    <div className="bg-gray-500 w-full h-full overflow-hidden rounded-xl">
                        <img src={src} className="object-cover w-full h-full" />
                    </div>
                </div>

                <div className="flex justify-between items-start mt-5 gap-5">
                    <div className="flex flex-col gap-2">
                        <p className="text-lg font-semibold">{name}</p>
                        <p className="font-regular text-black/70">{description}</p>
                        <p className="text-lg font-semibold">{price}</p>
                    </div>

                    <button className="bg-primary rounded-full p-3 hover:cursor-pointer hover:bg-primary/95 transition-colors">
                        <IconContext.Provider value={{ style: { color: 'white' } }}>
                            <FaPlus />
                        </IconContext.Provider>
                    </button>
                </div>

            </div>
        </a>
    );
}
