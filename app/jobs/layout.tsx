"use client"
import Timer from "@/components/Timer";
import React, {useState, useEffect} from 'react'
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen flex flex-col">
            {children}
            <Timer/>
        </main>
    );
}
