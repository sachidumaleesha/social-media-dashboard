import React from 'react'
import ToogleThemeButton from './ToogleThemeButton'

type Props = {}

export default function Header({}: Props) {
  return (
    <div>
        Social Media Dashboard
        <ToogleThemeButton/>
    </div>
  )
}