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
                        <p className='font-semibold'>学校：江西新华电脑学院(2017-2020)(2017-2020)</p>
                        <p className='my-3'>学习经历：...</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                    <h5 className='my-3 text-xl font-bold'>工作经验：一年运维经验，一年前端开发经验</h5>
                    <div>
                        <h5 className='my-2 font-semibold'>岗位：初级网络工程师</h5>
                        <p className='font-semibold'>公司：东莞斯达文星有限公司(2021.9-至今)</p>
                        <p className='my-3'>工作经历：有平面设计经验和视频制作基础，做过运维做过前端开发</p>
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