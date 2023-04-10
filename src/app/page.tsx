import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "@/components/ui/button";
import { db } from "../lib/db";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
  await db.set("hello", "hello");
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      Home
      <Button size="lg" variant="ghost">
        hello
      </Button>
    </main>
  );
}
