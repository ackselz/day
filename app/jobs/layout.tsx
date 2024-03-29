"use client"
import Timer from "@/components/Timer";
import React, {useState, useEffect} from 'react'
import AbandonButton from "@/components/AbandonButton";
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <main className="min-h-screen flex flex-col">
            <AbandonButton/>
            {children}
        </main>
    );
}
