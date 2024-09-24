import SiteLogo from './SiteLogo'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header>
      <div className="logo"> 
        <SiteLogo />
      </div>
      <div className="nav">
        <Navigation />
      </div>
    
    </header>
  )
}

export default Header