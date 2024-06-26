import Header from "../componentes/header/header";
import DescricaoHomePag from "../componentes/descricao";
import Competencias from "../componentes/competencia";
import FormHome from "../componentes/formulario";
import Destaque from "../componentes/projetosEmDestaque";
import ExpProfissional from "../componentes/experienciaProfissional";
import ExpProfissionalPart2 from "../componentes/experienciaProfissionalPart2";


export default function Home() {
    return (
      <>
        <Header/>
        <DescricaoHomePag/>
        <Competencias/>
        <Destaque/>
        <ExpProfissional/>
        <ExpProfissionalPart2/>
        <FormHome/>
      </>
    )
  }