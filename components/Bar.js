import React from 'react';
import {motion} from 'framer-motion'

const Bar = ({Icon,name,level}) => {
    // 将宽度转换为百分比
    const bar=`${level}`
    const variants={
        initial:{
            width:0
        },
        animate:{
            width: bar,
            transition:{
                duration:0.4,
                type:"spring",
                damping:10,
                stiffness:100,
            },
        }
    }

    return (
        <div className='my-2 text-white bg-gray-300 rounded-full '>
            <motion.div
                initial='initial'
                animate='animate'
                variants={variants}
                style={{width:bar}}
                className='px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-sky-400 to-red-300'
            >
                <Icon className='mr-3'/>
                {name}
            </motion.div>
        </div>
    );
};

export default Bar;
4