import {
  AspectRatio,
  chakra,
  Circle,
  Flex,
  Img,
  Text,
  useBreakpoint,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useCallback, useMemo, useState } from "react";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper";
import "../swipper/swipper.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

const ChakraSwiper = chakra(Swiper);

type SwiperManager = {
  swiper: SwiperCore;
  activeIndex: number;
};

export default function Choices() {
  const [manager, setManager] = useState<SwiperManager>({} as SwiperManager);

  const handleChangeSlide = useCallback(
    (index: number) => {
      manager.swiper.slideTo(index);

      setManager({
        ...manager,
        activeIndex: index,
      });
    },
    [manager]
  );

  const content = useMemo(() => {
    return [
      {
        src: "./image1.jpg",
      },
      {
        src: "image1.jpg",
      },
    ];
  }, []);
  return (
    <>
      <Flex mb="100px">
        <ChakraSwiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
          justifyContent={"center"}
          onAfterInit={(s) =>
            setManager({
              swiper: s,
              activeIndex: 0,
            })
          }
          onSlideChange={(s) =>
            setManager({ ...manager, activeIndex: s.activeIndex })
          }
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          {content.map((image, index) => {
            return (
              <SwiperSlide key={index}>
                <Img
                  w={{ base: "100%", sm: "80%" }}
                  margin="0 auto"
                  minH={"200px"}
                  src={image.src}
                  alt="Main Image"
                  objectFit="cover"
                />
              </SwiperSlide>
            );
          })}
        </ChakraSwiper>
        <Flex
          w="100%"
          gap={"4px"}
          justifyContent={"center"}
          alignItems={"flex-end"}
          position={"absolute"}
          zIndex={99999}
          className="custom-swiper-pagination"
          pl={{ base: 0, md: 4 }}
          bottom={useBreakpointValue({ base: "0", md: "0" })}
          mb="10px"
        >
          {content.map((image, index) => {
            const isActive = manager.activeIndex === index;
            return (
              <Circle
                size={{ base: "11px", md: "11px", lg: "13px" }}
                key={index}
                cursor="pointer"
                onClick={() => handleChangeSlide(index)}
                bgColor={isActive ? "#FFBA08" : "blackAlpha.900"}
                opacity={isActive ? 1 : 0.5}
              />
            );
          })}
        </Flex>
      </Flex>
    </>
  );
}
