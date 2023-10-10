const Button = ({ clean, play }) => {
  function game(user) {
      play(user);
  }
  return (
      <div>
          <h2>버튼을 누르세요.</h2>
          <div>
              <button className="button" onClick={() => game('✊🏻')}>✊🏻</button>
              <button className="button" onClick={() => game('✋🏻')}>✋🏻</button>
              <button className="button" onClick={() => game('✌🏻')}>✌🏻</button>
          </div>
          <div>
              <button className="reset-button" onClick={clean}>초기화</button>
          </div>
      </div>
  );
}

export default Button;
