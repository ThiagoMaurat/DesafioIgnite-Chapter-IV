import { Box, Grid } from "@chakra-ui/react";
import React from "react";

interface GridCities {
  children: any;
}

export default function GridCities({ children }: GridCities) {
  return (
    <Box mt="80px">
      <Grid templateColumns={"repeat(5, 1fr)"} gridGap="45px">
        {children}
      </Grid>
    </Box>
  );
}
