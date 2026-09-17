import { useState, useEffect } from 'react';

const App = () => {
  // Estatos
  const [randomNumber, setRandomNumber] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const generateNumber = () => {
    const num = Math.floor(Math.random() * 100 + 1);
    setRandomNumber(num);
  };

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div>
    </div>
  )
}

export default App