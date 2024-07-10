import React, { useEffect, useRef } from 'react';
import { annotate, annotationGroup } from 'rough-notation';

import Image from 'next/image';
import hunterHeadshot from '../../public/images/hunter-headshot.jpg';
import rainImage from '../../public/images/rain-image.jpg';

interface Annotation {
    id: string;
    type: 'underline' | 'highlight' | 'circle'; // Define types for annotation types
    color: string;
    padding?: [number, number];
}

const IntroParagraph: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null); // Use useRef with proper HTMLCanvasElement type

    useEffect(() => {
        const annotations: Annotation[] = [
            { id: 'chicago', type: 'highlight', color: '#7FBEEB' }, //blue
            { id: 'user-friendly', type: 'highlight', color: '#E4F0D0' }, //light green
            { id: 'delightful', type: 'highlight', color: '#FE938C' }, // light red
            { id: '70websites', type: 'highlight', color: '#C1D37F' }, //hunter green
            { id: 'linkedin', type: 'circle', color: 'red' }, //hunter green
            // Add more annotations as needed
        ];

        const annotationInstances = annotations.map(annotation => {
            const targetElement = document.getElementById(annotation.id);
            if (targetElement) {
                return annotate(targetElement, {
                    type: annotation.type,
                    color: annotation.color,
                    padding: annotation.padding
                });
            } else {
                console.error(`Target element with id '${annotation.id}' not found.`);
                return null;
            }
        }).filter(annotation => annotation !== null) as ReturnType<typeof annotate>[]; // Type assertion for annotationInstances

        const ag = annotationGroup(annotationInstances);
        ag.show();

        // Clean up function
        return () => {
            ag.hide(); // Hide annotations when component unmounts
        };
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <section className='flex flex-col items-center'>
            <div className='grid grid-rows mt-12 w-[80vw]
            md-custom:grid-cols-[70%,30%]'>

                {/* Left Side Info */}
                <div className="flex flex-col justify-center gap-4 pr-4">
                    <h1 className='text-4xl font-semibold'>Hello! I&#39;m Hunter, a developer based in <span id="chicago">Chicago</span>.</h1>
                    <p> I love building tools that are <span id="user-friendly">user-friendly,</span> simple, and <span id="delightful">delightful.</span></p> 
                    <p className="max-w-3xl"> I specialize in creating tools that are user-friendly, simple, and delightful. As a web developer at Lettuce Entertain You, Chicago's largest restaurant company, I manage and create new websites for over 70+ properties, ensuring each one is optimized for performance and user experience.</p>
                    <p className="max-w-3xl"> Beyond my technical expertise, My strong communication skills allow me to effectively convey complex technical concepts to non-technical stakeholders, fostering a collaborative and productive working environment.</p>
                    <p> I love building tools that are user-friendly, simple, and delightful.</p> 
                    
                    {/* Buttons */}
                    <div className='flex justify-center gap-4 mt-4
                    md-custom:justify-start'>
                        <span id="linkedin" className='flex'>
                            <a className='min-w-40 text-center bg-gray-800 text-white p-2 rounded-md hover:bg-yellow-600' href="https://www.linkedin.com/in/hunter-yeago/" target="_blank" rel="noopener noreferrer" aria-label="View my LinkedIn - opens in a new tab">View LinkedIn</a></span>
                            <a className='min-w-40 text-center bg-white text-black border border-gray-800 p-2 rounded-md hover:bg-yellow-600' href="https://github.com/hyradar" target="_blank" rel="noopener noreferrer" aria-label="View my Github - opens in a new tab">View Github</a>
                    </div>
                </div>

                <div className='hidden overflow-hidden rounded-xl
                md-custom:block'>
                    <Image className='scale-150 object-left h-full object-cover' src={rainImage} alt="Hunter Headshot" />
                </div>
            </div>
        </section>
    );
}

export default IntroParagraph;
