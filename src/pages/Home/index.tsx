import { useState } from 'preact/hooks'
import './index.css'
import Nav from '../../components/Nav'
import EmbeddedVideo from '../../components/EmbeddedVideo'
import Information from '../../components/Information'

export function Home() {
  const [visible, setVisible] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <>
      <div className="h-full flex flex-col justify-between">
        <Nav />
        <EmbeddedVideo />
        <Information />
      </div>
    </>
  )
}
