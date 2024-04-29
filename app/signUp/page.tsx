"use client"

import {Button, Line, Input} from "@/components/UIComponents"
import {useState, useEffect} from "react"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword,getAuth, onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/firebase"




export default function Page() {

  const router = useRouter()
  const authenticated = getAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push("/onBoarding")
    } else {
    }
  })

  const emailChange = (e: any) => {
    setEmail(e.target.value)
  
  }
  const passwordChange = (e: any) => {
    setPassword(e.target.value)
  }

  const signUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
    }
      
  catch (error) {
    console.log(error)
  }
  }

 
  return (
    <div className="w-screen h-screen bg-white flex">
      <div className = "w-3/5 h-screen flex items-center justify-center">
        
        <div style={{width:"400px"}}className=" flex flex-col items-center justify-evenly space-y-6 text-black font-semibold text-4xl">
 
          <div className="mb-5"><h1>Your dream job awaits</h1></div>
          <Button text="Continue with Google" color="white" callback={() => console.log("Button clicked")}/>

         <Line text="or" color="gray"/>

          <Input placeholder=" Email address" onChange={emailChange}/>
          <Input placeholder=" Password" onChange={passwordChange}/>

          <Button text="Sign up" color="black" callback={signUp}/>

          <div className="font-light text-sm text-gray-500 flex w-full flex-col space-y-2">
            
              <div  className="flex space-x-1"><p>Have an account? </p> <a href="/signIn" className="text-blue-500">Sign in here.</a></div>
              <div className="flex flex-col">
                <p>By signing up, you agree to our <a href="#" className="text-blue-500">Terms of Service</a> and <a href="#" className="text-blue-500">Privacy Policy</a></p>
              </div>


            
          </div>
          

        </div>

      </div>

      <div className="w-2/5 h-screen bg-gray-100">

      </div>

    </div>
  )
}