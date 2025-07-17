// components/Header.tsx

'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Logo" width={40} height={40} />
                    <span className="font-bold text-xl text-red-600">AlugaTool</span>
                </Link>

                <div className="md:hidden">
                    <button onClick={() => setOpen(!open)}>
                        {open ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>

                <nav className="hidden md:flex items-center gap-6 text-gray-800 font-medium">
                    <Link href="/">Início</Link>
                    <Link href="/buscar">Buscar</Link>
                    <Link href="/cadastro">Cadastrar</Link>
                </nav>
            </div>

            {/* Mobile Menu */}
            {open && (
                <nav className="md:hidden bg-white px-6 py-4 space-y-3 border-t border-gray-200">
                    <Link href="/" onClick={() => setOpen(false)}>Início</Link>
                    <Link href="/buscar" onClick={() => setOpen(false)}>Buscar</Link>
                    <Link href="/cadastro" onClick={() => setOpen(false)}>Cadastrar</Link>
                </nav>
            )}
        </header>
    );
}
