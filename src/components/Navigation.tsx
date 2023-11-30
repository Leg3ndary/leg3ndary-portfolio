import Logo from "@/assets/home/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navigation() {
    const [scrollY, setScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const hamburger =
        "h-1 w-8 my-1 rounded-full bg-white transition ease transform duration-300";

    useEffect(() => {
        function handleScroll() {
            setScrollY(window.scrollY);
        }
        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 z-10 flex flex-col w-full h-auto transition-all duration-1000">
            <div
                className={`flex justify-center w-full transition-all h-20 bg-black duration-1000 ${
                    scrollY > 0
                        ? "lg:h-16 lg:bg-black"
                        : "lg:bg-transparent lg:h-32"
                }`}
            >
                <div className="flex flex-row flex-wrap w-11/12 max-w-[1170px] h-full">
                    <motion.div
                        className="flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                        }}
                    >
                        <Link href="/">
                            <Image
                                className="w-16 ml-8 lg:ml-0 lg:auto lg:w-12"
                                src={Logo}
                                alt="Logo"
                                loading="lazy"
                            />
                        </Link>
                    </motion.div>
                    <div className="items-center justify-end hidden gap-10 ml-auto lg:flex lg:w-11/12">
                        <motion.div
                            className="bg-clip-text bg-rainbow-gradient animate-breathing-gradient"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                            }}
                        >
                            <Link
                                className={`text-base font-bold text-center text-white transition-all duration-1000 ${
                                    scrollY > 0 ? "hover:text-transparent" : ""
                                }`}
                                href="/"
                            >
                                HOME
                            </Link>
                        </motion.div>
                        <motion.div
                            className="bg-clip-text bg-rainbow-gradient animate-breathing-gradient"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 10,
                            }}
                        >
                            <Link
                                className={`text-base font-bold text-center text-white transition-all duration-1000 ${
                                    scrollY > 0 ? "hover:text-transparent" : ""
                                }`}
                                href="/projects"
                            >
                                PROJECTS
                            </Link>
                        </motion.div>
                    </div>
                    <div className="flex items-center justify-end gap-10 ml-auto lg:hidden">
                        <button
                            className="flex flex-col items-center justify-center w-12 h-12 mr-4 duration-500 rounded"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div
                                className={`${hamburger} ${
                                    isOpen ? "rotate-45 translate-y-3" : ""
                                }`}
                            />
                            <div
                                className={`${hamburger} ${
                                    isOpen ? "opacity-0" : ""
                                }`}
                            />
                            <div
                                className={`${hamburger} ${
                                    isOpen ? "-rotate-45 -translate-y-3" : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="relative flex flex-col w-full h-auto p-4 transition-all duration-1000 bg-black lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <Link
                            className="p-2 text-xl font-bold text-center text-white"
                            href="/"
                        >
                            HOME
                        </Link>
                        <Link
                            className="p-2 text-xl font-bold text-center text-white"
                            href="/projects"
                        >
                            PROJECTS
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
