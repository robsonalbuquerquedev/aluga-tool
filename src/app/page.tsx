// src/app/page.tsx

'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHammer, FaTools, FaHardHat, FaCogs } from "react-icons/fa";

export default function Home() {
  const categorias = [
    { nome: "Elétricas", icon: <FaTools size={24} /> },
    { nome: "Manuais", icon: <FaHammer size={24} /> },
    { nome: "EPI", icon: <FaHardHat size={24} /> },
    { nome: "Construção", icon: <FaCogs size={24} /> },
    { nome: "Automotivas", icon: <FaTools size={24} /> },
    { nome: "Medição", icon: <FaCogs size={24} /> },
    { nome: "Jardim", icon: <FaHammer size={24} /> },
    { nome: "Máquinas", icon: <FaTools size={24} /> },
    { nome: "Solda", icon: <FaCogs size={24} /> },
    { nome: "Acessórios", icon: <FaTools size={24} /> },
  ];

  return (
    <main className="min-h-screen px-4 md:px-12 py-12 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"
            alt="Logo AlugaTool"
            width={100}
            height={100}
          />
        </div>
        <h1 className="text-4xl font-bold mb-2">AlugaTool</h1>
        <p className="text-lg text-gray-600">
          Sua ferramenta, sua renda. AlugaTool!
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/cadastro"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Cadastrar ferramenta
          </Link>
          <Link
            href="/buscar"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-medium transition"
          >
            Procurar ferramenta
          </Link>
        </div>
      </motion.section>

      {/* Como funciona */}
      <motion.section
        className="mb-16 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Como funciona?</h2>
        <p className="text-gray-700 leading-relaxed">
          Cadastre suas ferramentas que estão paradas e ganhe uma renda extra!
          Ou alugue facilmente uma ferramenta para aquele conserto pontual, sem precisar comprar algo que você vai usar uma vez só.
        </p>
      </motion.section>

      {/* Categorias */}
      <motion.section
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Categorias</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categorias.map((cat, idx) => (
            <motion.div
              key={cat.nome}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-xl p-5 flex flex-col items-center justify-center text-center transition cursor-pointer"
            >
              <div className="mb-2 text-red-600">{cat.icon}</div>
              <p className="text-gray-800 font-medium">{cat.nome}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
