"use client"
import {auth} from "@/lib/firebase"
import { getAuth } from "firebase/auth"
import { useState } from "react"

export default function Page() {

    const authenticated = getAuth()

    if (authenticated.currentUser) {
        return(
            <div className="flex w-screen text-sm justify-between">
                <div>
                <h1>Welcome {authenticated.currentUser.email}</h1>
                <button onClick={() => auth.signOut()}>Sign Out</button>
                </div>
            </div>
        )
    }
    
}