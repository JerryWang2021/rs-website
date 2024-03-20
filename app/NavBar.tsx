import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='px-3 flex space-x-6 justify-between h-24 bg-zinc-800 text-white items-center my-6'>
        
          <Link href="/">Logo</Link>
          <ul className='hidden sm:flex sm:space-x-6'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">About Us</Link></li>
            <li><Link href="/">Shop</Link></li>
            <li><Link href="/">Extras</Link></li>
            <li><Link href="/">Investors</Link></li>
          </ul>
        
    </nav>
  )
}

export default NavBar