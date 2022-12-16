import React from 'react';
import Head from "next/head";
import {languages, tools} from "../data";
import Bar from "../components/Bar";
import {motion} from 'framer-motion'
import {fadeInUp, routeAnimation} from '../animations'

const Resume = () => {
    return (
        <motion.div  className='px-6 py-2'
              animate='animate'
              initial='initial'
              variants={routeAnimation}
              exit='exit'>
            <Head>
                <title>简历</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='grid gap-6 md:grid-cols-2'>
                <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                    <h5 className='my-3 text-xl font-bold'>教育经历：</h5>
                    <div>
                        <h5 className='my-2 font-semibold'>专业：平面设计</h5>
                        <p className='font-semibold'>学校：家里蹲大学(2017-2020)</p>
                        <p className='my-3'>学习经历：what？</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                    <h5 className='my-3 text-xl font-bold'>工作经验：</h5>
                    <div>
                        <h5 className='my-2 font-semibold'>岗位：流水线</h5>
                        <p className='font-semibold'>公司：xxx电子有限公司(20xx-至今)</p>
                        <p className='my-3'>工作经历：摸鱼</p>
                    </div>
                </motion.div>
            </div>


            <div className='grid gap-6 md:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-2xl font-bold'>
                        语言与框架
                    </h5>
                    <div className='my-2 dark:opacity-80'>
                        {
                            languages.map(language=><Bar Icon={language.Icon} name={language.name} level={language.level}/>)
                        }
                    </div>
                </div>
                <div>
                    <h5 className='my-3 text-2xl font-bold '>
                        工具与程序
                    </h5>
                    <div className='my-2 dark:opacity-80'>
                        {
                            tools.map(tool=><Bar Icon={tool.Icon} name={tool.name} level={tool.level}/>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Resume;