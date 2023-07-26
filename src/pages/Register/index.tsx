import { useState } from 'react';
import Step1 from '../../components/Register-components/step-one'
import Step2 from '../../components/Register-components/step-two';

function Register() {
  const [showStep2, setShowStep2] = useState(false);

  const handleNext = () => {
    setShowStep2(true);
  };

  const handleComplete = () => {
    console.log('Cadastro completo!');
  };

  return (
    <div>
      {!showStep2 ? <Step1 handleNext={handleNext} /> : <Step2 handleComplete={handleComplete} />}
    </div>
  );
}

export default Register;