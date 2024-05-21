import styles from '../../styles/result.module.css';
import Answer from './Answer';

export type ResultType = {
  qNum: number;
  content1: string;
  content2: string;
  ratio1: number;
  ratio2: number;
};

const ResultContainer = ({ qNum, content1, content2, ratio1, ratio2 }: ResultType) => {
  const isMajor = (ratio: number, isRatio1: boolean): boolean => {
    if (isRatio1) {
      return ratio >= ratio2;
    } else {
      return ratio >= ratio1;
    }
  };

  return (
    <div className={styles.result_container}>
      <div className={styles.q_num}>Q{qNum}</div>
      <div className={styles.answers_list}>
        <Answer content={content1} ratio={ratio1} isMajor={isMajor(ratio1, true)} />
        <Answer content={content2} ratio={ratio2} isMajor={isMajor(ratio2, false)} />
      </div>
    </div>
  );
};

export default ResultContainer;
