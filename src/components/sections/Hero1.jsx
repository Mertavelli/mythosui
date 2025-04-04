import { useEffect } from 'react';
import { gsap } from 'gsap';
import Link from '../utils/Link';

// Funktion zum Splitten des Titels in zwei Hälften
const splitTitleToHalves = (text) => {
    const mid = Math.floor(text.length / 2);
    const leftPart = text.slice(0, mid);
    const rightPart = text.slice(mid);

    return { leftPart, rightPart };
};

// Splitte jede Hälfte in einzelne Zeichen
const splitChars = (text) => {
    return text.split("").map((char, index) => (
        <span key={index}>{char === ' ' ? '\u00A0' : char}</span>
    ));
};

export default function Hero1({ firstTitle, secondTitle, description }) {
    const rightPart1 = splitTitleToHalves(firstTitle).rightPart;
    const leftPart1 = splitTitleToHalves(firstTitle).leftPart;
    const leftChars1 = splitChars(leftPart1);
    const rightChars1 = splitChars(rightPart1);

    const rightPart2 = splitTitleToHalves(secondTitle).rightPart;
    const leftPart2 = splitTitleToHalves(secondTitle).leftPart;
    const leftChars2 = splitChars(leftPart2);
    const rightChars2 = splitChars(rightPart2);

    useEffect(() => {
        // GSAP Animation: Umgekehrte Reihenfolge für das Animieren der .left-char-Elemente
        gsap.fromTo(
            ".left-char",
            { x: "-200vw" }, // Startposition für links
            {
                x: "0px",
                duration: 1,
                ease: "power3.out",
                stagger: {
                    amount: 1, // Zeitabstand zwischen den Animationen
                    from: "end", // Animation startet mit dem letzten Element
                },
            }
        );

        // GSAP Animation: Umgekehrte Reihenfolge für das Animieren der .right-char-Elemente
        gsap.fromTo(
            ".right-char",
            { x: "200vw" }, // Startposition für rechts
            {
                x: "0px",
                duration: 1,
                ease: "power3.out",
                stagger: {
                    amount: 1, // Zeitabstand zwischen den Animationen
                    from: "start", // Animation startet mit dem letzten Element
                },
            }
        );

    }, []);

    return (
        <>
            <div className="bg-[url('/herobg.jpg')] w-screen h-screen bg-cover pt-50 flex justify-center items-center relative">
                <div className="text-center absolute top-60">

                    <div className="flex justify-center items-center">
                        {leftChars1.map((char, index) => (
                            <h1 key={index} className="left-char bg-radial-[at_25%_25%] from-white via-gray-100 to-black/40 bg-clip-text text-transparent font-bold text-[10rem] leading-none">
                                {char === ' ' ? '\u00A0' : char}
                            </h1>
                        ))}

                        {rightChars1.map((char, index) => (
                            <h1 key={index} className="right-char bg-radial-[at_25%_25%] from-white via-gray-100 to-black/40 bg-clip-text text-transparent font-bold text-[10rem] leading-none">
                                {char === ' ' ? '\u00A0' : char}
                            </h1>
                        ))}
                    </div>

                    <div className="flex justify-center items-center">
                        {leftChars2.map((char, index) => (
                            <h1 key={index} className="left-char bg-radial-[at_25%_25%] from-white via-gray-100 to-black/40 bg-clip-text text-transparent font-bold text-[10rem] leading-none">
                                {char === ' ' ? '\u00A0' : char}
                            </h1>
                        ))}

                        {rightChars2.map((char, index) => (
                            <h1 key={index} className="right-char bg-radial-[at_25%_25%] from-white via-gray-100 to-black/40 bg-clip-text text-transparent font-bold text-[10rem] leading-none">
                                {char === ' ' ? '\u00A0' : char}
                            </h1>
                        ))}
                    </div>

                    <br />

                    <div className="hero-description flex flex-col gap-5 items-center mt-5">
                        <p className="tracking-[.25em] text-gray-200 text-[1.25rem]">
                            {description}
                        </p>

                        {/* Der Button erhält zusätzlich margin-top, damit er unter der Beschreibung angezeigt wird */}
                        <Link
                            className={"border-white text-white mt-6"} // margin-top für den Button
                            secondary={true}
                            children={"Get in Contact"}
                            icon={true}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}