// PASSO 1: tipar as props da página. No App Router, o componente
// recebe um objeto com 'params', e params.id é o valor da URL.
// Dica de tipagem: { params }: { params: { id: string } }
// PASSO 2: fazer o fetch do repositório específico usando o id
// Endereço: https://api.github.com/repositories/{id}
// (esse endpoint da API do GitHub busca um repositório pelo ID numérico)
interface PageProps{
    params: Promise<{id:string}>
};

interface RepoData{
    name: string,
    description: string,
    stargazers_count:number,
    html_url:string,
};

export default async function DetalheFerramenta({params} : PageProps) {

let repo : RepoData | null = null;
const { id } = await params;
try{
    const req = await fetch(`https://api.github.com/repositories/${id}`);

    if(!req.ok)
    {
        throw new Error(`Erro HTTP! Status: ${req.status}`)
    }

    repo = await req.json() as RepoData;
}
catch(erro)
{
    console.error(`Repositório não encontrado`)
}

return (
  <main className="max-w-3xl mx-auto p-8 text-white">
    <a href="/" className="text-emerald-400 text-sm underline">
      ← Voltar
    </a>

    <div className="mt-6 bg-slate-800 border border-slate-700 rounded-xl p-6">
      <div className="flex items-center justify-between">
        {/* TODO ALUNA: exibir o nome do repositório aqui */}
        <h1 className="text-2xl font-bold text-white">{repo?.name}</h1>

        {/* TODO ALUNA: exibir a quantidade de estrelas aqui */}
        <span className="text-sm font-semibold text-emerald-400">
          ⭐ 0
        </span>
      </div>

      {/* TODO ALUNA: exibir a descrição aqui */}
      <p className="text-slate-400 text-sm mt-4">
        {repo?.description}
      </p>

      <div className="mt-6 pt-4 border-t border-slate-700">
        

          <a href={repo?.html_url}
          target="_blank"
          className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          Ver no GitHub
        </a>
      </div>
    </div>
  </main>
);
}
