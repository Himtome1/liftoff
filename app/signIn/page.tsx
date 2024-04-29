"use client"

import {Button, Line, Input} from "@/components/UIComponents"



export default function Page() {
  return (
    <div className="w-screen h-screen bg-white flex">
      <div className = "w-3/5 h-screen flex items-center justify-center">
        

        <div className=" flex flex-col items-center justify-evenly space-y-6 text-black font-bold text-4xl">
          <div className="flex"><h1>Your dream job awaits</h1></div>
          <Button text="Continue with Google" color="white" callback={() => console.log("Button clicked")}/>

         <Line text="or" color="gray"/>

          <Input placeholder="Email" onChange={() => console.log("Input changed")}/>
          <Input placeholder="Password" onChange={() => console.log("Input changed")}/>

          <Button text="Sign up" color="black" callback={() => console.log("Button clicked")}/>
          

        </div>

      </div>

      <div className="w-2/5 h-screen bg-gray-100">

      </div>

    </div>
  )
}