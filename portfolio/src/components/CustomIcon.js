import React from 'react'
import {motion} from "framer-motion"

const CustomIcon = ({href, content, className=""}) => {
    return (
        <motion.a 
        target={"_blank"}
        href={href} 
        className={`${className} w-7`}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        >
            {content}
        </motion.a>
    )
}

export default CustomIcon