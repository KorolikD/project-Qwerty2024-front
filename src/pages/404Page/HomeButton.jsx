import React from 'react';
import { Link } from 'react-router-dom';

import {Button} from './ErrorPage.styled'; 


export const HomeButton = ({ onClick }) => {

  return (
    <Link to="/">
    <Button onClick={onClick}>Go Home</Button>
    </Link>
  );
};






