import { useState } from 'react'

export default function NamePage() {
  const [name, setName] = useState<any>()
  return (
    <div>
      <p className="bg-slate-300 text-red-500">안녕</p>
    </div>
  )
}
