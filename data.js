import {DiJavascript, DiNodejsSmall,} from "react-icons/di";
import {TbBrandNextjs} from "react-icons/tb";
import {SiAdobecreativecloud, SiMongodb,} from "react-icons/si";
import {RiComputerLine} from "react-icons/ri";
import {BsCircleFill} from "react-icons/bs";

//模拟的数据

export const shows=[
    {
        Icon: RiComputerLine,
        title: "前端基础",
        about:
            "熟练 <b>HTML</b>、<b>CSS</b>、<b>JavaScrip</b> ",
    },
    {
        Icon: TbBrandNextjs,
        title: "前端框架",
        about: "熟练 <b>Tailwind css</b>、<b>Next.js</b>",
    },
    {
        Icon: DiJavascript,
        title: "JavaScrip库",
        about:
            "熟练 <b>Recoil</b>、<b>Axios</b>、<b>React</b>",
    },
    {
        Icon: DiNodejsSmall,
        title: "后端开发",
        about:
            "了解 <b>javaSE</b>、<b>Express.js</b>",
    },
    {
        Icon: SiAdobecreativecloud,
        title: "Ui/Ux",
        about:
            "熟练 <b>Ai</b> 、 <b>Ps</b>、<b>Figma</b>",
    },

    {
        Icon: SiMongodb,
        title: "数据库",
        about: "了解 <b>MongoDB</b>、<b>Firebase</b>",
    },
];

// 编程语言
export const languages=[
    {
        Icon: BsCircleFill,
        name: "ES6",
        level: "65%",
    },
    {
        Icon: BsCircleFill,
        name: "Node.js",
        level: "45%",
    },
    {
        Icon: BsCircleFill,
        name: "java",
        level: "35%",
    },
    {
        Icon: BsCircleFill,
        name: "Tailwind CSS",
        level: "90%",
    },
    {
        Icon: BsCircleFill,
        name: "Next.js",
        level: "75%",
    },
    {
        Icon: BsCircleFill,
        name: "React.js",
        level: "60%",
    },
];

// 设计工具
export const tools = [
    {
        Icon: BsCircleFill,
        name: "Premiere Pro",
        level: "75%",
    },
    {
        Icon: BsCircleFill,
        name: "Photoshop",
        level: "85%",
    },
    {
        Icon: BsCircleFill,
        name: "Illustrator",
        level: "55%",
    },
    {
        Icon: BsCircleFill,
        name: "Figma",
        level: "65%",
    },
];

// 项目
export const projectsData=[
    {
        id:1,
        name: "企业网站",
        image_path: "/img3.png",
        git_path:'https://github.com/',
        deployed_url: "https://www.bilibili.com/",
        category:"react.js",
        description:
            "企业网站",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
    {
        id:2,
        name: "房产系统",
        image_path: "/img4.png",
        git_path:'https://github.com/',
        deployed_url: "https://www.bilibili.com/",
        category:"react.js",
        description:
            "忘记密码，资料编辑，列表创建，轮播图展示",
        key_techs: ["React", "tailwindcss","firebase"],
    },
    {
        id:3,
        name: "实时通讯",
        image_path: "/img5.png",
        git_path:'https://github.com/',
        deployed_url: "https://www.bilibili.com/",
        category:"node.js",
        description:
            "互相聊天，群聊，好友添加",
        key_techs: ["Express", "MongoDB", "Node","react"],
    },
    {
        id:4,
        name: "文章发布功能",
        image_path: "/img6.png",
        git_path:'https://github.com/',
        deployed_url: "https://www.bilibili.com/",
        category:"next.js",
        description:
            "文章发布和查看别人的文章",
        key_techs: ["firebase", "Next js","tailwindcss"],
    },
    {
        id:5,
        name: "旅游网站",
        image_path: "/img7.png",
        git_path:'https://github.com/',
        deployed_url: "https://www.bilibili.com/",
        category:"next.js",
        description:
            "选择日期和班次",
        key_techs: ["React", "firebase","tailwindcss"],
    },
    {
        id:6,
        name: "音乐播放",
        image_path: "/img8.png",
        git_path:'https://github.com/',
        deployed_url: "https://www.bilibili.com/",
        category:"next.js",
        description:
            "音乐查找与播放功能",
        key_techs: [
            "Next js", "Next auth","tailwindcss","spotify"
        ],
    },
    {
        id:7,
        name: "商城",
        image_path: "/img9.png",
        git_path:'https://github.com/',
        deployed_url: "https://www.bilibili.com/",
        category:"react.js",
        description:
            '实现商品展示和购物车功能',
        key_techs: [
            "React", "Redux",
        ],
    },

    {
        id:8,
        name: "评论功能",
        description: "实现评论功能:删除和点赞功能",
        image_path: "/img14.png",
        git_path:'https://github.com/',
        deployed_url: "https://www.bilibili.com/",
        category:"next.js",
        key_techs: ["firebase", "Next js", "Next auth","tailwindcss"],
    },
]