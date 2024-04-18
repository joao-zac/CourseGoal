import { type PropsWithChildren } from 'react'

type Props = PropsWithChildren<{image:{src:string, alt:string}}>

const Header = ( {image, children} : Props) => {
  return (
    <header>
        <img {...image} />
        {children}
    </header>
  )
}

export default Header