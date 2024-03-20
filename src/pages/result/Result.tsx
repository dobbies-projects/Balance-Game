import { Link } from 'react-router-dom';
import global from '../../styles/global.module.css';
import styles from '../../styles/result.module.css';

const Result = () => {
  return (
    <div className={global.container}>
      <div className={styles.title}>결과</div>
      <div>다른 사람은 이렇게 선택했어요.</div>
      <div>공유하기</div>
      <div></div>
      <div>
        <Link to={`/`}>홈으로 이동</Link>
      </div>
    </div>
  );
};

export default Result;
