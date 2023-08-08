import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const data = [
  { sn: 1, service: "Arabian Horse", price: 52.0 },
  { sn: 2, service: "farrier Horse", price: 5000 },
  { sn: 3, service: "Jumping Training For Horse", price: 5000.0 },
  { sn: 4, service: "farrierfarrier", price: 499.0 },
  { sn: 5, service: "Racing", price: 5000.0 }
];

const DataTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPrice, setSelectedPrice] = useState(0);

  const handleRowSelect = (row) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(
        selectedRows.filter((selectedRow) => selectedRow !== row)
      );
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  useEffect(() => {
    const selectedPrices = selectedRows.map((row) => row.price);
    const selectedTotal = selectedPrices.reduce(
      (total, price) => total + price,
      0
    );
    setSelectedPrice(selectedTotal);
  }, [selectedRows]);

  useEffect(() => {
    const selectedPrices = selectedRows.map((row) => row.price);
    const selectedTotal = selectedPrices.reduce(
      (total, price) => total + price,
      0
    );
    const discountedTotal = selectedTotal - discount;
    const taxedTotal = discountedTotal + (discountedTotal * tax) / 100;
    setTotalPrice(taxedTotal);
  }, [selectedRows, discount, tax]);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const payload = {
      selectedRows,
      discount,
      tax,
      totalPrice
    };
    console.log("Payload:", payload);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Box>
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: " #ffffcc", color: "white" }}>
              <TableRow>
                <TableCell>SN</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Select Service</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.sn}>
                  <TableCell>{row.sn}</TableCell>
                  <TableCell>{row.service}</TableCell>
                  <TableCell>{row.price.toLocaleString()}</TableCell>
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(row)}
                      onChange={() => handleRowSelect(row)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Box mt={2}>
            <TextField
              style={{ width: "200px" }}
              label="Price"
              value={`${selectedPrice.toLocaleString()}`}
              fullWidth
              disabled
            />
          </Box>
          <Box mt={2}>
            <TextField
              style={{ width: "200px" }}
              label="Discount"
              value={`${discount.toLocaleString()}`}
              onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
            />
          </Box>
          <Box mt={2}>
            <TextField
              style={{ width: "200px" }}
              label="Tax (%)"
              value={tax}
              onChange={(e) => setTax(parseFloat(e.target.value) || 0)}
            />
          </Box>
          <Box mt={2}>
            <TextField
              style={{ width: "200px" }}
              label="Total Price"
              value={`${totalPrice.toLocaleString()}`}
              fullWidth
              disabled
            />
          </Box>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button type="submit" variant="contained">
            Create
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default DataTable;
