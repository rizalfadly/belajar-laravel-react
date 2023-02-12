import { Link, Head } from '@inertiajs/react';

export default function homepage (props) { 
    console.log(props)
    return (
        <div className='flex justify-center items-center min-h-screen bg-slate-50'>
            <Head title ={props.title}/>
            <div>
            <p>{props.desciption}</p>
            {props.news ? props.news.map(( data, i) => {
                return (
                    <div key={i} className='p-4 m-2 bg-teal-300 text-black shadow-md border'>
                        <p className='text-2xl'>{data.title}</p>
                        <p>{data.description}</p>
                        <p className='text-sm'>{data.category}</p>
                        <p className='text-sm'>{data.author}</p>
                    </div>
                )
            }) : <p>saat ini belum ada berita</p> }
        </div>
        </div>
    )
}