import { Box, Grid } from "@chakra-ui/react";
import React from "react";

interface GridCities {
  children: any;
}

export default function GridCities({ children }: GridCities) {
  return (
    <Box>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          sm: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        mb="35px"
        gridGap="45px"
        px={{ base: "16px", xl: "0" }}
        justifyContent={"center"}
      >
        {children}
      </Grid>
    </Box>
  );
}
