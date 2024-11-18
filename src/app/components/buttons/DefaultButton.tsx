import React, { FC } from "react";

interface DefaultButtonProps {
    children?: any;
    buttonColor?: string;
    className?: string;
}

const DefaultButton: FC<DefaultButtonProps> = ({ children, buttonColor, className }: DefaultButtonProps) => {
    return <div style={{ backgroundColor: buttonColor }} className={`bg-[#475467] rounded-full bold text-[#FFF] text-center py-1 sm:py-3 px-4 sm:px-6 hover:cursor-pointer ${className}`}>{children}</div>
}

export default DefaultButton;