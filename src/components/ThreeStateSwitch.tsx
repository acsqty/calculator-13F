import type { ModeSwitchType } from "../App"

const ThreeStateSwitch = ({mode,nextMode}:ModeSwitchType) => {
  return (
    <div>
      <button onClick={nextMode}>KATTINTS - {mode}</button>
    </div>
  )
}

export default ThreeStateSwitch