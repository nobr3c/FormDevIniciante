import ProdutoItem from "@/components/produto/ProdutoItem";
import { produtos } from "@/core";


export default function Inicio() {
  return (
    <div className="flex gap-5 flex-wrap container">
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} />
      ))}
    </div>
  )
}
