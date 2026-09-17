import type { ModeSwitchType } from "../App"

const ButtonWrapper = ({mode}:ModeSwitchType) => {
  return (
    <div>
      {mode}
        {
        [7,8,9,"DEL",
        4,5,6,"+",
        1,2,3,"-",
        ".",0,"/","x",
        "RESET","="]
        .map(key => <button>{key}</button>)}
    </div>
  )
}

export default ButtonWrapper