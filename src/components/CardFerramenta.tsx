import Image from "next/image";
import Link from "next/link";

interface FerramentaProps {
    id: number,
    nome :string,
    descricao: string,
    imagem: string,
    url: string,
    estrelas: number,
    onAdicionar: () => void
}
export default function CardFerramenta({ferramenta} : {ferramenta : FerramentaProps}) {
return (

<div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden shadow-md flex flex-col justify-between hover:border-emerald-500
transition-all duration-300">
    <div className="bg-white p-4 flex items-center justify-center h-32 relative">
        <Image
        src={ferramenta.imagem}
        alt="Logo da ferramenta"
        fill
        className="object-contain p-2"
        />
    </div>
    <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
        <div>
            <span className="text-xs uppercase font-semibold text-emerald-400 tracking-wider">
            ⭐ {ferramenta.estrelas}
            </span>
            <h2 className="font-bold text-white text-lg line-clamp-2 mt-1">
                {ferramenta.nome}
            </h2>
            <p className="text-slate-400 text-sm line-clamp-2 mt-2">
                {ferramenta.descricao}
            </p>
        </div>
        <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
        <Link href={`/ferramenta/${ferramenta.id} className="text-xs- text-emerald-400 underline"`}>
            Ver Detalhes
        </Link>
            <button
            onClick={() => {
            ferramenta.onAdicionar()
            }}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-3 py-2 rounded-lg transition"
            >
                Adicionar ao Toolkit
            </button>
        </div>
    </div>
</div>
);
}
