import React from "react";
import { Flex, HStack, IconButton, Image } from "@chakra-ui/react";
import { MdArrowBackIos } from "react-icons/md";
import Link from "next/link";

interface HeaderProps {
  isDinamicPage: boolean;
}

export default function Header({ isDinamicPage }: HeaderProps) {
  return (
    <Flex alignItems={"center"}>
      {isDinamicPage ? (
        <Link href={"/"}>
          <IconButton
            backgroundColor={"transparent"}
            _hover={{ backgroundColor: "gray.50" }}
            icon={<MdArrowBackIos />}
            aria-label={"back"}
          />
        </Link>
      ) : null}
      <HStack w="100%" h="100px" justifyContent={"center"}>
        <Image src="/Logo.png" alt="Logo" />
      </HStack>
    </Flex>
  );
}
