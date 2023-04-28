import { FC, memo, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    MainContainer,
    TitleContainer,
    Title,
    VideoContainer,
    VideoUrl,
    Span,
} from "./styles";

const Video: FC = () => {

    const titleVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.05, // retrasa el inicio de la animación medio segundo
                staggerChildren: 0.04, // retrasa el inicio de cada letra 0.1 segundos
            },
        },
    };

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50, // desplaza cada letra hacia abajo mientras está oculta
        },
        visible: {
            opacity: 1,
            y: 0, // devuelve cada letra a su posición original
        },
    };

    const [shouldScale, setShouldScale] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShouldScale(true);
            setTimeout(() => {
                setShouldScale(false);
            }, 1000);
        }, 2000);

        return () => clearInterval(interval);
    }, []);


    return (
        <MainContainer>
            <TitleContainer>
                <motion.div
                    variants={titleVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.span variants={letterVariants}>D</motion.span>
                    <motion.span variants={letterVariants}>e</motion.span>
                    <motion.span variants={letterVariants}>s</motion.span>
                    <motion.span variants={letterVariants}>c</motion.span>
                    <motion.span variants={letterVariants}>u</motion.span>
                    <motion.span variants={letterVariants}>b</motion.span>
                    <motion.span variants={letterVariants}>r</motion.span>
                    <motion.span variants={letterVariants}>e</motion.span>
                    <motion.span variants={letterVariants}> </motion.span>
                    <motion.span variants={letterVariants}>l</motion.span>
                    <motion.span variants={letterVariants}>a</motion.span>
                    <motion.span variants={letterVariants}> </motion.span>
                    <motion.span variants={letterVariants}>n</motion.span>
                    <motion.span variants={letterVariants}>u</motion.span>
                    <motion.span variants={letterVariants}>e</motion.span>
                    <motion.span variants={letterVariants}>v</motion.span>
                    <motion.span variants={letterVariants}>a</motion.span>
                    <motion.span variants={letterVariants}> </motion.span>
                    <motion.span variants={letterVariants}>p</motion.span>
                    <motion.span variants={letterVariants}>r</motion.span>
                    <motion.span variants={letterVariants}>o</motion.span>
                    <motion.span variants={letterVariants}>f</motion.span>
                    <motion.span variants={letterVariants}>e</motion.span>
                    <motion.span variants={letterVariants}>s</motion.span>
                    <motion.span variants={letterVariants}>i</motion.span>
                    <motion.span variants={letterVariants}>ó</motion.span>
                    <motion.span variants={letterVariants}>n</motion.span>
                    <motion.span variants={letterVariants}> </motion.span>
                    <motion.span variants={letterVariants}>c</motion.span>
                    <motion.span variants={letterVariants}>o</motion.span>
                    <motion.span variants={letterVariants}>n</motion.span>
                    <motion.span variants={letterVariants}> </motion.span>
                    <motion.span variants={letterVariants}>l</motion.span>
                    <motion.span variants={letterVariants}>a</motion.span>
                    <motion.span variants={letterVariants}> </motion.span>
                    <motion.span variants={letterVariants}>q</motion.span>
                    <motion.span variants={letterVariants}>u</motion.span>
                    <motion.span variants={letterVariants}>e</motion.span>
                    <motion.span variants={letterVariants}> </motion.span>
                    <motion.span variants={letterVariants}>p</motion.span>
                    <motion.span variants={letterVariants}>u</motion.span>
                    <motion.span variants={letterVariants}>e</motion.span>
                    <motion.span variants={letterVariants}>d</motion.span>
                    <motion.span variants={letterVariants}>e</motion.span>
                    <motion.span variants={letterVariants}>s</motion.span>
                    <motion.span variants={letterVariants}> </motion.span>
                    <motion.span variants={letterVariants}>g</motion.span>
                    <motion.span variants={letterVariants}>a</motion.span>
                    <motion.span variants={letterVariants}>n</motion.span>
                    <motion.span variants={letterVariants}>a</motion.span>
                    <motion.span variants={letterVariants}>r</motion.span>
                    <motion.span variants={letterVariants}> </motion.span>
                    <motion.span variants={letterVariants}>e</motion.span>
                    <motion.span variants={letterVariants}>n</motion.span>
                    <motion.span variants={letterVariants}>t</motion.span>
                    <motion.span variants={letterVariants}>r</motion.span>
                    <motion.span variants={letterVariants}>e</motion.span>
                    <motion.span variants={letterVariants}>.</motion.span>
                    <motion.span variants={letterVariants}>.</motion.span>
                    <motion.span variants={letterVariants}>.</motion.span>
                </motion.div>
                <AnimatePresence>
                    <Span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0, color: "#fbfbfb", scale: shouldScale ? 1.1 : 1 }}
                        transition={{ duration: 2 }}
                    >
                        3000€ y 5000€ al mes
                    </Span>
                </AnimatePresence>
            </TitleContainer>
            <VideoContainer>
                <VideoUrl src="/videos/myvideo.mp4" controls />
            </VideoContainer>
        </MainContainer>
    );
};

export default memo(Video);
