import './App.css'
import { useState } from 'react';
import { IoHomeSharp } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import { PiContactlessPaymentFill } from 'react-icons/pi';
import DOG from "/dog.png"
import STAFFY from "/staffy.png"
import PUPPY from "/puppy.png"
import NEWDOG from "/dogtwo.png"
import CATONE from "/catone.png"
import CATTWO from "/cattwo.png"
import CATTHREE from "/catthree.png"
import CATFOUR from "/catfour.png"



function App() {{

    const [valg, setValg] = useState(null);
  
    const handleValg = () => {
      const tilfeldigValg = Math.random() < 0.5 ? 'CATPERSON' : 'DOGPERSON';
      setValg(tilfeldigValg);
    };
    
  return (
    <>
    <nav>


    <a href="#top">
<IoHomeSharp className="icon"/>
<FaUserAlt className="icon"/>
<PiContactlessPaymentFill className="icon"/>
</a>
    </nav>

    <main>
      <div className="boxsheaderOne">
        </div><p className='headerText'>Do you like dogs?</p>
        <div className='imageWrapper'>
      <div className='underBox'>
        <img src={DOG} alt=''></img>
      </div>

      <div className='underBox'>
      <img src={STAFFY} alt=''></img>
      </div>

      <div className='underBox'>
      <img src={PUPPY} alt=''></img>
      </div>

      <div className='underBox'>
      <img src={NEWDOG} alt=''></img>
      </div>

      </div>

     
      

      <div className="boxsheaderTwo">
        <p className='headerText'>or are you a catperson😼?</p></div>
        <div className='imageWrapperTwo'>
      <div className='underBox'>
        <img src={CATONE} alt=''></img>
      </div>

      <div className='underBox'>
      <img src={CATTWO} alt=''></img>
      </div>

      <div className='underBox'>
      <img src={CATTHREE} alt=''></img>
      </div>

      <div className='underBox'>
      <img src={CATFOUR} alt=''></img>
      </div>
      
      </div>

      <div className='buttonDiv'>
        <p className='buttonText'>Unsure what you like?</p>
        <button className='knappen' onClick={handleValg}>Find out now!</button>
        {valg !== null && (
          <p>{valg}</p>
        )}
      </div>

    


    </main>

    <footer></footer>

    </>
  )
}}

export default App
