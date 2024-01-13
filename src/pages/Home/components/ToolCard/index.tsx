// import React from 'react';
// import styles from './index.less';

// // 用于生成随机颜色
// const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

// // 生成随机渐变背景
// const generateGradient = () => {
//   const color1 = randomColor();
//   const color2 = randomColor();
//   return `linear-gradient(to right, ${color1}, ${color2})`;
// };

// const ToolCard = ({ name, description, link, image }) => {
//   // 根据是否有图像来确定背景样式
//   const cardStyle = {
//     backgroundImage: image ? `url(${image})` : generateGradient(),
//   };

//   return (
//     <div className={styles.card} style={cardStyle} onClick={() => window.location.href = link}>
//       <div className={styles.content}>
//         <h2>{name}</h2>
//         {description && <p>{description}</p>}
//       </div>
//     </div>
//   );
// };

// export default ToolCard;

import styles from './index.less';

const randomGradient = () => {
  const color1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const color2 = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return `linear-gradient(135deg, ${color1}, ${color2})`;
};

interface ITooCardProps {
  name: string;
  description?: string;
  link: string;
  image?: string;
}

const ToolCard = ({ name, description, link, image }: ITooCardProps) => {
  const backgroundImage = image ? `url(${image})` : randomGradient(); // 设置背景图或渐变色

  return (
    <div className={styles.card} onClick={() => window.location.href = link}>
      <div className={styles.image} style={{ backgroundImage }} />
      <div className={styles.details}>
        <h2 className={styles.title}>{name}</h2>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  );
};

export default ToolCard;

