'use client';

import React from 'react';
import getIcon from "../lip";

interface LucideIconPicker {
  icon: string;
  size: number;
}

export const LucideIconPicker: React.FC<LucideIconPicker> = ({ icon, size }) => {
  const ReturnIcon = getIcon(icon);
  return (ReturnIcon && <ReturnIcon size={size} />);
};