import styles from '../../styles/result.module.css';

export type AnswerType = {
  content: string;
  ratio: number;
  isMajor: boolean;
};

const Answer = ({ content, ratio, isMajor }: AnswerType) => {
  return (
    <div className={isMajor ? styles.answer_majority : styles.answer}>
      <div
        className={isMajor ? styles.answer_progress_bar_majority : styles.answer_progress_bar}
        style={{ width: `${ratio}%` }}
      ></div>
      <div className={isMajor ? styles.answer_content_majority : styles.answer_content}>{content}</div>
      <div className={isMajor ? styles.answer_ratio_majority : styles.answer_ratio}>{ratio}%</div>
    </div>
  );
};

export default Answer;
