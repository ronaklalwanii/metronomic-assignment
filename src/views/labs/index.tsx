import { useEffect } from "react";

import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";

import { useSelector, useDispatch } from "react-redux";

import { RootStateType } from "../../store";
import { fetchLabs } from "../../store/lab";

import type { FormValues } from "../../types/lab";

const Labs = () => {
  const dispatch = useDispatch();
  const { labs, labsLoading } = useSelector(
    (state: RootStateType) => state.lab
  );

  useEffect(() => {
    dispatch(fetchLabs());
  }, [dispatch]);

  return labsLoading ? (
    "Loading..."
  ) : (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Lab Name</TableCell>
            <TableCell>Provider</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Mobile</TableCell>
            <TableCell>Timezone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {labs.length ? (
            labs.map((row: FormValues) => (
              <TableRow
                key={row.labName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Typography>{row.labName}</Typography>
                  <Typography variant="body2">{row.email}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>{row.providerGroup}</Typography>
                  <Typography variant="body2">{row.providerUnit}</Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    {row.state}, {row.city}
                  </Typography>
                  <Typography variant="body2">{row.zipcode}</Typography>
                </TableCell>
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.timezone}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5}>
                <Typography fontWeight={700}>No Lab Records</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Labs;
