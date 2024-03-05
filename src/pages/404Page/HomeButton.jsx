import React from 'react';
import {Button} from './ErrorPage.styled'; 
import { useNavigate } from 'react-router-dom'; 

export const HomeButton = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
  
    navigate('/');
  };

  return (
    <Button onClick={handleGoHome}>
      GO HOME
    </Button>
  );
};









