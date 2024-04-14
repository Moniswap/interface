/* eslint-disable react/display-name */
import * as React from "react";
import Image from "next/image";
import { forwardRef } from "react";

interface ModalProps {
  close?: () => any;
}

interface ListItemProps {
  onItemPressed?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  imgSrc: string;
  tokenAddress: string;
}

const ListItem: React.FC<ListItemProps> = ({ tokenAddress, disabled, imgSrc, onItemPressed }) => {
  return <button className="w-full btn md:btn-lg btn-md"></button>;
};
