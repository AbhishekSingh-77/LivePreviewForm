import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Stack,
} from "@mui/material";

export default function PreviewPanel({ values }) {
  return (
    <Card variant="outlined" sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Live Preview
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <Stack spacing={2}>
          <Typography variant="body1">
            <strong>Name:</strong> {values.name || "—"}
          </Typography>
          <Typography variant="body1">
            <strong>Email:</strong> {values.email || "—"}
          </Typography>
          <Typography variant="body1">
            <strong>Address:</strong> {values.address || "—"}
          </Typography>
          <Typography variant="body1">
            <strong>Message:</strong> {values.message || "—"}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
