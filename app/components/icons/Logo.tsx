export default function Logo({width, height}: {width: number, height: number}){
    return (
        <svg width={width} height={height} viewBox="0 0 94 84" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_114_24)">
            <path fillRule="evenodd" clipRule="evenodd" d="M84.2392 65.5L53.0623 11.5C50.368 6.83333 43.6322 6.83334 40.9379 11.5L9.76098 65.5C7.06668 70.1667 10.4346 76 15.8231 76H78.177C83.5656 76 86.9335 70.1667 84.2392 65.5ZM59.9905 7.5C54.217 -2.49999 39.7832 -2.50001 34.0097 7.49999L2.83278 61.5C-2.94072 71.5 4.27614 84 15.8231 84H78.177C89.724 84 96.9409 71.5 91.1674 61.5L59.9905 7.5Z" fill="#41F9A1"/>
            </g>
            <defs>
            <filter id="filter0_i_114_24" x="0.800781" y="0" width="92.3984" height="84" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="26.8"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.254902 0 0 0 0 0.976471 0 0 0 0 0.631373 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_114_24"/>
            </filter>
            </defs>
        </svg>
    )
}