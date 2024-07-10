
import Image from "next/image"
import hunterImage from '../../public/images/hunter-at-phptek.png';
export default function ProjectSection() {

return(
    <div className="w-4/5 mx-auto mt-12">
    <h2 className='text-3xl text-center w-fit mx-auto mb-8'> PHP[TEK] 2024 </h2>
    <div className=" mx-auto bg-white p-4 rounded shadow min-h-[20rem]">
        
        <div className="flex flex-row gap-4">
            
            <div className="relative max-w-80">
                <figure>
                    <Image src={hunterImage} alt="Picture of me at PHP TEK 2024"/>
                    <figcaption className="text-center"> Picture by Daryl</figcaption>
                </figure>
                
                
            </div>

                
            <div className="p-4 flex flex-col gap-4">
                <p className="text-gray-700"> I went to PHP[TEK] 2024, and here's my article about it , and here's my article about it! , and here's my article about it! , and here's my article about it! , and here's my article about it! , and here's my article about it!!  </p>
                <p className="text-gray-700"> I went to PHP[TEK] 2024, and here's my article about it , and here's my article about it! , and here's my article about it! , and here's my article about it! , and here's my article about it! , and here's my article about it!!  </p>
            </div>
        </div>

    </div>
    </div>
)
}