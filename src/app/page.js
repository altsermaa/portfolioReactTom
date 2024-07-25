"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Section1Hi from "@/components/Section1Hi.js";
import Section2About from "@/components/Section2About";
import { Skills } from "@/components/Section3Skill"
import Section4Experience from "@/components/Section4Experience";
import Section5Work from "@/components/Section5Work";
import Section6Contact from "@/components/Section6Contact";
import Section7Footer from "@/components/Section7Footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
  }

  return (
    <div className={isDark ? "dark" : ""}>
      <Section1Hi toggleDarkMode={handleClick} isDark={isDark} />
      <Section2About toggleDarkMode={handleClick}/>
      <Skills toggleDarkMode={handleClick}/>
      <Section4Experience toggleDarkMode={handleClick}/>
      <Section5Work toggleDarkMode={handleClick}/>
      <Section6Contact toggleDarkMode={handleClick}/>
      <Section7Footer toggleDarkMode={handleClick}/>
    </div>

  );
}

