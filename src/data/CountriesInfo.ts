export interface CountryInfo {
  id: number;
  title: string;
  imgsrc: string;
  imgBobile: string;
  content: string;
  info: {
    country: number;
    language: number;
    cities: number;
  };
  cities: Array<{
    CountryName: string;
    CitieName: string;
    icon: string;
    imageGrid: string;
  }>;
}

export const data: CountryInfo[] = [
  {
    id: 1,
    title: "Europa",
    imgsrc: "/photos/Banner.png",
    imgBobile: "/photos/BannerMobile.png",
    content:
      "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    info: {
      country: 50,
      language: 60,
      cities: 27,
    },
    cities: [
      {
        CitieName: "Londres",
        CountryName: "Reino Unido",
        icon: "UK",
        imageGrid: "/europe/1.webp",
      },
      {
        CitieName: "Londres",
        CountryName: "Reino Unido",
        icon: "UK",
        imageGrid: "/europe/2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "US",
    imgsrc: "./photos/Europe.avif",
    imgBobile: "/photos/BannerMobile.png",
    content:
      "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste",
    info: {
      country: 50,
      language: 60,
      cities: 27,
    },
    cities: [
      {
        CitieName: "Londres",
        CountryName: "Reino Unido",
        icon: "UK",
        imageGrid: "",
      },
      {
        CitieName: "Londres",
        CountryName: "Reino Unido",
        icon: "UK",
        imageGrid: "",
      },
      {
        CitieName: "Londres",
        CountryName: "Reino Unido",
        icon: "UK",
        imageGrid: "",
      },
      {
        CitieName: "Londres",
        CountryName: "Reino Unido",
        icon: "UK",
        imageGrid: "",
      },
      {
        CitieName: "Londres",
        CountryName: "Reino Unido",
        icon: "UK",
        imageGrid: "",
      },
    ],
  },
];
