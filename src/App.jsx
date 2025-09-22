import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";
import MultiStepForm from "./components/forms/MultiStepForm";

export default function App() {
  return (
    <Container maxWidth="md" sx={{ py: 2 }}>
      <Paper elevation={3} sx={{ p: 2, borderRadius: 3 }}>
        <Box textAlign="center" mb={1}>
          <Typography variant="h5" component="h1" gutterBottom>
            Multi-Step Form with Live Preview
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Fill in your details step by step and review them in real time.
          </Typography>
        </Box>

        <MultiStepForm />
      </Paper>
    </Container>
  );
}
