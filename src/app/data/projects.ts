export interface Project {
  id: number;
  title: string;
  category: string[];
  coauthors?: string[];
  description: string;
  cover: string;
  images: string[];
  link: string;
}

const generateProjectPath = (id: number) => ({
  id: id,
  cover: `/projects/${id}/cover.avif`,
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
    title: "Satyricon",
    category: ["Projeto Gráfico", "Editorial"],
    description:
      "Projeto gráfico para uma edição comemorativa de aniversário do livro Satyricon, uma obra da literatura latina de autoria do prosador romano Petrônio, escrita durante o ano 60 D.C. O projeto gráfico tem como base o arranjo tipográfico que faz alusão aos episódios frenéticos e caricatos narrados ao longo do livro.",
    images: [
      "/projects/1/image1.avif",
      "/projects/1/image2.avif",
      "/projects/1/image3.avif",
    ],
    ...generateProjectPath(2),
  },
  {
    title: "16º Festival de Frutos do Mar de Rio das Ostras",
    category: ["Divulgação"],
    description:
      "O projeto visual veio da necessidade de divulgação do evento, procurei transmitir através dos elementos marinhos toda a memória presente na culinária derivadas dos frutos do mar.",
    images: [
      "/projects/1/image1.avif",
      "/projects/1/image2.avif",
      "/projects/1/image3.avif",
    ],
    ...generateProjectPath(3),
  },
  {
    title: "O Tambor",
    category: ["Projeto Gráfico", "Diagramação"],
    description:
      "Projeto gráfico desenvolvido para a edição comemorativa do livro O Tambor de Günter Grass, lançado em 1959.",
    images: [
      "/projects/1/image1.avif",
      "/projects/1/image2.avif",
      "/projects/1/image3.avif",
    ],
    ...generateProjectPath(4),
  },
  {
    title: "Caminho do Tarot",
    category: ["Identidade Visual"],
    description:
      "A identidade visual foi desenvolvida para um site, a proposta era desenvolver peças gráficas de divulgação que pudessem ser utilizadas virtualmente e também impressas. Ao todo foram desenvolvidos quatro versões de cartazes também ultilizados na divulgação virtual, cartão de visita, flyer e uma estampa para ecobag utilizada como brinde. A identidade isual usou como referência a carta XIX dos arcanos maiores do tarot, o Sol.",
    images: [
      "/projects/1/image1.avif",
      "/projects/1/image2.avif",
      "/projects/1/image3.avif",
    ],
    ...generateProjectPath(5),
  },
  {
    title: "V Bienal da Escola de Belas Artes da UFRJ",
    category: ["Identidade Visual, Diagramação"],
    coauthors: ["Gustavo Cardozo"],
    description:
      "A Bienal da Escola de Belas Artes, ocupa um lugar de destaque no calendário cultural da UFRJ. Em sua 5º edição, a Bienal que expõe obras produzidas por alunos da Escola, Teve como tem o Tempo. E na passagem dele é que foi encontrada a inspiração para criar a identidade visual da edição que celebra os 200 anos da fundação da Escola de Belas Artes da UFRJ pela missão francesa. Na série foi explorada a passagem do tempo pela mudança de tom, com o grafismo que remete ao astro lunar. Seguindo essa linha, criamos também o projeto editorial para o catálogo que foi distribuído na exposição.",
    images: [
      "/projects/1/image1.avif",
      "/projects/1/image2.avif",
      "/projects/1/image3.avif",
    ],
    ...generateProjectPath(6),
  },
];
