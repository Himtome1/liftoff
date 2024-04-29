"use client"

interface ButtonProps {
    callback: () => void
    text: string
    color: string
    }

interface InputProps {
    placeholder: string
    onChange: Function
    }

export  function Button({callback, text, color}:ButtonProps){

    var textColor = `text-black`

    if(color !== "white"){textColor = `text-white`}

    var tailwindColors = `bg-${color}-500`
    var tailwindHoverColors = `hover:bg-${color}-700`

    if (color === "white") {
        tailwindColors = `bg-white border-gray-200 border`
        tailwindHoverColors = `hover:border-gray-300`
    }
    if (color === "black") {
        tailwindColors = `bg-black border`
        tailwindHoverColors = `hover:bg-gray-800`
    }

    const style = `${tailwindColors} ${tailwindHoverColors} ${textColor} text-sm rounded-md`

    return (
        <button onClick={callback} className={style} style={{width: "400px", height: "40px"}}>
            {text}
        </button>
    )
}

export function Line({color, text}: {color: string, text:string} ) {

    const lineColor = `border-${color}-500`
    const textColor = `text-${color}-500 text-sm font-light`
    return (
        <div className={`flex w-full ${textColor} items-center`}>
            <div className={`border-t-2 ${lineColor} w-1/2 mr-2`}/>
                <p>{text}</p>
            <div className={`border-t-2 ${lineColor} w-1/2 ml-2`}/>
        </div>
    )
}

export function Input({placeholder, onChange}: InputProps) {
    return (
        
        <input onChange={(e)=>onChange(e)} placeholder={placeholder} className="border border-gray-200 font-light text-sm rounded-md" style={{width:"400px", height:"40px"}}/>
    )
}