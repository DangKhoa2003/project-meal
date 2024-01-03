import React from 'react'
import { Input } from "@/components/ui/input"
export default function Search({valueSearch, setValueSearch}: {valueSearch: string, setValueSearch: Function}) {
  return (
    <Input value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} type="text" placeholder="Search..." />
  )
}
