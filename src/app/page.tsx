import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Leaf from "@/components/Leaf";
import Gallery from "@/components/Gallery";
import Stickers from "@/components/Stickers";

export default function Home() {
  return (
    <main className="w-full">
      <Leaf/>
      <Navbar/>
      <Hero/>
      <Gallery/>
      <Stickers/>
    </main>
  );
}
