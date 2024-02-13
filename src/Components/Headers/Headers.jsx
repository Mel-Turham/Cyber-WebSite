import HeaderSub from "./HeaderSub/HeaderSub"
import HeaderTop from "./HeaderTop/HeaderTop"
import './Headers.scss'


const Headers = () => {
  return (
    <div className="ContainerHeaders">
      <HeaderTop/>
      <HeaderSub/>
    </div>
  )
}

export default Headers