import './Header.module.css'

import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="" />
    </header>
  )
}
