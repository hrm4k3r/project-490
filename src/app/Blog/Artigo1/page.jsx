import blog1 from "../../../../public/blog1.webp";
import ArticleLayout from "../../components/ArticleLayout";

const sections = [
  {
    body: "Seja em casa, no escritório ou no carro, os estofados são parte essencial do nosso dia a dia. No entanto, muitas vezes subestimamos a importância de manter esses locais limpos e higienizados. Descubra a seguir por que é crucial realizar a higienização dos estofados com frequência.",
  },
  {
    heading: "1. Saúde e Bem-Estar",
    body: "Os estofados acumulam poeira, ácaros e outras partículas que podem desencadear alergias e problemas respiratórios, afetando a saúde e o bem-estar de quem utiliza esses espaços. A higienização regular dos estofados ajuda a eliminar essas ameaças invisíveis, promovendo um ambiente mais saudável para todos.",
  },
  {
    heading: "2. Durabilidade e Conservação",
    body: "Além dos aspectos relacionados à saúde, a limpeza frequente dos estofados também contribui para a sua durabilidade e conservação. A remoção de sujeira, manchas e odores preserva a qualidade dos tecidos, estendendo a vida útil dos estofados e mantendo sua beleza por mais tempo.",
  },
  {
    heading: "3. Estética e Conforto",
    body: "Estofados limpos e bem cuidados não apenas são mais agradáveis visualmente, mas também proporcionam maior conforto para quem deles faz uso. A sensação de frescor e limpeza é inigualável, tornando os ambientes mais convidativos e acolhedores.",
  },
  {
    body: "Diante desses aspectos, fica evidente que a higienização regular dos estofados vai muito além de uma questão estética. Trata-se de um cuidado essencial para a saúde, o conforto e a preservação de um dos elementos mais presentes em nossas vidas cotidianas. Ao priorizar a manutenção dos estofados, estamos investindo no bem-estar de todos os que compartilham esses espaços.",
  },
];

export default function Artigo1() {
  return (
    <ArticleLayout
      image={blog1}
      title="A importância de cuidar dos estofados"
      subtitle="Saiba por que é tão importante realizar uma higienização dos estofados com frequência."
      sections={sections}
      closing="Não subestime a importância de cuidar dos estofados. Sua saúde, conforto e até mesmo a longevidade dos seus móveis agradecem!"
    />
  );
}
