import React from "react";
import ReactCountryFlag from "react-country-flag";
export interface CountryInfo {
  title: string;
  imgsrc: string;
  content: string;
  info: {
    country: number;
    language: number;
    cities: number;
  };
  cities: Array<{
    CountryName: string;
    CitieName: string;
    icon: JSX.Element;
  }>;
}

const data: CountryInfo[] = [
  {
    title: "Europa",
    imgsrc: "./photos/Europe.avif",
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
        icon: <ReactCountryFlag countryCode="UK" />,
      },
    ],
  },
  {
    title: "US",
    imgsrc: "./photos/Europe.avif",
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
        icon: <ReactCountryFlag countryCode="UK" />,
      },
    ],
  },
];
