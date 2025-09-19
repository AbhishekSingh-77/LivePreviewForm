import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField, Box, Typography } from "@mui/material";

export default function StepThree() {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Message
      </Typography>

      <Box mb={2}>
        <Field
          as={TextField}
          fullWidth
          name="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          helperText={<ErrorMessage name="message" />}
        />
      </Box>
    </Box>
  );
}
