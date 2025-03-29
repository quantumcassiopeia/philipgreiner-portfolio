export interface Project {
  id: number;
  title: string;
  category: string[];
  coauthors?: string[];
  description: string;
  cardCover?: string;
  projectCover: string;
  images?: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Revista Desvio",
    category: ["Editorial", "Identidade Visual"],
    coauthors: ["Yuji Romar"],
    description:
      "A revista Desvio é um projeto editorial moderno e criativo que tem como proposta ser um veículo para a arte contemporânea brasileira que circula fora da cena principal, divulgando o trabalho de jovens artistas. ​ \n\n Para melhor expressar a proposta, usamos como referência principal publicações independentes e livros de artista usualmente feitos por artistas gráficos para divulgar seu trabalho. ​ \n\n A identidade visual foi baseada no equilíbrio e relação de formas simples, mas cercada de cores marcantes, pensando harmonias dinâmicas, vivas e em movimento.",
    projectCover: "/projects/1/projectCover.avif",
    link: "/projects/1",
  },
];
