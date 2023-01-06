import { Dialog, ThemeProvider,GlobalStyles } from "@mui/material";

import React from "react";
import { theme } from "../theme/CreateTheme";
import { styles } from "../theme/GlobalStyles";
import PaymentContainer from "./PaymentContainer";

interface MojitoPaymentProps {}
const MojitoPayment = ({}: MojitoPaymentProps) => {
   const themes = theme()
  return (
    <Dialog open={true} fullScreen>
      <ThemeProvider theme={themes}>
         <GlobalStyles styles={styles}/>
         <PaymentContainer />
      </ThemeProvider>
    </Dialog>
  );
};
export default MojitoPayment;
