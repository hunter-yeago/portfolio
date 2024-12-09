
import Image from "next/image"
import hunterImage from '../../public/images/hunter-at-phptek.png';
import Link from "next/link";
export default function ProjectSection() {

return(
    <div className="max-w-[70vw] mx-auto mt-12
    md-custom:max-w-[60vw]">
    <h2 className='text-3xl text-center w-fit mx-auto mb-8'> PHP[TEK] 2024 </h2>
    <div className=" mx-auto bg-white p-4 rounded border-2 shadow min-h-[20rem]">
        
        <div className="flex flex-col gap-4 w-full
        md-custom:flex-row">
            
            <div className="relative">
                <figure className="relative object-cover h-full">
                    <Image className="object-cover h-full" src={hunterImage} alt="Picture of me at PHP TEK 2024"/>
                    <figcaption className="text-center absolute bottom-0 left-1 text-white"> Picture by Dwayne McDaniel</figcaption>
                </figure>
                
                
            </div>

                
            <div className="p-4 flex flex-col gap-4">
                <p className="text-gray-700"> I went to PHP[TEK] 2024, and here's my article about it , and here's my article about it! , and here's my article about it! , and here's my article about it! </p>
                <p className="text-gray-700"> I went to PHP[TEK] 2024, and here's my article about it , and here's my article about it! , and here's my article about it! , and here's my article about it!</p>
                <Link className='w-40 text-center bg-gray-800 text-white p-2 rounded-md hover:bg-yellow-600' href="/articles/php-tek-2024" target="_blank" rel="noopener noreferrer" aria-label="View my LinkedIn - opens in a new tab">Read Article</Link>
            </div>

        </div>

    </div>
    </div>
)
}