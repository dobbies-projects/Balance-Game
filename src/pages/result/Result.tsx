import { Link } from 'react-router-dom';
import BottomButton from '../../components/button/BottomButton';
import IconChatFill from '../../components/icon/IconChatFill';
import IconLink from '../../components/icon/IconLink';
import ResultContainer from '../../components/result/ResultContainer';
import styles from '../../styles/result.module.css';

const results_dummy_data = [
  {
    id: 1,
    content1: '나 빼고 다 천재인 팀에서 숨 쉬듯 자괴감 느끼기',
    content2: '내가 유일한 희망인 팀에서 혼자 소처럼 일하기',
    ratio1: 36,
    ratio2: 64,
  },
  {
    id: 2,
    content1: '2분마다 꺼지는 컴퓨터(자동 저장 가능)',
    content2: '한 타 치는데 2초 걸리는 컴퓨터',
    ratio1: 50,
    ratio2: 50,
  },
  {
    id: 3,
    content1: '천지인 자판으로 타자 치기',
    content2: '음성인식으로 타자 치기',
    ratio1: 98,
    ratio2: 2,
  },
  {
    id: 4,
    content1: '스마트폰 키보드+외장 모니터',
    content2: '스마트폰 화면+외장 키보드',
    ratio1: 38,
    ratio2: 62,
  },
];

const handleCopyClipBoard = async (text: string): Promise<void> => {
  try {
    await navigator.clipboard.writeText(text);
    alert('링크가 복사되었습니다.');
  } catch (error) {
    console.log(error);
  }
};

const Result = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>결과</div>
      <div className={styles.subTitle}>다른 사람은 이렇게 선택했어요.</div>

      {/* 답변 비율 */}
      {results_dummy_data.map((result) => (
        <ResultContainer
          key={result.id}
          qNum={result.id}
          content1={result.content1}
          content2={result.content2}
          ratio1={result.ratio1}
          ratio2={result.ratio2}
        />
      ))}

      <div style={{ width: '100%', height: '50px' }}></div>

      {/* 공유 */}
      <div className={styles.title}>공유하기</div>
      <div className={styles.share_container}>
        <div className={styles.kakao}>
          <IconChatFill />
        </div>
        <div className={styles.link}>
          <IconLink />
          <div
            className={styles.link_text}
            onClick={() => handleCopyClipBoard('https://dobbies-balance-game.netlify.app')}
          >
            링크 복사
          </div>
        </div>
      </div>
      <Link to={`/`} style={{ textDecoration: 'none' }}>
        <BottomButton content={'다시 하기'} isActive={true} />
      </Link>
    </div>
  );
};

export default Result;
