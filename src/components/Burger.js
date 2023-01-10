import { AnimatePresence, motion } from "framer-motion";

export function Burger ({menuOpen, setMenuOpen}) {
    return(
        <>
            <motion.div 
                    className="burger" 
                    onClick={() => setMenuOpen(!menuOpen)}
                    transition={{duration: .3}}
                    >
                       <svg width="57" height="41" viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Burger">
                            <motion.line id="Line 1" animate={{y2: menuOpen? 38.5 : 2.5}} transition={{duration: .5}} x1="2.5" y1="2.5" x2="54.5" y2="2.5" stroke="#323537" strokeWidth="4" strokeLinecap="round"/>
                            <AnimatePresence>
                                {!menuOpen ? 
                                <motion.line id="Line 2" animate={{pathLength: 1, x1: "2.5"}} exit={{pathLength: 0}} transition={{duration: .5}} x1="2.5" y1="20.5" x2="54.5" y2="20.5" stroke="#323537" strokeWidth="4" strokeLinecap="round"/>
                            :null}
                            </AnimatePresence>
                            <motion.line id="Line 3" animate={{y2: menuOpen? 2.5 : 38.5}} transition={{duration: .5}} x1="2.5" y1="38.5" x2="54.5" y2="38.5" stroke="#323537" strokeWidth="4" strokeLinecap="round"/>
                            </g>
                        </svg>
            </motion.div>
        </>
    )
}