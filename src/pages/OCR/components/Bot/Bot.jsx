import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ClearIcon from '@mui/icons-material/Clear';
import SendIcon from '@mui/icons-material/Send';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import FileOpenIcon from '@mui/icons-material/DriveFileMove';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CommentIcon from '@mui/icons-material/Comment';
import ChatIcon from '@mui/icons-material/Chat';
import CodeIcon from '@mui/icons-material/Code';
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import Cortex from '/logo.svg';
import Chatgpt from '@/assets/images/chatgpt.svg';
import Claude from '@/assets/images/claude.svg';
import Gemini from '@/assets/images/gemini.svg';

import './Bot.scss';

const modelData = [
  { id: '1', name: 'Cortex AI', description: '可完成简单任务', icon: Cortex },
  { id: '2', name: 'GPT-3', description: '适用于高度复杂任务', icon: Chatgpt },
  { id: '3', name: 'Claude 3.5', description: 'Anthropic出品', icon: Claude },
  {
    id: '4',
    name: 'Gemini 1.5',
    description: 'Google最先进的模型',
    icon: Gemini,
  },
  { id: '5', name: 'GPT-4o', description: 'OpenAI第四代模型', icon: Chatgpt },
  { id: '6', name: 'Claude 3.5', description: 'Anthropic出品', icon: Claude },
  {
    id: '7',
    name: 'Gemini 1.5',
    description: 'Google最先进的模型',
    icon: Gemini,
  },
  { id: '8', name: 'GPT-4o', description: 'OpenAI第四代模型', icon: Chatgpt },
];

export default function Bot() {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleClear = () => {
    setInputValue('');
    setIsFocused(false);
  };

  const [isOpenModel, setIsOpenModel] = useState(false);
  const handleOpenModel = (event) => {
    setIsOpenModel(!isOpenModel);
  };
  const [selectedModel, setSelectedModel] = useState(null);
  const handleModelClick = (model) => {
    setSelectedModel(model);
    setIsOpenModel(false);
  };
  useEffect(() => {
    if (modelData && modelData.length > 0) {
      setSelectedModel(modelData[0]);
    }
  }, []);

  return (
    <Box
      id="bot-page"
      sx={(theme) => ({
        width: '100%',
        height: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFFFFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 43%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          height: '100%',
          width: { xs: '100%', md: '70%' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Stack>OCR页面</Stack>
      </Container>
    </Box>
  );
}
