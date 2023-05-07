import React, { FC } from "react";
import styles from "./Button.module.css";
import { VariantType } from "@/common/types/StorybookTypes";

interface ButtonProps {
    children: string;
    variant: VariantType;
}

const Button: FC<ButtonProps> = ({
    children,
    variant
}) => {
    return <button className={`${styles.boton} ${styles[variant]}`}>{children}</button>;
};

export default Button;
export type { ButtonProps };