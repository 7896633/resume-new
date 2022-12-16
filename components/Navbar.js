import React from 'react';
import {useRouter} from "next/router";
import Link from "next/link";

const Navbar = () => {

    // next中的路由
    const router=useRouter()
    return (
        <div className='py-3 my-3 flex items-center justify-center '>
            <div className='flex space-x-16 '>
                              {/*将路由作为路径          对应的路由会有红色下划线*/}
                <p className={`${router.asPath === '/'?'nav':''} navs`}>
                    <Link href='/'>简介</Link>
                </p>
                <p className={`${router.asPath === '/resume'?'nav':''} navs`}>
                    <Link href='/resume'>简历</Link>
                </p>
                <p className={`${router.asPath === '/projects'?'nav':''} navs`}>
                    <Link href='/projects'>项目</Link>
                </p>
            </div>
        </div>
    );
};

export default Navbar;
