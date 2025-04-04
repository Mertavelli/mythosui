import Button from "../utils/Button"

export default function ContactForm({ links, address, titleCol1, titleCol2, titleCol3, formFields }) {

    return (
        <div>
            <div className="flex justify-center">
                <div className="grid grid-cols-4 gap-10">

                    <div className="flex flex-col gap-2">
                        <h1 className="text-[1.5rem] mb-2 sm:mb-5">{titleCol1}</h1>
                        {links.map((link, index) => (
                            <a href={link.href} key={index} className="hover:underline cursor-pointer">{link.text}</a>
                        ))}
                        <div className="invisible">Dummy</div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h1 className="text-[1.5rem] mb-2 sm:mb-5">{titleCol2}</h1>
                        {address.map((addr, index) => (
                            <p key={index}>{addr.text}</p>
                        ))}
                    </div>

                    <div className="flex flex-col col-span-2">
                        <h1 className="text-[1.5rem] mb-2 sm:mb-5">{titleCol3}</h1>
                        <div className="flex flex-col gap-5">

                            {formFields.map((field, index) => (
                                <div key={index} className={`flex ${field.type == "checkbox" ? " justify-between" : "flex-col"}`}>
                                    <label>{field.label}</label>
                                    {field.textarea ? (
                                        <textarea
                                            placeholder={field.placeholder || field.label}
                                            className="bg-white border py-2 px-4 rounded-xl"
                                        />
                                    ) : (
                                        <input
                                            type={field.type}
                                            placeholder={field.placeholder || field.label}
                                            className="bg-white border py-2 px-4 rounded-xl"
                                        />
                                    )}
                                </div>
                            ))}




                            <Button>SUBMIT MESSAGE</Button>

                        </div>

                    </div>
                </div>
            </div>

        </div >
    )
}