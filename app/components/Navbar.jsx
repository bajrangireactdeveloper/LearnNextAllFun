import React from 'react'
import Link from 'next/link'
import Home from '../page'

export default function Navbar() {
  return (
    <div>
       <Link href={'/home'}>Home</Link>
       <Link href={'/about'}>About Us</Link>
       <Link href={'/contact'}>Contact Us</Link>
       <Link href={'/product'}>Products</Link>


    </div>
  )
}
