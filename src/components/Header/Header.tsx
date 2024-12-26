import { FC } from 'react'
import HeaderLogo from './components/header-logo/Header-logo'
import HeaderNav from './components/header-nav/Header-nav'
import HeaderTools from './components/header-tools/Header-tools'
import FixedWidthWrapper from '../../utils/Fixed-width-wrapper/FixedWidthWrapper'

const Header: FC = () => {
  return (
    <header className='flex justify-center border-[1px] border-[#a7a0a036]'>
      <FixedWidthWrapper className='flex h-[70px] items-center justify-between'>
        <HeaderLogo />
        <HeaderNav />
        <HeaderTools />
      </FixedWidthWrapper>
    </header>
  )
}

export default Header
