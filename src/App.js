import logo from './logo.svg';
import './App.css';
import './App.scss';
import Box from './Component/Box/Box';
import Earth from "./Component/Earth"
import AnimatedSphere from './Component/Box/AnimatedSphere';
import { OrbitControls } from '@react-three/drei';
import AnimationContainer from './Component/AnimationContainer/AnimationContainer';
import Home from './pages/Home/Home';
import { Redirect, Route, Switch } from "react-router-dom";
import { Canvas } from '@react-three/fiber';
import Asteroid from './pages/Asteroid/Asteroid';
import Mars from './pages/Mars/Mars';


function App() {
  return (
    <div className="App">

     
        {/* <Canvas className='hello'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <Box/>
        </Canvas>
        <Canvas className='hello'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <AnimatedSphere/>
        </Canvas>
        <Canvas className='hello'>
          <OrbitControls />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <Earth/>
        </Canvas> */}

      <Switch>
      <Route
        path={"/"} 
        exact
        render={(renderProps) => <Home {...renderProps}/>}
      />
      <Route
        path={"/asteroid"} 
      
        render={(renderProps) => <Asteroid {...renderProps}/>}
      />
      <Route
        path={"/mars"} 

        render={(renderProps) => <Mars {...renderProps}/>}
      />

         
      </Switch> 
      

        
    </div>
  );

  }
export default App;
