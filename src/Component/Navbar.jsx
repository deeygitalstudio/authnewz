import React, {useState} from 'react'
import './style.css'

const Navbar = ({setCategory}) => {
    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-primary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className='badge bg-light text-dark fs-4'>Auth <span className="badge bg-danger">News</span></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
      
        <li className="nav-item">
<div className={`nav-link ${activeItem === 'technology' ? 'active' : ''}`} onClick={() => { setCategory("technology"); handleItemClick('technology');}}>Technology</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link ${activeItem === 'business' ? 'active' : ''}`} onClick={() => {setCategory("business");handleItemClick('business');}}>Business</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link ${activeItem === 'health' ? 'active' : ''}`} onClick={() => {setCategory("health");handleItemClick('health');}}>Health</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link ${activeItem === 'science' ? 'active' : ''}`} onClick={() => {setCategory("science");handleItemClick('science');}}>Science</div>
        </li>
        <li className="nav-item">
          <div className={`nav-link ${activeItem === 'sport' ? 'active' : ''}`} onClick={() => {setCategory("sport");handleItemClick('sport');}}>Sport</div>
        </li>
        <li className="nav-item">
                  <div className={`nav-link ${activeItem === 'entertainment' ? 'active' : ''}`} onClick={() => {setCategory("entertainment");handleItemClick('entertainment');}}>Entertainment</div>
        </li>
      
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar
