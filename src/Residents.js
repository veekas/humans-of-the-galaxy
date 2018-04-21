import React, { Component } from 'react';

const Residents = ({ residents }) => (
  <ul>
    {
      residents.map(resident => (
        <li key={resident}>{resident}</li>
      ))
    }
  </ul>
);

export default Residents;
