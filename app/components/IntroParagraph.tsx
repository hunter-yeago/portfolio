import React, { useEffect, useRef } from 'react';
import { annotate, annotationGroup } from 'rough-notation';

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
        <div className='flex flex-col items-center justify-center m-8 gap-4'>
            <h1 className='text-2xl'>Hello! I'm Hunter, a developer based in <span id="chicago">Chicago</span>.</h1>
            <p> I love building tools that are <span id="user-friendly">user-friendly,</span> simple, and <span id="delightful">delightful.</span></p> 
            <p className=''> I'm a web developer for Lettuce Entertain You, Chicago's largest restaurant company, where I manage and create new websites for <span id="70websites">70+ websites.</span></p>

            <div className='flex gap-4 mt-4'>
                <span id="linkedin" className='flex'><a className='bg-gray-800 text-white p-2 rounded-md hover:bg-yellow-600' href="https://www.linkedin.com/in/hunter-yeago/" target="_blank" rel="noopener noreferrer" aria-label="View my LinkedIn - opens in a new tab">View LinkedIn</a></span>
                <a className='bg-gray-800 text-white p-2 rounded-md hover:bg-yellow-600' href="https://github.com/hyradar" target="_blank" rel="noopener noreferrer" aria-label="View my Github - opens in a new tab">View Github</a>
            </div>
        </div>
    );
}

export default IntroParagraph;
