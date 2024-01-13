import ToolCard from './components/ToolCard';
import styles from './index.less';

const App = () => {
  const tools = [
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    // { name: '工具名发撒地方称 #1', description: '工具描述 #1', link: '/tool1', image: 'https://pic2.zhimg.com/80/v2-739be6c4b96526f703861e9c3017cd69_1440w.webp' },
    { name: '语音转文字', description: 'JS原生录音转文字API', link: '/speechToText' },
    // 添加更多工具...
  ];

  return (
    <div className={styles.app}>
      {/* <header className={styles.header}>
        <h1>我的工具列表</h1>
      </header> */}
      <main className={styles.toolList}>
        {tools.map((tool, index) => (
          <ToolCard key={index} {...tool} />
        ))}
      </main>
    </div>
  );
};

export default App;
