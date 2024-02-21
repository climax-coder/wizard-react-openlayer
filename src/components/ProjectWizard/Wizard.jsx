import React, { useState } from "react";
import {
  Box,
  Heading,
  Step,
  Stepper,
  StepTitle,
  StepStatus,
  StepDescription,
  StepSeparator,
  StepIndicator,
  useSteps,
  StepIcon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { TbSettings2, TbCalendarTime } from "react-icons/tb";

const stepsConfig = [
  {
    title: "Upload",
    description: "Upload file with project's shape",
    icon: IoCloudUploadOutline,
  },
  {
    title: "Configure",
    description: "Configure basic project settings",
    icon: TbSettings2,
  },
  {
    title: "Report",
    description: "Create report for your project",
    icon: TbCalendarTime,
  },
];

const Wizard = () => {
  const iconSize = useBreakpointValue({ base: 16, md: 24 });
  const { activeStep, goToNext, setActiveStep } = useSteps({
    index: 0,
    count: stepsConfig.length,
  });

  const finishUploadSetup = (geojson) => {
    goToNext();
  };

  const finishConfigureSetup = (name, description) => {
    goToNext();
  };

  const onFinish = (dateRange) => {
    setActiveStep(stepsConfig.length);
  };

  return (
    <Box p={{ base: 4, md: 10 }}>
      <Heading mb="4" pb={4} borderBottom="1px solid #eee" color="gray.700">
        Create new project
      </Heading>
      <Stepper
        colorScheme="blue"
        size={{ base: "sm", md: "lg" }}
        index={activeStep}
        width="100%"
      >
        {stepsConfig.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<step.icon size={iconSize} />}
                active={<step.icon size={iconSize} />}
              />
            </StepIndicator>
            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription display={{ base: "none", md: "block" }}>
                {step.description}
              </StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default Wizard;
