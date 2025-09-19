import { useState } from "react";
import { Formik, Form } from "formik";
import { Box, Button, Stepper, Step, StepLabel } from "@mui/material";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import PreviewPanel from "./PreviewPanel";

const steps = ["Basic Info", "Address", "Message"];

export default function MultiStepForm() {
  const [activeStep, setActiveStep] = useState(0);

  const initialValues = {
    name: "",
    email: "",
    address: "",
    message: "",
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = (values) => {
    console.log("Form Submitted:", values);
    alert(JSON.stringify(values, null, 2)); // client-only
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form>
          <Box display="flex" gap={4}>
            {/* Left: Multi-Step Form */}
            <Box flex={1}>
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
                  <Button variant="contained" onClick={handleNext}>
                    Next
                  </Button>
                ) : (
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                )}
              </Box>
            </Box>

            {/* Right: Live Preview */}
            <Box flex={1}>
              <PreviewPanel values={values} />
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
}
