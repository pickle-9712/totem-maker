export default function Button({children, variant = "default", onClick}: {
    children: React.ReactNode, variant?: string, onClick?: () => void
}){
    let classes = "px-3 py-1 rounded-lg text-sm bg-blue-500 text-white"
    if(variant == "outline") {
        classes = "px-3 py-1 rounded-lg text-sm border border-gray-400"
    }
    if(variant === "danger") {
        classes = "px-3 py-1 rounded-lg text-sm bg-red-500 text-white"
    }
 
    return ( 
        <button
            className={classes}
            onClick={onClick}
        >
        {children}</button>
    )
}