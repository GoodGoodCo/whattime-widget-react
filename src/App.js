import './App.css';
import {useEffect} from "react";

const SAMPLE_CODE = 'dH2zvP4wxp';

function App() {
	useEffect(() => {
		window.WhatTime._autoLoadInlineWidgets();

		const isWhatTimeEvent = (e) => {
			return e.data.event && e.data.event.indexOf('whattime') === 0;
		}
		// https://guide.whattime.co.kr/help/getting-started/share/embed/dev#listen_event
		window.addEventListener('message', function (e) {
			if (isWhatTimeEvent(e)) {
				console.log("Event Name :", e.data.event);
				console.log("Event Details : ", e.data.payload);
			}
		});
	}, [])

	const onClick = () => {
		window.WhatTime.initPopupWidget({
			code: SAMPLE_CODE,
		})
	}

	return (
		<div className="App">
			<button onClick={onClick}>팝업 열기</button>
			<div className="whattime-inline-widget" data-code={SAMPLE_CODE} style={{minWidth: "320px", height: "660px"}}/>
		</div>
	);
}

export default App;
