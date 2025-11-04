import { useState } from 'react';
import { stringCalculator } from './stringCalculator';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      setError('');
      const total = stringCalculator(input);
      setResult(total);
    } catch (err) {
      setError((err as Error).message);
      setResult(null);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef2f3 0%, #8e9eab 100%)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Inter, Arial, sans-serif',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          maxWidth: '500px',
          width: '100%',
          padding: '24px',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1594352161389-11756265d1b5?q=80&w=1000&auto=format&fit=crop"
          alt="Calculator visual"
          style={{
            width: '100%',
            height: '240px',
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />

        <h2 style={{ textAlign: 'center', marginTop: '20px', color: '#333' }}>
          String Calculator
        </h2>

        <p style={{ textAlign: 'center', color: '#777', marginBottom: '16px' }}>
          Enter numbers separated by commas or newlines.
        </p>

        <textarea
          style={{
            width: '100%',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '16px',
            color: '#333',
            outline: 'none',
            resize: 'none',
            height: '80px',
            transition: 'border-color 0.2s ease',
          }}
          placeholder="Example: 1,2,3 or 1\n2,3"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={(e) => (e.currentTarget.style.borderColor = '#008cba')}
          onBlur={(e) => (e.currentTarget.style.borderColor = '#ccc')}
        />

        <button
          onClick={handleCalculate}
          style={{
            marginTop: '16px',
            width: '100%',
            padding: '12px',
            backgroundColor: '#008cba',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background 0.3s ease, transform 0.1s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0079a1')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#008cba')}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Calculate
        </button>

        {result !== null && (
          <p
            style={{
              marginTop: '16px',
              color: 'green',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            ✅ Result: {result}
          </p>
        )}

        {error && (
          <p
            style={{
              marginTop: '16px',
              color: 'red',
              fontWeight: 600,
              textAlign: 'center',
            }}
          >
            ⚠️ {error}
          </p>
        )}

        {!error && result === null && (
          <div
            role="alert"
            style={{
              marginTop: '16px',
              backgroundColor: '#f9f9f9',
              borderRadius: '8px',
              padding: '10px',
              color: '#555',
              fontSize: '14px',
              textAlign: 'center',
            }}
          >
            💡 Make sure you enter valid numbers separated by commas or newlines.
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
