import React from 'react';
import '../index.css';
import ConnectedResultCounter from './ConnectedResultCounter';
import ConnectedVideoList from './ConnectedVideoList';

export default function App() {
  return [
    <ConnectedResultCounter/>,
    <ConnectedVideoList/>,
  ];
};
