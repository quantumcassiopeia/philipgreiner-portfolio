export interface Project {
  id: number;
  title: string;
  category: string[];
  coauthors?: string[];
  description: string;
  cardCover: string;
  projectCover: string;
  images: string[];
  link: string;
}

const generateProjectPath = (id: number) => ({
  id: id,
  cardCover: `/projects/${id}/cardCover.avif`,
  projectCover: `/projects/${id}/projectCover.avif`,
  link: `/projects/${id}`,
});

export const projects: Project[] = [
  {
    title: "Revista Desvio",
    category: ["Editorial", "Identidade Visual"],
    coauthors: ["Yuji Romar"],
    description:
      "A revista Desvio é um projeto editorial moderno e criativo que tem como proposta ser um veículo para a arte contemporânea brasileira que circula fora da cena principal, divulgando o trabalho de jovens artistas. ​ \n\n Para melhor expressar a proposta, usamos como referência principal publicações independentes e livros de artista usualmente feitos por artistas gráficos para divulgar seu trabalho. ​ \n\n A identidade visual foi baseada no equilíbrio e relação de formas simples, mas cercada de cores marcantes, pensando harmonias dinâmicas, vivas e em movimento.",
    images: [
      "/projects/1/image1.avif",
      "/projects/1/image2.avif",
      "/projects/1/image3.avif",
    ],
    ...generateProjectPath(1),
  },
  {
    id: 2,
    title: "Satyricon",
    category: ["Projeto Gráfico", "Editorial"],
    description:
      "Projeto gráfico para uma edição comemorativa de aniversário do livro Satyricon, uma obra da literatura latina de autoria do prosador romano Petrônio, escrita durante o ano 60 D.C. O projeto gráfico tem como base o arranjo tipográfico que faz alusão aos episódios frenéticos e caricatos narrados ao longo do livro.",
    cardCover: "/projects/2/projectCover.avif",
    projectCover: "/projects/2/projectCover.avif",
    images: [
      "/projects/1/image1.avif",
      "/projects/1/image2.avif",
      "/projects/1/image3.avif",
    ],
    link: "/projects/2",
  },
];
