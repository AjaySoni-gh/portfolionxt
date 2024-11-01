'use client'
import React from 'react'
import { ThemeProvider, useTheme } from 'next-themes'

export default function Providers({children}:{children: React.ReactNode} ) {
  return (
   <ThemeProvider attribute='class'
   defaultTheme='syatem'>
    {children}
   </ThemeProvider>
  )
}


