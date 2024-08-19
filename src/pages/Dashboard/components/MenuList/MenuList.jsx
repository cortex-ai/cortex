import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';

import Cortex from '/logo.svg';
import BotChat from '@/assets/images/bot-chat.jpg';
import BotTranslate from '@/assets/images/bot-translate.jpg';
import BotSearch from '@/assets/images/bot-search.jpg';
import BotCoding from '@/assets/images/bot-coding.jpg';
import BotVoice from '@/assets/images/bot-voice.jpg';
import BotOCR from '@/assets/images/bot-ocr.jpg';

import './MenuList.scss';

const MenuList = () => {
  const icons = [
    {
      id: 'dashboard', // 添加唯一标识符
      name: 'AI 对话',
      icon: BotChat,
      path: '/dashboard',
    },
    {
      id: 'translate',
      name: 'AI 翻译',
      icon: BotTranslate,
      path: '/translate',
    },
    {
      id: 'search',
      name: 'AI 搜索',
      icon: BotSearch,
      path: '/search',
    },
    {
      id: 'coding',
      name: 'AI 编码',
      icon: BotCoding,
      path: '/coding',
    },
    {
      id: 'voice',
      name: 'AI 语音',
      icon: BotVoice,
      path: '/voice',
    },
    {
      id: 'ocr',
      name: 'OCR',
      icon: BotOCR,
      path: '/ocr',
    },
  ];
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (path) => {
    if (location.pathname !== path) {
      navigate(path);
    }
  };
  const [focusedIndex, setFocusedIndex] = useState(null);

  const handleMouseOver = (index) => {
    setFocusedIndex(index);
  };

  const handleMouseLeave = () => {
    setFocusedIndex(null);
  };

  const getScaleStyle = (index) => {
    if (focusedIndex === null) {
      return {};
    }
    // 获取当前图标的缩放状态
    if (index === focusedIndex) {
      return { transform: 'scale(1.3) translateY(4px) translateX(-8px)' }; // 缩小到 1.3
    } else if (index === focusedIndex - 1 || index === focusedIndex + 1) {
      return { transform: 'scale(1.1) translateY(2px) translateX(-4px)' }; // 缩小到 1.1
    } else if (index === focusedIndex - 2 || index === focusedIndex + 2) {
      return { transform: 'scale(1.05)' }; // 缩小到 1.05
    }
    return {};
  };

  return (
    <Box className="menu-list-page">
      <Box className="bot-page-menu-top" onClick={() => navigate('/')}>
        <img src={Cortex} alt="Cortex" />
      </Box>
      <Divider sx={{ width: '70%', ml: 0.6, borderColor: '#ffffff' }} />
      <Box className="bot-page-menu-container">
        {icons.map((icon, index) => (
          <Tooltip
            title={icon.name}
            arrow
            placement="left"
            TransitionComponent={Zoom}
            key={icon.id}
          >
            <div
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
              style={getScaleStyle(index)}
              onClick={() => handleClick(icon.path)}
              className={`bot-page-menu-item ${
                location.pathname === icon.path ? 'active' : ''
              }`}
            >
              <img src={icon.icon} alt={icon.name} />
            </div>
          </Tooltip>
        ))}
      </Box>
    </Box>
  );
};

export default MenuList;
