import React from 'react';
import Image from "next/image";
import {FaReact} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {GiPositionMarker} from "react-icons/gi";
import {useTheme} from "next-themes";


const Sidebar = () => {
    // 判断主题颜色  切换主题
    const {theme,setTheme}=useTheme()
    const changeTheme=()=>{
        setTheme(theme === "light" ? "dark" : "light")
    }
    return (
        <>
            <Image
                src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202103%2F09%2F20210309094501_jfyix.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1673397604&t=6072fd825ea08cd1706f1c1f6b4bca16'
                alt=''
                width={300}
                height={100}
                className='rounded-full '
            />
                                               {/*字母间距*/}
            <h3 className='text-2xl font-black tracking-widest my-4 '>
                张三
            </h3>
            <p className='flex items-center justify-center rounded-full bg-gray-200 px-2 py-1 my-3 dark:bg-dark-200 '>
                <FaReact/>web前端工程师
            </p>
            <a href='/jianli.jpg' download='/jianli.jpg'
               className='flex items-center justify-center rounded-full bg-gray-200 px-2 py-1 my-3 cursor-pointer dark:bg-dark-200 '>
                <FiUser/>个人简历
            </a>
            <div className='bg-gray-200 -mx-4 py-4 my-5 dark:bg-dark-200 '>
                <div className=' flex items-center justify-center space-x-2 '>
                    <GiPositionMarker/>
                    <span>中国,北京</span>
                </div>
                <p>邮箱：xxxxxxxxx@xx.com</p>
                <p>手机号：100820820</p>
            </div>
                                              {/*点击打开win的邮箱*/}
            <button className='an' onClick={()=>window.open('mailto:xxxxxxxxx@xx.com')}>我的邮箱</button>
            <button className='an' onClick={changeTheme} >主题切换</button>
        </>
    );
};

export default Sidebar;
