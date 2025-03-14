import React, { useState } from 'react';
import './App.css';
import { FButton, toast, FLoading, FSwitch,FRadio } from 'febui-react'

function App() {
  const [ss,setSS] = useState(false)
  return (
    <div className="App">
      <FButton variant="text" onClick={() => {
        toast.success('success')
      }}></FButton>
      <FLoading></FLoading>
      <FSwitch></FSwitch>
      <FRadio value={ss}>测试</FRadio>
    </div>
  );
}

export default App;
