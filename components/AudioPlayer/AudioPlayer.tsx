import { useEffect, useState } from 'react';
import {
  Container,
  Divider,
  Grid,
  Paper,
  IconButton,
  Typography,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import styles from './AudioPlayer.module.scss';

interface AuthorProps {
  link?: string;
}

export default function AudioPlayer(props: AuthorProps) {
  const [paused, setPaused] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    //@ts-ignore
    setAudio(new Audio(props.link || ''));
  }, []);

  const handleAudioButtonClick = () => {
    console.log('asd');
    if (audio == null) {
      return;
    }

    //@ts-ignore
    audio.play();
  };

  return (
    <Paper className={`${styles.audioPlayerContainer} content`}>
      <IconButton
        className={styles.audioButton}
        size="medium"
        onClick={handleAudioButtonClick}
      >
        {paused ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>

      <p className={styles.currentTime}>
        0:00
        {/* {audio?.currentTime} */}
      </p>

      <div className={styles.audioPlayerProgressContainer}>
        <div className={styles.audioPlayerProgress}></div>
      </div>

      <p className={styles.totalLength}>
        12:33
        {/* {audio?.duration} */}
      </p>
    </Paper>
  );
}
