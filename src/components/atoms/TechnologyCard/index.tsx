import { Technologies } from '@/enums';

import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact, FaAngular } from "react-icons/fa";
import { SiJavascript , SiNextdotjs, SiTailwindcss, SiTypescript  } from 'react-icons/si';

const TechnologyCard = ({ technology }: { technology: Technologies }) => {

    const styles = {
        HTML: {
            bgColor: 'bg-orange-600',
            content: (
                <>
                    &lt; <FaHtml5 size={25} /> HTML /&gt;
                </>
            )
        },
        CSS: {
            bgColor: 'bg-blue-400',
            content: (
                <>
                    &lt; <FaCss3Alt size={25} /> CSS /&gt;
                </>
            )
        },
        JavaScript: {
            bgColor: 'bg-yellow-500',
            content: (
                <>
                    &lt; <SiJavascript  size={25} /> JavaScript /&gt;
                </>
            )
        },
        TypeScript: {
            bgColor: 'bg-blue-500',
            content: (
                <>
                    &lt; <SiTypescript  size={25} /> TypeScript /&gt;
                </>
            )
        },
        TailwindCSS: {
            bgColor: 'bg-teal-400',
            content: (
                <>
                    &lt; <SiTailwindcss size={25} /> TailwindCSS /&gt;
                </>
            )
        },
        NodeJS: {
            bgColor: 'bg-green-600',
            content: (
                <>
                    &lt; <FaNodeJs size={25} /> NodeJS /&gt;
                </>
            )
        },
        ReactJS: {
            bgColor: 'bg-cyan-400',
            content: (
                <>
                    &lt; <FaReact size={25} /> ReactJS /&gt;
                </>
            )
        },
        NextJS: {
            bgColor: 'bg-gray-800',
            content: (
                <>
                    &lt; <SiNextdotjs size={25} /> NextJS /&gt;
                </>
            )
        },
        Angular: {
            bgColor: 'bg-red-500',
            content: (
                <>
                    &lt; <FaAngular size={25} /> Angular /&gt;
                </>
            )
        }
    };

    return <div className={`
        flex items-center gap-2 ${styles[technology].bgColor} rounded-sm py-2 px-6 border border-r-3 border-b-3
        text-shadow-white hover:text-shadow-[0_0_10px_current] duration-200
    `}>
        {styles[technology].content}
    </div>
}

export default TechnologyCard