import { Box, useTheme } from "@mui/material";
import React from "react";
import { MixTheme } from "../theme/ThemeOptions";

const PaymentContainer = ({}) => {
  const theme = useTheme<MixTheme>();
  console.log("theme",theme);
  
  return (
    <Box
      sx={{
        backgroundColor: theme.global?.background,
        display:'flex',
        width:'100%',
        height:'100%'
      }}
    >

    </Box>
  );
};
export default PaymentContainer;