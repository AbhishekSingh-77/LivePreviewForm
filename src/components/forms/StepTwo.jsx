import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Box, Typography } from "@mui/material";

export default function StepTwo() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Address
      </Typography>

      <Box mb={2}>
        <Field
          as={TextField}
          fullWidth
          name="address"
          label="Address"
          variant="outlined"
          helperText={<ErrorMessage name="address" />}
        />
      </Box>
    </Box>
  );
}
