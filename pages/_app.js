import '../styles/globals.css'
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import {ThemeProvider} from "next-themes";
import {AnimatePresence} from "framer-motion";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider  attribute="class">
        {/*      与下一个单位间隔12小个单位*/}
            <div className=' grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 dark:bg-dark-400'>
                {/*占12个小单位                                                                                                 阴影*/}
                <div className='h-full col-span-12 p-4 shadow-xl text-base text-center bg-white  lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500'>
                    {/*侧边栏*/}
                    <Sidebar/>
                </div>
                <div className='flex flex-col bg-white col-span-12  rounded-2xl lg:col-span-9 shadow-custom-light dark:shadow-custom-dark dark:bg-dark-500 '>
                    {/*导航条*/}
                    <Navbar/>
                    {/*启用退出动画是必需的，因为 React 缺少生命周期方法*/}
                    <AnimatePresence exitBeforeEnter>
                        {/*内容 （简历、简介、项目）*/}
                        <Component {...pageProps} />
                    </AnimatePresence>
                </div>
            </div>
         </ThemeProvider>
    )
}

export default MyApp
