'use client'

import React from 'react'
import { Button} from '@mui/material';
import Link from 'next/link';

interface IBtn {
    text: string
    href: string
}

const BtnComponent: React.FC<IBtn> = ({text, href}) => {
  return (
    <Link href={href}><Button variant="contained" style={{ backgroundColor: '#ab7df4', fontSize: '1.2rem' }}>{text}</Button></Link>
  )
}

export default BtnComponent