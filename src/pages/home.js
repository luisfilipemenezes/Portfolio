import Header from "../componentes/header/header";
import DescricaoHomePag from "../componentes/descricao";
import Competencias from "../componentes/competencia";
import FormHome from "../componentes/formulario";
import Destaque from "../componentes/projetosEmDestaque";
import ExpProfissional from "../componentes/experienciaProfissional";

export default function Home() {
    return (
      <>
        <Header/>
        <DescricaoHomePag/>
        <Competencias/>
        <Destaque/>
        <ExpProfissional/>
        <FormHome/>
      </>
    )
  }