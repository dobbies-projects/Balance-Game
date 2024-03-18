import { Link } from 'react-router-dom';
import global from '../../styles/global.module.css';
import styles from '../../styles/game.module.css';

const Game = () => {
  return (
    <div className={global.container}>
      <div className={styles.title}>당신의 선택은?</div>
      <div>
        <Link to={`/result`}>결과 화면으로 이동</Link>
      </div>
    </div>
  );
};

export default Game;
