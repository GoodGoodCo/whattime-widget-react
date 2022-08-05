import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.WhatTime._autoLoadInlineWidgets();
  }, [])

  const onClick = () => {
    window.WhatTime.initPopupWidget({
      code: 'pEvozkjcyq',
    })
  }

  return (
    <div className="App">
      <button onClick={onClick}>팝업 열기</button>
      <div className="whattime-inline-widget" data-code="pEvozkjcyq" style={{minWidth: "320px", height: "660px"}} />
    </div>
  );
}

export default App;
