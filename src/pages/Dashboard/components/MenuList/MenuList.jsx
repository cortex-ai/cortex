import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Cortex from '/logo.svg';
import BotChat from '@/assets/images/bot-chat-fff.svg';
import BotTranslate from '@/assets/images/bot-translate.svg';
import BotSearch from '@/assets/images/bot-search.svg';
import BotCoding from '@/assets/images/bot-coding.svg';
import BotVoice from '@/assets/images/bot-voice.svg';
import BotOCR from '@/assets/images/bot-ocr.svg';

import './MenuList.scss';

const MenuList = () => {
  const icons = [
    {
      id: 'cortex',
      name: 'Cortex',
      icon: Cortex,
      path: '/',
    },
    {
      id: 'dashboard',
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
      return {
        transform: 'scale(1.5) translateY(4px) translateX(-7.5px)',
        margin: '16px 0 8px 0',
      };
    } else if (index === focusedIndex - 1 || index === focusedIndex + 1) {
      return {
        transform: 'scale(1.25) translateY(2px) translateX(-4.5px)',
        margin: '11px 0 7px 0',
      };
    } else if (index === focusedIndex - 2 || index === focusedIndex + 2) {
      return {
        transform: 'scale(1.05) translateX(-1px)',
        margin: '3px 0 5px 0',
      };
    }
    return {};
  };

  return (
    <Box className="menu-list-page">
      <Box className="bot-page-menu-container">
        {icons.map((icon, index) => (
          <div key={icon.id}>
            <div
              onMouseOver={() => handleMouseOver(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                ...getScaleStyle(index),
                ...(index === 0
                  ? {
                      boxShadow: 'none',
                      backgroundImage: 'none',
                      margin: '2px 0 8px 0',
                      padding: 0,
                    }
                  : {}),
              }}
              onClick={() => handleClick(icon.path)}
              className={`bot-page-menu-item ${
                location.pathname === icon.path ? 'active' : ''
              }`}
            >
              <img
                src={icon.icon}
                alt={icon.name}
                style={{
                  width: index === 0 ? '90%' : '100%',
                }}
              />
            </div>
            {index === 0 && <Divider sx={{ m: 0.4 }} />}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default MenuList;
