// 淡入（内容用 map内不用initial和animate）
export const fadeInUp={
    initial:{
        opacity:0,
        y:60,
    },
    animate:{
        opacity: 1,
        y:0,
    }
}
// 错开出现（内容容器用）
export const stagger={
    initial: {},
    animate: {
        transition:{
            staggerChildren:0.1,
        }
    }
}
// 动画路线(主体用)
export const routeAnimation={
    initial: {
        opacity:0
    },
    animate: {
        opacity:1,
        transition:{
            delay:0.1,
            duration:0.1
        }
    },
    exit:{
        opacity:0,
        transition:{
            delay: 0.1,
            ease:'easeInOut'
        }
    }
}