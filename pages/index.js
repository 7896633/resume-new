import Head from 'next/head'
import {shows} from "../data";
import Show from "../components/Show";
import {motion} from 'framer-motion'
import {fadeInUp, routeAnimation, stagger} from '../animations'

export default function Home() {
  return (
    <motion.div
         className='flex flex-col px-6 pt-1 flex-grow'
        // 样式调取
         variants={routeAnimation}
        // 最初样式
         initial='initial'
        // 动画
         animate='animate'
        // 结束
         exit='exit'>
      <Head>
        <title>简介</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <p className='my-3 font-medium '>
            我有着一年前端学习经验,对后端和ui/ux设计也也有所了解。
        </p>
        <div className='p-4 mt-5 bg-gray-400 -mx-6 flex-grow dark:bg-dark-100'>
            <h6 className='my-3 text-xl font-bold tracking-widest '>我能够</h6>
            <motion.div className='grid gap-6 md:grid-cols-2 my-3'
                        variants={stagger}
                        animate='animate'
                        initial='initial'>
                {
                    shows.map(show=>(
                        <motion.div
                            variants={fadeInUp}
                            key={show.title}
                            className='col-span-2 p-2 bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200'
                        >

                            {/*展示*/}
                            <Show title={show.title} Icon={show.Icon} about={show.about}/>
                        </motion.div>
                    ))
                }
        </motion.div>
    </div>

    </motion.div>
  )
}
