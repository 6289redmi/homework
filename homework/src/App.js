import './App.css';
import React from 'react';
import Title from './components/Title';
import Main from './components/Main';
import Button from './components/Button';

const jsonLocalStorage = {
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key) => {
        return JSON.parse(localStorage.getItem(key))
    },
  }

const App = () => {
    const [winScore, setWinScore] = React.useState(() => {
            return jsonLocalStorage.getItem('winScore') || 0;
    });
    const [drawScore, setDrawScore] = React.useState(() => {
            return jsonLocalStorage.getItem('drawScore') || 0;
    });
    const [loseScore, setLoseScore] = React.useState(() => {
            return jsonLocalStorage.getItem('loseScore') || 0;
    });
    const [userSelect, setUserSelect] = React.useState('✊🏻');
    const [comSelect, setComSelect] = React.useState('✊🏻');
    
    function win() {
        setWinScore((pre) => {
            const nextWinScore = pre +1;
            jsonLocalStorage.setItem('winScore', nextWinScore);
            return nextWinScore;
        });  
    }
    function draw() {
        setDrawScore((pre) => {
            const nextDrawScore = pre +1;
            jsonLocalStorage.setItem('drawScore', nextDrawScore);
            return nextDrawScore;
        });    
    }
    function lose() {
        setLoseScore((pre) => {
            const nextLoseScore = pre +1;
            jsonLocalStorage.setItem('loseScore', nextLoseScore);
            return nextLoseScore;
        });    
    }
    function clean() {
        setWinScore(() => {
            const winClean = 0;
            jsonLocalStorage.setItem('winScore', winClean);
            return winClean;
        });
        setDrawScore(() => {
            const drawClean = 0;
            jsonLocalStorage.setItem('drawScore', drawClean);
            return drawClean;
        });
        setLoseScore(() => {
            const loseClean = 0;
            jsonLocalStorage.setItem('loseScore', loseClean);
            return loseClean;
        });
    }

    function play(user) {
    const array = ['✊🏻', '✋🏻', '✌🏻'];
    const random = Math.floor(Math.random() * 3);
    const computer = array[random];

    setUserSelect(user);
    setComSelect(computer);

    if (user === computer) {
        alert('무승부');
        draw();
        } else if (
            (user === '✊🏻' && computer === '✌🏻') ||
            (user === '✋🏻' && computer === '✊🏻') ||
            (user === '✌🏻' && computer === '✋🏻')
        ) {
            alert('사용자 승');
            win();
        } else {
            alert('컴퓨터 승');
            lose();
        }
    }
    return (
    <div>
        <Title />
        <Main 
            winScore={winScore} 
            drawScore={drawScore}  
            loseScore={loseScore}
            userSelect={userSelect}
            comSelect={comSelect}
        />
        <Button 
            win={win} 
            draw={draw}  
            lose={lose}
            clean={clean}
            play={play}  
        />
    </div>
  );
}

export default App;
