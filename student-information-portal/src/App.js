import './App.css';
import StudentTable from './components/StudentTable';
import { students } from './data/StudentsDb';
import { useState } from 'react';

function App() {

  const [fontSize, setFontSize] = useState(16);

  const handleFontSizeChange = (size) => {
    setFontSize(size);
  };

  return (
    <div className="App" style={{ fontSize: `${fontSize}px` }}>
      <h2>Student Information Portal</h2>
      <hr/>
      <p align="left">Font Size: 
        <button onClick={() => handleFontSizeChange(16)}>S</button>
        <button onClick={() => handleFontSizeChange(20)}>M</button>
        <button onClick={() => handleFontSizeChange(24)}>L</button>
      </p>
      
      <hr/>
      <table width="100%">
        <tbody>
          <tr>
            <td>
              <StudentTable students={students}/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
