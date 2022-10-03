import {
  Flex,
  Text,
  Box,
  Image,
  useBreakpointValue,
  GridItem,
} from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Header from "../../src/components/Header";
import { CountryInfo, data } from "../../src/data/CountriesInfo";
import ReactCountryFlag from "react-country-flag";
import TextContinentSection from "../../src/components/TextContinentSection";
import GridCities from "../../src/components/GridCities";
import Card from "../../src/components/Card";

interface ContinentsProps {
  findObjectData: CountryInfo;
}

export default function Continents(data: ContinentsProps) {
  console.log(data);

  return (
    <>
      <Header />
      <Flex>
        <Image
          alt="background-image"
          w="100%"
          src={useBreakpointValue({
            base: data.findObjectData.imgBobile,
            sm: data.findObjectData.imgsrc,
          })}
        />
      </Flex>
      <TextContinentSection
        leftText={data.findObjectData.content}
        countryNumber={data.findObjectData.info.country}
        languageNumber={data.findObjectData.info.language}
        cityNumber={data.findObjectData.info.cities}
      />
      <Box maxW={"1160px"}>
        <GridCities>
          {data.findObjectData.cities.map((item, index) => {
            return (
              <>
                <GridItem>
                  <Card
                    key={`item${index}`}
                    imageCard={item.imageGrid}
                    cityName={item.CitieName}
                    countryName={item.CountryName}
                    flagName={item.icon}
                  />
                </GridItem>
              </>
            );
          })}
        </GridCities>
      </Box>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  const paths = data.map((item) => {
    return { params: { contnent: item.title } };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  const { params } = context;
  const findObjectData = data.find((item) => item.title);
  params === findObjectData ? findObjectData : null;
  return {
    props: { findObjectData },
  };
};
