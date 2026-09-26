"use client";

import { useState, useEffect } from "react";
import CardFerramenta from "../components/CardFerramenta";

interface Ferramenta{
    id: number,
    nome :string,
    descricao: string,
    imagem: string,
    url: string,
    estrelas: number,
};

export default function Home() {

  const [ferramentas, setFerramenta] = useState<Ferramenta[]>([]);
  const [toolkit, setToolkit] = useState(0);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("https://api.github.com/search/repositories?q=topic:cybersecurity&sort=stars&order=desc&per_page=6")
  .then(res => res.json())
  .then(data => {
    setFerramenta(
      data.items.map((item : any) => ({
        id: item.id,
        nome: item.name,
        descricao: item.descricao,
        imagem: item.owner.avatar_url,
        url: item.html_url,
        estrelas: item.stargazers_count
      }))
    ),
    setLoading(false)
  })
}, []);

const adicionarAoToolkit = () => {
  setToolkit((quantidade) => quantidade + 1)
};

return (
  <main className="max-w-6xl mx-auto p-8">
    <header className="mb-8 flex justify-between items-center border-b border-slate-800 pb-4">
      <div>
        <h1 className="text-3xl font-bold text-emerald-400">CyberLab</h1>
        <p className="text-slate-400 text-sm">Security Tools & Resources</p>
      </div>
      <div className="bg-slate-800 text-emerald-400 px-4 py-2 rounded-lg border border-slate-700">
        Toolkit: 
        <span className="font-bold text-emerald-400">{toolkit}</span>
      </div>
    </header>
  
    {loading ? "Carregando Ferramentas..." : null}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {
      ferramentas.map((ferramenta) => (
        <CardFerramenta
        key={ferramenta.id}
        // id={ferramenta.id}
        // nome = {ferramenta.nome}
        // descricao = {ferramenta.descricao}
        // imagem = {ferramenta.imagem}
        // url = {ferramenta.url}
        // estrelas = {ferramenta.estrelas}
        // onAdicionar = {adicionarAoToolkit}
        ferramenta={{ ...ferramenta, onAdicionar: adicionarAoToolkit }}
        />
      ))
      }
    {/* PASSO 9: usar .map() em 'ferramentas' para renderizar <CardFerramenta /> */}
    {/* PASSO 10: passar as props corretas, incluindo onAdicionar={adicionarAoToolkit} */}
    </div>
  </main>
  );
}
