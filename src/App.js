import logo from './logo.svg';
import './App.css';
import img_1 from './images/img-1.png'
import cardimg_1 from './images/cardimg-1.png'

function App() {
  return (
    <div className="App">
      <section>
        <div className='container'>
          <h1 className='heading'>Featured Product</h1>
          <div className='row pt-row pb-row'>
            <div className='col-12 col-lg-5'>
              <div className='position-relative'>
              <img className='img-hover' src={img_1}/>
                  <h2 className='img-line cursor'>Explore More Product</h2>
              </div>
            </div>
            <div className='col-12 col-lg-7 d-flex flex-wrap gap-3'>
              <div className='col-12 col-md-6'>
                <div className='card'>
                  <img src={cardimg_1} />
                  <p className='card-para'>Concetti Di-Lusso ALESANDRDO Luxury Turkish Spa Towels and ganic Bamboo Robes 12 PC set</p>
                  <div className='d-flex align-center justify-content-between flex-wrap pb-btn'>
                    <p className='money-1'>$169.99</p>
                    <p className='money-2'>$199.99</p>
                    <button className='card-btn cursor'>ADD CART</button>
                  </div>
                </div>
                </div>
              <div className='col-12 col-md-6'>
                <div className='card'>
                  <img src={cardimg_1} />
                  <p className='card-para'>Concetti Di-Lusso ALESANDRDO Luxury Turkish Spa Towels and ganic Bamboo Robes 12 PC set</p>
                  <div className='d-flex align-center justify-content-between flex-wrap pb-btn'>
                    <p className='money-1'>$169.99</p>
                    <p className='money-2'>$199.99</p>
                    <button className='card-btn cursor'>ADD CART</button>
                  </div>
                </div>
                </div>
              <div className='col-12 col-md-6'>
                <div className='card'>
                  <img src={cardimg_1} />
                  <p className='card-para'>Concetti Di-Lusso ALESANDRDO Luxury Turkish Spa Towels and ganic Bamboo Robes 12 PC set</p>
                  <div className='d-flex align-center justify-content-between flex-wrap pb-btn'>
                    <p className='money-1'>$169.99</p>
                    <p className='money-2'>$199.99</p>
                    <button className='card-btn cursor'>ADD CART</button>
                  </div>
                </div>
                </div>
              <div className='col-12 col-md-6'>
                <div className='card'>
                  <img src={cardimg_1} />
                  <p className='card-para'>Concetti Di-Lusso ALESANDRDO Luxury Turkish Spa Towels and ganic Bamboo Robes 12 PC set</p>
                  <div className='d-flex align-center justify-content-between flex-wrap pb-btn'>
                    <p className='money-1'>$169.99</p>
                    <p className='money-2'>$199.99</p>
                    <button className='card-btn cursor'>ADD CART</button>
                  </div>
                </div>
                </div>
              
            </div>
          </div>
          <button className='show-btn cursor'>SHOW MORE</button>
        </div>
      </section>
    </div>
  );
}

export default App;
