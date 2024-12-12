import { FC, PropsWithChildren } from "react";

interface FixedWidthWrapperPropsInterface {
    className: string,
}

const FixedWidthWrapper: FC<PropsWithChildren<FixedWidthWrapperPropsInterface>> = ({children, className}) => {
  return (
    <div className={`w-[1550px] m-auto ${className}`}>
          {children}
    </div>
  )
};

export default FixedWidthWrapper;
