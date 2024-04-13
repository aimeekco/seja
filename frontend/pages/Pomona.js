import { createContext } from 'react';

export const MyContext = createContext(null);
import Image from "next/image"
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// function LoginForm() {
//   return (
//     <Card className="w-full max-w-sm">
//       <CardHeader>
//         <CardTitle className="text-2xl">Pomona Room Draw</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4">
//         <div className="grid gap-2">
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" type="email" placeholder="m@example.com" required />
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="password">Password</Label>
//           <Input id="password" type="password" required />
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Button className="w-full">Sign in</Button>
//       </CardFooter>
//     </Card>
//   );
// }

export default function Pomona() {
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

      <LoginForm />  {/* This line integrates the LoginForm in the view */}

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