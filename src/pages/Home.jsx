import React from 'react';
import { Box } from '@chakra-ui/react';
import Wizard from '../components/ProjectWizard/Wizard';

const Home = () => {
  return (
    <Box mt={8} mx="auto" maxW="1280px">
       <Wizard />
    </Box>
  );
};

export default Home;
