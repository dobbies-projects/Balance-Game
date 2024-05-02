import { Link } from 'react-router-dom';
import global from '../../styles/global.module.css';
import styles from '../../styles/home.module.css';

const Home = () => {
  return (
    <div className={global.container}>
      <div className={styles.title}>밸런스 게임</div>
      <div className={styles.text}>당신의 직업을 골라주세요!</div>
      <div>
        <Link to={`game/1`} style={{ textDecoration: 'none' }}>
          <button className={styles.buttonStudent}> 대학생 </button>
        </Link>
      </div>
      <div>
        <Link to={`game/2`} style={{ textDecoration: 'none' }}>
          <button className={styles.buttonWorker}> 직장인 </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
