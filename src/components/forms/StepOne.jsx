import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Box, Typography } from "@mui/material";

export default function StepOne() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Basic Info
      </Typography>

      <Box mb={2}>
        <Field
          as={TextField}
          fullWidth
          name="name"
          label="Name"
          variant="outlined"
          helperText={<ErrorMessage name="name" />}
        />
      </Box>

      <Box mb={2}>
        <Field
          as={TextField}
          fullWidth
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          helperText={<ErrorMessage name="email" />}
        />
      </Box>
    </Box>
  );
}
