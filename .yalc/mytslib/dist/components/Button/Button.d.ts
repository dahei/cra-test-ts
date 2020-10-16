import React from 'react';
export interface Props {
    label: string;
    className?: string;
    onClick?: () => void;
}
export declare const Button: React.FunctionComponent<Props>;
