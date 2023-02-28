import * as React from "react";
import { Grid, Text } from "@nextui-org/react";
import Sim from "./Sim";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { useState } from "react";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
interface ISim {
  number: string;
  price: string;
  provider: string;
}

const SimList = ({ sims, title }: { sims: any; title: any }) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const openSnackbar = (show: boolean) => setShowSnackbar(show);
  const closeSnackbar = () => setShowSnackbar(false);

  return (
    <div>
      {sims.length > 0 && (
        <div>
          <Text h2>{title}</Text>
          <Grid.Container
            gap={1}
            justify="flex-start"
            css={{ marginBottom: "62px" }}
          >
            {sims.map((sim: ISim, index: number) => (
              <Grid xs={6} sm={3} key={index}>
                <Sim sim={sim} openSnackbar={openSnackbar} />
              </Grid>
            ))}
          </Grid.Container>
        </div>
      )}
      <Snackbar
        open={showSnackbar}
        autoHideDuration={6000}
        onClose={closeSnackbar}
      >
        <Alert
          onClose={closeSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          Đặt sim thành công
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SimList;
