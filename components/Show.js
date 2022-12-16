import React from 'react';

const Show = ({title,Icon,about}) => {
    const createMarkup=()=>{
        return{
            __html:about
        }
    }
    return (
        <div className='flex items-center p-2 space-x-4'>
            <Icon className='w-12 h-12 text-sky-400' />
            <div>
                <h4 className='font-bold'>{title}</h4>
                {/*将模拟数据中的标签转换*/}
                <p dangerouslySetInnerHTML={createMarkup()}/>
            </div>
        </div>
    );
};

export default Show;
