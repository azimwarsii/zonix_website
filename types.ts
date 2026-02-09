// Fix: Import React to resolve namespace error for React.ReactNode
import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}