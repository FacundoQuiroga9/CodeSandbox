import { useState, useEffect } from 'react';

const Flag = () => {
  const [flag, setFlag] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAnimation, setShowAnimation] = useState(false);
  const [charsToShow, setCharsToShow] = useState(0);

  useEffect(() => {
    const URL_FLAG = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/726562';

    fetch(URL_FLAG)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error fetching flag!');
        }
        return response.text();
      })
      .then(data => {
        setFlag(data);
        setLoading(false);
        setShowAnimation(true);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (showAnimation && charsToShow < flag.length) {
      const timeout = setTimeout(() => {
        setCharsToShow(prevChars => prevChars + 1);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [showAnimation, charsToShow, flag]);

  return (
    <div>
      {loading ? (
        <p>LOADING...</p>
      ) : (
        <div>
          <h2>FLAG:</h2>
          <ul>
            {flag.slice(0, charsToShow).split('').map((char, index) => (
              <li key={index}>{char}</li>
            ))}
          </ul>
        </div>
      )}
      <h3>Script:</h3>
      <p>const tagsNodeList = document.querySelectorAll("code {">"} div {">"} span {">"} i")</p>
      <p>const tagsArray = Array.from(tagsNodeList)</p>
      <p>const valuesArray = tagsArray.map(tag ={">"} tag.getAttribute('value'))</p>
      <p>const url = valuesArray.join("")</p>
    </div>
  );
};

export default Flag;
