import { useEffect } from "react";
import gsap from "gsap";
import Link from "../utils/Link";
import '../../index.css'
//Helpers

const splitLastWord = (text) => {
    if (text) {
        const words = text.trim().split(" ");
        if (words.length === 1) return { firstPart: "", lastWord: text }; // Falls nur ein Wort existiert

        const lastWord = words.pop(); // Nimmt das letzte Wort
        return {
            firstPart: words.join(" "), // Der restliche Satz
            lastWord: lastWord, // Das letzte Wort
        };
    }
};

const splitLastWordIntoChars = (word) => {
    return word.split("").map((char, index) => (
        <span key={index} className="char">{char}</span>
    ));
};


export default function Hero2({ firstTitle, secondTitle, description }) {
    const { firstPart, lastWord } = splitLastWord(firstTitle)
    const firstPart2 = splitLastWord(firstPart).firstPart;
    const lastWord2 = splitLastWord(firstPart).lastWord;

    useEffect(() => {
        const colors = ["#01befe", "#ffdd00", "#ff7d00", "#ff006d", "#adff02", "#8f00ff"];

        // Stelle sicher, dass die Animation direkt startet, wenn die Seite geladen wird
        gsap.to(".char", {
            duration: 0.1,  // Schnelle Farbwechsel
            repeat: -1,  // Endlos wiederholen
            stagger: 0.05,  // Verzögerung zwischen den Buchstaben
            onStart: function () {
                // Wenn die Animation startet, direkt die Farbe ändern
                document.querySelectorAll(".char").forEach((char) => {
                    char.style.color = colors[Math.floor(Math.random() * colors.length)];
                });
            },
            onRepeat: function () {
                document.querySelectorAll(".char").forEach((char) => {
                    char.style.color = colors[Math.floor(Math.random() * colors.length)];
                });
            },
        });

        // Stelle sicher, dass die Animation direkt startet, wenn die Seite geladen wird
        gsap.to(".color-change-div", {
            duration: 5,  // Schneller Farbwechsel
            repeat: -1,  // Endlos wiederholen
            stagger: 0.05,  // Verzögerung zwischen den Farbwechseln
            onStart: function () {
                // Wenn die Animation startet, direkt die Farbe ändern
                document.querySelector(".color-change-div").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            },
            onRepeat: function () {
                // Bei jedem Wiederholen der Animation die Farbe ändern
                document.querySelector(".color-change-div").style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            },
        });
    }, []);



    return (
        <>
            <div className="color-change-div">
                <div className="bg-white mx-1.5 relative h-screen">

                    <div className="text-center pt-50">
                        <h1 className="font-extrabold text-[10rem] leading-none text-primary/90">
                            {firstPart2}&nbsp;
                            <span className="hero-title text-white">
                                {splitLastWordIntoChars(lastWord2)}&nbsp;
                            </span>
                            <span className="hero-title text-white">
                                {splitLastWordIntoChars(lastWord)}
                            </span>
                        </h1>

                        <h1 className="font-extrabold text-[10rem] leading-none text-center text-primary/90">
                            {secondTitle}
                        </h1>


                        <br />

                        <div className="hero-description flex flex-col gap-5 items-center mt-5">
                            <p className="tracking-[.25em] text-black text-[1.25rem]">
                                {description}
                            </p>

                            <Link
                                className={"mt-6"} // margin-top für den Button
                                secondary={true}
                                children={"Get in Contact"}
                                icon={true}
                            />
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
