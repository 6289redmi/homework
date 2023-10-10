const Main = ({ winScore, drawScore, loseScore, userSelect, comSelect }) => {
  return (
      <div>
          <div className="result">{winScore}승 {drawScore}무 {loseScore}패</div>
          <div className="play">
              <span className="user">User</span>
              <span className="com">Com</span>
          </div>
          <div className="text">
              <span>{userSelect}</span>
              <span>VS</span>
              <span>{comSelect}</span>
          </div>
      </div>
  );
}

export default Main;
