import { Hero } from "app/components/home/Hero";
import { Description } from "../components/home/Description";
import { MainProducts } from "../components/home/MainProducts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
