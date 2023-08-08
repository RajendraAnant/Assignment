import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container"; 
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Typography from "@mui/material/Typography";
import Form from "./Form";
import DataTable from "./Table";

function CustomerForm() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: "Quotation Information",
      component: <Form setActiveStep={setActiveStep} />
    },
    {
      label: "Services",
      component: <DataTable />
    }
  ];
  return (
    <Container maxWidth="md"> 
      <Box sx={{ p: 3 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Create Quotation
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          Please fill in all fields, attach all supporting documents to proceed
          with the registration.
        </Typography>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                {step.component}
                <Box sx={{ mb: 2 }}></Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
}

export default CustomerForm;
