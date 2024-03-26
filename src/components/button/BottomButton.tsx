import styles from '../../styles/button.module.css';

const BottomButton = ({ content, isActive }: { content: string; isActive: boolean }) => {
  return (
    <div className={isActive ? styles.container : styles.container_inactive}>
      <div className={isActive ? styles.content : styles.content_inactive}>{content}</div>
    </div>
  );
};
export default BottomButton;
