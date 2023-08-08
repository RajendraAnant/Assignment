import React from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";

const Form = ({ setActiveStep }) => {
  const validationSchema = Yup.object().shape({
    customername: Yup.string().required("Customer Name is required"),
    email: Yup.string().required("Email is required"),
    mobile: Yup.string().required("Mobile No. is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    address: Yup.string().required("Address is required"),
    payment: Yup.string().required("Payment Term is required")
  });

  const initialValues = {
    customername: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    address: "",
    payment: ""
  };

  const onSubmit = async (value) => {
    console.log('value', value)
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  const handleNext = () => {
    if (formik.isValid && formik.dirty) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };
 

  return (
    <Box component="form" onSubmit={formik.handleSubmit} rowGap={3}>
      <Box
        columnGap={2}
        display="grid"
        gap={1}
        gridTemplateColumns={{
          xs: "repeat(1, 1fr)",
          sm: "repeat(3, 1fr)"
        }}
      >
        <TextField
          name="customername"
          label="Customer Name"
          {...formik.getFieldProps("customername")}
          onChange={formik.handleChange}
          error={formik.touched.customername && formik.errors.customername}
          helperText={formik.touched.customername && formik.errors.customername}
        />
        <TextField
          name="email"
          label="Email"
          {...formik.getFieldProps("email")}
          onChange={formik.handleChange}
          error={formik.touched.email && formik.errors.email}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          name="mobile"
          label="Mobile"
          {...formik.getFieldProps("mobile")}
          onChange={formik.handleChange}
          error={formik.touched.mobile && formik.errors.mobile}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />
        <FormControl fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            label="Country"
            name="country"
            {...formik.getFieldProps("country")}
            onChange={formik.handleChange}
            error={formik.touched.country && formik.errors.country}
            helperText={formik.touched.country && formik.errors.country}
          >
            {country.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          name="city"
          label="City"
          {...formik.getFieldProps("city")}
          onChange={formik.handleChange}
          error={formik.touched.city && formik.errors.city}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          name="address"
          label="Address"
          {...formik.getFieldProps("address")}
          onChange={formik.handleChange}
          error={formik.touched.address && formik.errors.address}
          helperText={formik.touched.address && formik.errors.address}
        />
        <FormControl fullWidth>
          <InputLabel>Payment Terms</InputLabel>
          <Select
            label="Payment Terms"
            name="payment"
            {...formik.getFieldProps("payment")}
            onChange={formik.handleChange}
            error={formik.touched.payment && formik.errors.payment}
            helperText={formik.touched.payment && formik.errors.payment}
          >
            {paymentTerms.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="contained"
        type="submit"
        onClick={handleNext}
        sx={{ marginTop: 3,backgroundColor: "#ffff66", color: "black" }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default Form;

const country = ["India", "America"];
const paymentTerms = ["Online", "Cash"];
