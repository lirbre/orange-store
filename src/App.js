import './App.scss';

import product1 from './assets/images/image-product-1.jpg';

import thumb1 from './assets/images/image-product-1-thumbnail.jpg';
import thumb2 from './assets/images/image-product-2-thumbnail.jpg';
import thumb3 from './assets/images/image-product-3-thumbnail.jpg';
import thumb4 from './assets/images/image-product-4-thumbnail.jpg';

function App() {
  return (
    <div className="page-wraper">
      <header>
        <h1>sneakers</h1>
      </header>
      <div className="content-wraper">
        <div className="img-div">
          <div>
            <img
              className='big-img'
              src={product1}
            />
          </div>
          <div className="thumb-img-div">
            <img
              className="thumb-img"
              src={thumb1}
            />
            <img
              className="thumb-img"
              src={thumb2}
            />
            <img
              className="thumb-img"
              src={thumb3}
            />
            <img
              className="thumb-img"
              src={thumb4}
            />
          </div>
        </div>
        <div className="text-div">
          <h1>text</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
