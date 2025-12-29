import React from 'react'

const TVComponent = ({ children }: { children: React.ReactNode }) => {
    return <div className="tv-tube-shape animate-[tv-animation_.5s]">
        <div className="site-content animate-[opacity-anim_1s]">
            { children }
        </div>
    </div>
}

export default TVComponent