import './App.css';
import Header from './components/Header';

import Accesories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

import Item from './components/Item';


function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />

      <div className="app__itemsContainer">
        <Item
          title='Model S'
          desc='Money-back guarantee'
          descLink=''
          backgroundImage={ModelS}
          leftBtnText='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
          first
        />

        <Item
          title='Model Y'
          desc='Money-back guarantee'
          descLink=''
          backgroundImage={ModelY}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Model 3'
          desc='Money-back guarantee'
          descLink=''
          backgroundImage={Model3}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Model X'
          desc='Money-back guarantee'
          descLink=''
          backgroundImage={ModelX}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Lowest Cost Solar Pannels in America'
          desc='Money-back guarantee'
          descLink=''
          backgroundImage={SolarPanels}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Solar Roof'
          desc='Money-back guarantee'
          descLink=''
          backgroundImage={SolarRoof}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />

        <Item
          title='Accesories'
          desc='Money-back guarantee'
          descLink=''
          backgroundImage={Accesories}
          leftBtnText='ORDER NOW'
          leftBtnLink=''
          rightBtnText='LEARN MORE'
          rightBtnLink=''
        />
      </div>
    </div>
  );
}

export default App;
