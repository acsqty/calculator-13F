import { useState } from "react"
import ButtonWrapper from "./components/ButtonWrapper"
import Screen from "./components/Screen"
import ThreeStateSwitch from "./components/ThreeStateSwitch"

export type ModeSwitchType = {
  mode: number,
  nextMode: () => void
}

const App = () => {
  const [mode, setMode] = useState(0)

  const nextMode = () => {
    // 0 => 1%3 = 1
    // 1 => 2%3 = 2
    // 2 => 3%3 = 0
    // 0 => 1%3 = 1
    setMode(prev => (prev + 1) % 3)
  }

  return (
    <div>
      <ThreeStateSwitch {...{mode, nextMode}}/>
      <Screen {...{mode, nextMode}} />
      <ButtonWrapper mode={mode} nextMode={nextMode} />
    </div>
  )
}

export default App