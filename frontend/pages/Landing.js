'use client';
import {useState} from 'react'
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import '../styles/landing.css'


function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Check the 'message' property of the response data
      if (data.message === 'Login successful') {
        // Redirect to UserInfo page on success
        console.log(data.message);
        router.push('/Pomona');
      } else {
        // Redirect to Error page on failure
        console.log("bad pass");
        setError('Login Failed');
        setEmail("");
        setPassword("");
        return;
        //router.push('/Error');
      }
    })
    .catch((error) => {
      setError('An unknown error occurred');
      console.error('Error:', error);
      // Redirect to Error page on error
      //router.push('/Error');
    });
}
  return (
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              className="text-white text-opacity-20" 
              placeholder="janedoe@mymail.pomona.edu"
              required
              value={email} onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input id="password" type="password" required 
            value={password} onChange={e => setPassword(e.target.value)}
            />
          </div>
          {/* <Link href="/UserInfo">
            <Button type="submit" className="w-full">
              Login
            </Button>
          </Link> */}
          <Button type="submit" className="w-full" onClick={handleSubmit}>
            Login
          </Button>
          <div className="error-container">
            {error && <p className="error">{error}</p>}
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/CreateAccount" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
      </div>

      <LoginForm />  
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/pomona.jpg"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
