export default function BlogTitle(props) {
    return (
        <>
            <h1 className='text-5xl font-extrabold mb-6'>{props.title}</h1>
            <div className='flex flex-row gap-4 items-center mb-4'>
                <div className='border-2 border-black rounded-full overflow-hidden p-1'>
                    <svg width={35} height={35} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" /></svg>
                </div>
                <div className='flex items-start justify-between flex-col'>
                    <h1 className='font-bold text-default text-lg'>{props.writer}</h1>
                    <h1 className='text-xs text-gray-600'>{props.date} - <span className='bg-red-400 rounded-full text-xs px-1 font-semibold text-black'>{props.category}</span></h1>
                </div>
            </div>
        </>
    )
}