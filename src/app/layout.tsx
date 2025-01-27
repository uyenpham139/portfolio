"use client";

import { useState } from "react";
import React from 'react';
import "./globals.css";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [language, setLanguage] = useState<'en' | 'vie'>('en'); // Manage the language state here

  const handleLanguageChange = (newLanguage: 'en' | 'vie') => {
    setLanguage(newLanguage); // Update the language state
  };
  
  console.log(language);

  return (
    <html lang={language}>
      <body>
        {/* Pass language state and handler to Header */}
        <Header language={language} onLanguageChange={handleLanguageChange} />
        {/* Pass language state to children */}
        {React.cloneElement(children as React.ReactElement, { language })}
        <Footer />
      </body>
    </html>
  );
}
