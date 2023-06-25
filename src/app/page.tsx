"use client";
import { Navbar } from "@/components/Navbar/Navbar";
import { Hero } from "@/components/Hero/Hero";
import { container } from "../../styled-system/patterns";

import { Contact } from "@/components/Contact/Contact";
import { Products } from "@/components/Products/Products";
import { Footer } from "@/components/Footer/Footer";
import { useRef } from "react";

export default function Home() {
  const productsRef = useRef<HTMLDivElement | null>(null);

  const viewProducts = () => {
    productsRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navbar viewProducts={viewProducts} />
      <Hero viewProducts={viewProducts} />
      <Contact />
      <Products ref={productsRef} />
      <Footer />
    </main>
  );
}
