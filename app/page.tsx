"use client";
import Herobody from "@/components/hero";
import Image from "next/image";
import Catalog from "./(catalog)/catalog";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-full w-screen pb-20">
      <Herobody />
      <Catalog />
    </div>
  );
}
