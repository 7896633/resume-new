// 项目页面

import ProjectCard from "../components/ProjectCard";
import {useEffect, useState} from "react"
import {motion} from 'framer-motion'
import {stagger,routeAnimation} from "../animations";
import {projectsData} from "../data";

const projectsNav=[
    {name:"全部"},
    {name:"Next.js"},
    {name:"React.js"},
    {name:"Node.js"}
]
const Projects = () => {
    // 这是初始值，没修改item的时候item值就是这个
    const [item,setItem]=useState({name:'全部'})
    const [projects,setProjects]=useState([])
    const [active,setActive]=useState(0)
    const [showDetail, setShowDetail] = useState(null)


    useEffect(()=>{
        // 如果item里面的name值='全部',
        if (item.name==='全部'){
            // 那么就会渲染projectsData（大概意思就是点击了之后会显示projectsData里面的值）
            setProjects(projectsData)
        }else {
            // 如果不等于，则projectsData会过滤一些
            console.log('2')
            const newProjects=projectsData.filter(
                (project)=>{
                    // 返回projectsData里的category值且首字母大写 =item.name 这里的item.name是下面setItem的值
                    return project.category.toLowerCase() === item.name
                })
            console.log(item)
            setProjects(newProjects)
        }},[item])

    const handleClick=(e,index)=>{
        console.log('1')
        // name：所点击的值里文本（比如点击react.js，文本值就是react.js）
        setItem({name: e.target.textContent.toLowerCase()})
        // 这个是为了确定点击的是哪个序列
        setActive(index)
    }

    return (
        <motion.div
            animate='animate'
            initial='initial'
            exit='exit'
            variants={routeAnimation}
            // 滚动条样式
            className='px-5 py-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-300  scrollbar-track-sky-100"'
            style={{ height: "65vh"}}
        >
            <div className='px-3 py-2 space-x-3 overflow-x-auto flex '>
                {projectsNav.map((item,index)=>(
                    <div
                        key={item.name}
                        onClick={(e)=>{handleClick(e,index)}}
                        className={`${active === index ?'text-orange-500 font-[600]':''} hover:text-red-500 cursor-pointer`}>
                        {item.name}
                    </div>
                ))}
            </div>
            <motion.div
                variants={stagger}
                animate='animate'
                initial='initial'
                className='relative grid grid-cols-12 gap-4 my-3 '
            >
                {/*内容分组*/}
                {projects.map((item,index) => (
                    <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4"
                         key={item.name}>
                        <ProjectCard item={item} showDetail={showDetail} setShowDetail={setShowDetail}/>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;