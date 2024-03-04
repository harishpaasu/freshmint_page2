import './App.css';
import StarkconImage from './assets/starkcon.png';
import ellipse from "./assets/Ellipse 7.png";
function App() {
  return (
    <div className="Rectangle-18">
      <div className="container">
  <div className="horizontal-container">
    <nav>
      <ul className="navigation">
        
        <li><a href="#" className="Ahoy">Ahoy</a></li>
      </ul>
    </nav>
    <nav className="right-nav">
      <ul className="navigation">
        <li><a href="#" className="Events">Events</a></li>
        <li><a href="#" className="Community">Community</a></li>
        <li><a href="#" className="Profiles">Profiles</a></li>
        <li><button className="button-1" type='button'>Connect</button></li>
      </ul>
    </nav>
  </div>

  <div className="horizontal-container">
    <h1 className="Event-1">Events</h1>
    <div className="frame-2">
      <button className='button-2' type="button">Create Event</button>
    </div>
  </div>

  <div className='flex-container'>
    <div className='card'>
      <img className='card-img1'src={StarkconImage} alt='starkcon'/>
      <div className="card-content">
        <h2>StarkCon IIT Madras</h2>
        <p>IITM Research Park</p>
        <p>The future of Web3, The StarkWare & ZKX Community building in Web3.</p>
        <img className='card-img2' src={ellipse} alt='ellipse'/>
        <img className='card-img3' src={ellipse} alt='ellipse'/>
        <img className='card-img4' src={ellipse} alt='ellipse'/>
        <img className='card-img5' src={ellipse} alt='ellipse'/>
        <p className='card-p'>Manage Event</p>
      </div>
    </div>

    <div className='card'>
      <img className='card-img1' src={StarkconImage} alt='starkcon'/>
      <div class="box"></div>
      <div className="card-content">
        <h2>StarkCon IIT Madras</h2>
        <p>IITM Research Park</p>
        <p>The future of Web3, The StarkWare & ZKX Community building in Web3.</p>
        <div className='card-img11'
        ><img className='card-img2' src={ellipse} alt='ellipse'/>
        <img className='card-img3' src={ellipse} alt='ellipse'/>
        <img className='card-img4' src={ellipse} alt='ellipse'/>
        <img className='card-img5' src={ellipse} alt='ellipse'/>
        <p className='card-p'>Manage Event</p></div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
}

export default App;
