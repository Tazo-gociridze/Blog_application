import { FC, PropsWithChildren } from 'react'

interface FixedWidthWrapperPropsInterface {
  className: string
}

const FixedWidthWrapper: FC<PropsWithChildren<FixedWidthWrapperPropsInterface>> = ({
  children,
  className,
}) => {
  return <div className={`m-auto w-[1550px] ${className}`}>{children}</div>
}

export default FixedWidthWrapper
