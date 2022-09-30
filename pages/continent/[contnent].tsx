import { Flex, Image } from "@chakra-ui/react";
import { info } from "console";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Header from "../../src/components/Header";
import { CountryInfo, data } from "../../src/data/CountriesInfo";
import ReactCountryFlag from "react-country-flag";
import { useRouter } from "next/router";

export default function Continents(data: CountryInfo[]) {
  const router = useRouter();
  console.log(data);
  return (
    <>
      <Header />

      <Flex>
        <Image
          alt="Europe"
          w="100%"
          src={data.map((item) => {
            return item;
          })}
        />
      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  console.log(data);
  const paths = Array.from({ length: 2 }, (_, index) => ({
    params: {
      contnent: (index + 1).toString(),
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { data },
  };
};
