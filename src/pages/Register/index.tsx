import { useState } from 'react';
import Step1 from '../../components/Register-components/step-one'
import Step2 from '../../components/Register-components/step-two';
import Footer from '../../components/Footer/footer';


function Register() {
  const [showStep2, setShowStep2] = useState(false);

  const handleNext = () => {
    setShowStep2(true);
  };
  const handlePrev = () => {
    setShowStep2(false);
  };
  const handleComplete = () => {
    console.log('Cadastro completo!');
  };

  return (
  
    <div>
      {!showStep2 ? <Step1 handleNext={handleNext} /> : <Step2 handleComplete={handleComplete}  handlePrev={handlePrev}/>}

    </div>

  

  );
}

export default Register;