import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export default function BasicPagination() {
  const navigate = useNavigate();
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ mt: 4 }}
    >
      <Grid item xs={3}>
        <Stack spacing={2}>
          <Pagination
            count={3}
            selected={true}
            onClick={(e) =>
              navigate(
                e.target.getAttribute("aria-label") === "Go to page 2"
                  ? `/page2`
                  : e.target.getAttribute("aria-label") === "Go to page 3"
                  ? `/page3`
                  : `/`
              )
            }
          />
        </Stack>
      </Grid>
    </Grid>
  );
}
