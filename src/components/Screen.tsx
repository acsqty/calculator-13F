import type { ModeSwitchType } from "../App"

const Screen = ({mode}:ModeSwitchType) => {
  return (
    <div>Screen - {mode}</div>
  )
}

export default Screen