import React from 'react'

const data = [
    {
        title: "React",
    },
    {
        title: "Next.js",
    },
    {
        title: "Typescript",
    },
    {
        title: "Nest.js",
    },
    {
        title: "PostgreSQL",
    },
    {
        title: "Tailwindcss",
    },
    {
        title: "Figma",
    },
    {
        title: "Cypress",
    },
    {
        title: "Storybook",
    },
    {
        title: "Git",
    },
];

function Software({toggleDarkMode}) {
    return (
        <div className='lg:py-1 lg:px-5 flex flex-wrap'>
            {
                data.map(({ title }, index) => (
                    <div key={index} toggleDarkMode={toggleDarkMode} className='m-2 p-2 bg-[#e6e7eb] dark:bg-[#374151] text-[#b3b7bf] rounded-lg'>
                        {title}
                    </div>
                ))
            }
        </div>
    )
}

export default Software

