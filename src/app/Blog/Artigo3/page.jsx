import blog3 from "../../../../public/blog3.webp";
import ArticleLayout from "../../components/ArticleLayout";

const sections = [
  {
    body: "Você sabia que os estofados podem ser um verdadeiro paraíso para os ácaros, fungos e bactérias? Esses micro-organismos podem se proliferar em tecidos de estofados, desencadeando alergias, desconforto respiratório e afetando a qualidade do ar em casa ou no ambiente de trabalho. No entanto, a higienização adequada pode ser a solução para eliminar esses intrusos indesejáveis.",
  },
  {
    heading: "1. Combate aos Ácaros e Micro-organismos",
    body: "A higienização profissional de estofados é fundamental para a eliminação de ácaros, fungos, bactérias e outros micro-organismos que se alojam nas fibras do tecido. A remoção eficaz desses agentes alergênicos proporciona um ambiente mais saudável e seguro, especialmente para pessoas susceptíveis a problemas respiratórios.",
  },
  {
    heading: "2. Melhora da Qualidade do Ar",
    body: "Estofados higienizados contribuem significativamente para a melhora da qualidade do ar interior. Ao eliminar os ácaros e micro-organismos, a higienização ajuda a prevenir a dispersão de partículas alergênicas, promovendo um ambiente mais limpo e livre de agentes prejudiciais à saúde respiratória.",
  },
  {
    heading: "3. Prevenção de Alergias e Doenças Respiratórias",
    body: "A presença de ácaros e micro-organismos em estofados pode desencadear alergias e agravar condições respiratórias como rinite, asma e bronquite. Ao realizar a limpeza profunda dos estofados, é possível reduzir significativamente o risco de alergias e doenças respiratórias, protegendo a saúde e o bem-estar de todos que compartilham o ambiente.",
  },
  {
    heading: "4. Ambiente Mais Higiênico e Confortável",
    body: "Além dos benefícios para a saúde, a higienização de estofados proporciona um ambiente mais higiênico e agradável. A remoção de sujeiras, odores e micro-organismos contribui para a sensação de conforto e bem-estar, melhorando a experiência de estar em casa ou no escritório.",
  },
  {
    body: "Investir na higienização profissional de estofados é uma medida essencial para garantir um ambiente mais saudável e confortável, livrando-se dos ácaros e micro-organismos que podem comprometer a saúde e o bem-estar. Ao priorizar a eliminação desses intrusos, você estará promovendo um ambiente mais acolhedor, limpo e seguro para toda a família ou equipe de trabalho.",
  },
];

export default function Artigo3() {
  return (
    <ArticleLayout
      image={blog3}
      title="Eliminação de ácaros em estofados"
      subtitle="A higienização ajuda na eliminação de ácaros e outros micro-organismos como fungos e bactérias."
      sections={sections}
    />
  );
}
