import { useState } from 'react';
import Step1 from '../../components/Register-components/step-one';
import Step2 from '../../components/Register-components/step-two';
                                                                                                                                 
function Register() {
  const [showStep2, setShowStep2] = useState(false);
  const [registrationCompleted, setRegistrationCompleted] = useState(false);

  const handleNext = () => {
    setShowStep2(true);
  };

  const handlePrev = () => {
    setShowStep2(false);
    setRegistrationCompleted(false); // Reset registration status when going back
  };

  const handleComplete = () => {
    setRegistrationCompleted(true);
  };


  return (
    <div>
      {!showStep2 ? (
        <Step1 handleNext={handleNext} />
      ) : (
        <Step2
          handleComplete={handleComplete}
          handlePrev={handlePrev}
          registrationCompleted={registrationCompleted}
        />
      )}

    </div>
  );

}

export default Register;
