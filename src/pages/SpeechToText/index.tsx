import { useState, useEffect } from 'react';
import { Button, Spin } from 'antd';

import styles from './index.less';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const SpeechToText = () => {
  const [recognition, setRecognition] = useState<SpeechRecognition>();
  const [transcript, setTranscript] = useState('');
  const [interimTranscript, setInterimTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    if (!SpeechRecognition) {
      alert('你的浏览器不支持语音识别功能。');
    }

    const recognitionInstance = new SpeechRecognition();
    recognitionInstance.continuous = true;
    recognitionInstance.interimResults = true;
    recognitionInstance.lang = 'zh-CN';

    recognitionInstance.onresult = (event) => {
      let interim = '';
      let final = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        if (event.results[i].isFinal) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }

      setTranscript((prevTranscript) => prevTranscript + final);
      setInterimTranscript(interim);
    };

    recognitionInstance.onerror = (event) => {
      if (event.error === 'not-allowed') {
        alert('系统已阻止本网页使用您的麦克风权限，请前往开启');
      } else {
        alert('录音失败，请打开控制台查看详情');
      }
      console.error('Speech recognition error', event);
    };

    recognitionInstance.onend = () => {
      setIsListening(false);
      console.log('Speech recognition service disconnected');
    };

    setRecognition(recognitionInstance);
  }, []);

  const startListening = () => {
    if (recognition) {
      setIsListening(true);
      recognition.start();
    }
  };

  const stopListening = () => {
    if (recognition && isListening) {
      recognition.stop();
      setIsListening(false);
    }
  };

  return (
    <div className={styles["speech-to-text-container"]}>
      <div className={styles["transcript-container"]}>
        {/* <Typography.Paragraph> */}
        {transcript}
        <i style={{ color: '#ddd' }}>{interimTranscript}</i>
        {/* </Typography.Paragraph> */}
      </div>
      <div className={styles["controls-container"]}>
        {isListening && (
          <Spin size="small" />
        )}
        {
          isListening ? (
            <Button
              onClick={stopListening}
              disabled={!isListening}
              style={{ marginLeft: '10px' }}
            >
              暂停语音识别
            </Button>
          ) : (
            <Button
              onClick={startListening}
              disabled={isListening}
              type="primary"
            >
              开始语音识别
            </Button>
          )
        }
      </div>
    </div>
    // <div>
    //   <Button onClick={startListening} disabled={isListening}>
    //     开始语音识别
    //   </Button>
    //   <Typography.Paragraph style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', minHeight: '100px' }}>
    //     {transcript}
    //     <i style={{ color: '#ddd' }}>{interimTranscript}</i>
    //   </Typography.Paragraph>
    // </div>
  );
};

export default SpeechToText;
