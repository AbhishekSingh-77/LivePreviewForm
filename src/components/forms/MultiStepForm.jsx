// src/components/forms/MultiStepForm.jsx
import { useState } from "react";
import { Formik, Form } from "formik";
import {
  Box,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import PreviewPanel from "./PreviewPanel";
import * as Yup from "yup";

// Validation Schemas for each step
const stepValidations = [
  Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Name should contain only letters and spaces")
      .min(3, "Name must be at least 3 letters")
      .max(20, "Name must not be more than 20 letters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  }),
  Yup.object({
    address: Yup.string().required("Address is required"),
  }),
  Yup.object({
    message: Yup.string()
      .test(
        "min-words",
        "Message must be at least 5 words",
        (value) => value && value.trim().split(/\s+/).length >= 5
      )
      .required("Message is required"),
  }),
];

const steps = ["Basic Info", "Address", "Message"];

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const initialValues = {
    name: "",
    email: "",
    address: "",
    message: "",
  };

  const handleNext = async (validateForm, setTouched, errors) => {
    const stepErrors = await validateForm();
    setTouched(
      Object.keys(stepErrors).reduce((acc, key) => {
        acc[key] = true;
        return acc;
      }, {})
    );
    if (Object.keys(stepErrors).length === 0) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    alert(JSON.stringify(values, null, 2)); // client-only
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Formik
        initialValues={initialValues}
        validationSchema={stepValidations[activeStep]}
        onSubmit={handleSubmit}
      >
        {({ values, validateForm, setTouched, errors }) => (
          <Form>
            <Grid container spacing={4}>
              {/* Left: Multi-Step Form */}
              <Grid item xs={12} md={7}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

                <Box mt={3}>
                  {activeStep === 0 && <StepOne />}
                  {activeStep === 1 && <StepTwo />}
                  {activeStep === 2 && <StepThree />}
                </Box>

                <Box mt={3} display="flex" justifyContent="space-between">
                  {activeStep > 0 && (
                    <Button variant="outlined" onClick={handleBack}>
                      Back
                    </Button>
                  )}
                  {activeStep < steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={() =>
                        handleNext(validateForm, setTouched, errors)
                      }
                    >
                      Next
                    </Button>
                  ) : (
                    <Button variant="contained" type="submit">
                      Submit
                    </Button>
                  )}
                </Box>
              </Grid>

              {/* Right: Live Preview */}
              <Grid item xs={12} md={5}>
                <Typography variant="h6" gutterBottom>
                  Live Preview
                </Typography>
                <PreviewPanel values={values} />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
