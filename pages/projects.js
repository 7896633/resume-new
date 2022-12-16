// 项目页面
import {projects} from "../data";
import ProjectCard from "../components/ProjectCard";
import {useState} from "react"
import {motion} from 'framer-motion'
import {stagger, fadeInUp, routeAnimation} from "../animations";


const Projects = () => {
    const [showDetail, setShowDetail] = useState(null);
    const [items, setItems] = useState(projects);
    // 让projects等于items
    const filterItem =(categItem)=>{
        const updatedItems=projects.filter((nav)=>{
            return nav.category ===categItem
        })
        setItems(updatedItems)
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
            <div className='px-3 py-2 space-x-3 overflow-x-auto list-none'>
                <button onClick={()=>setItems(projects)}>全部</button>
                <button onClick={()=>filterItem('react')}>React</button>
                <button onClick={()=>filterItem('next.js')}>Next.js</button>
                <button onClick={()=>filterItem('node.js')}>Node.js</button>
            </div>
            <motion.div
                variants={stagger}
                animate='animate'
                initial='initial'
                className='relative grid grid-cols-12 gap-4 my-3 '
            >
                {/*内容分组*/}
                {items.map((project) => (
                    <motion.div
                        variants={fadeInUp}
                        className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                        key={items.name}>
                        <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;