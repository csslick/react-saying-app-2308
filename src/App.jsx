import { useState } from 'react'

function App() {
  const saying_data = [
    '절대 어제를 후회하지 마라. 인생은 오늘의  내 안에 있고 내일은 스스로 만드는것이다. - L론허바드',
    '그대 자신의 영혼을 탐구하라.다른 누구에게도 의지하지 말고 오직 그대 혼자의 힘으로 하라. 그대의 여정에 다른 이들이 끼어들지 못하게 하라. 이 길은 그대만의 길이요,  그대 혼자 가야할 길임을 명심하라.  비록 다른 이들과 함께 걸을 수는 있으나 다른 그 어느 누구도 그대가 선택한 길을 대신 가줄 수 없음을 알라. -인디언 속담',
    '너무 소심하고 까다롭게 자신의 행동을 고민하지 말라 . 모든 인생은 실험이다 . 더많이 실험할수록 더나아진다 – 랄프 왈도 에머슨',
    '평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라. – 제임스 딘',
  ]

  const [saying, setSaying] = useState(saying_data);
  const [day, setDay] = useState('요일');
  const [month, setMonth] = useState('월');
  const [date, setDate] = useState('일');

  return (
    <div className="App">
      <div className="container">
        <div className="left">
          <p className="saying">{saying[0]}</p>
          <div className="date-info">
            <h3>{day}</h3>
            <p>
              <span className="month">{month}</span>/
              <span className="date">{date}</span>
            </p>
          </div>
        </div>
        <div className="right">
          <a href="#" className='link-btn'>더보기</a>
        </div>
      </div>
    </div>
  )
}

export default App
