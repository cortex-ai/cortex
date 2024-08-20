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
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

import Cortex from '/logo.svg';
import Chatgpt from '@/assets/images/chatgpt.svg';
import Claude from '@/assets/images/claude.svg';
import Gemini from '@/assets/images/gemini.svg';

import MenuList from '../MenuList/MenuList';

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
        {/* 右侧导航 */}
        <Stack className="bot-page-menu" spacing={0} useFlexGap>
          <MenuList />
        </Stack>

        <Stack
          className="session-record-container"
          spacing={0}
          useFlexGap
          sx={{
            width: '100%',
            flex: '1',
            overflow: 'auto',
            p: { xs: '1rem 0', md: '1.5rem 0' },
          }}
        >
          {/* 对话记录 */}
          <Box sx={{ position: 'relative' }}>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
            <Box
              className="session-record"
              sx={{ m: { xs: '2rem 0', md: '4rem 0' } }}
            >
              聊天记录一
            </Box>
          </Box>
          <Divider />
          {/* 联想 - 提示词语 */}
          <Box
            sx={{ width: { sm: '100%', md: '100%' }, margin: { md: 'auto' } }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: 'wrap',
                gap: { xs: 1, md: 2 },
                zIndex: 1,
                mt: { xs: 2, md: 2 },
              }}
            >
              <Box
                sx={{
                  width: { sm: '100%', md: 'auto' },
                }}
              >
                <div className="session-record-tips">
                  如何验证镜像源是否正确？
                </div>
              </Box>
              <Box>
                <div className="session-record-tips">
                  如何在Python中实现一个简单的HTTP服务器？
                </div>
              </Box>

              <Box>
                <div className="session-record-tips">
                  如何在Flask中处理POST请求？
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>
        <Stack
          className="bot-page-input-container"
          spacing={0}
          useFlexGap
          sx={{
            width: '100%',
          }}
        >
          <Box className="line-mask"></Box>
          {/* 聊天停止 */}
          <Box>
            <div className="bot-page-stop-response cortex-font no-select click-scale">
              <NotInterestedIcon className="stop-icon" />
              <span className="cortex-font">终止生成</span>
            </div>
          </Box>
          {/* 回到底部 */}
          <Box className="bot-page-to-bottom-btn no-select click-scale">
            <KeyboardDoubleArrowDownIcon className="bottom-icon" />
          </Box>
          {/* 提示词 */}
          {isFocused ? (
            <Box
              className="cortex-font"
              style={{
                fontWeight: '300',
                padding: '10px 0 0 2px',
                opacity: '0.8',
                fontSize: '0.8rem',
              }}
            >
              快捷键 @ 可以快速指定AI模型
            </Box>
          ) : (
            <Box className="bot-page-input-quick-helper no-select">
              <div className="bot-page-quick-prompt">
                <AutoAwesomeIcon className="icon" />
                <span>提示词模版</span>
              </div>
              <div className="bot-page-talk-summary">
                <CommentIcon className="icon" />
                <span>对话总结</span>
              </div>
              <div className="bot-page-talk-summary">
                <CommentIcon className="icon" />
                <span>对话总结</span>
              </div>
              <div className="bot-page-talk-summary">
                <CommentIcon className="icon" />
                <span>对话总结</span>
              </div>
              <div className="bot-page-talk-summary">
                <CommentIcon className="icon" />
                <span>对话总结</span>
              </div>
            </Box>
          )}

          {/* 聊天框 */}
          <Box
            textAlign="center"
            color="text.secondary"
            sx={{
              width: '100%',
              mt: 1,
              pb: 2,
            }}
          >
            <div
              className="bot-page-input-content"
              style={{
                width: '100%',
                padding: '0.5em 0.8em 2em 1em',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ flex: '1', height: '100%' }}>
                <InputBase
                  multiline
                  minRows={isFocused ? 3 : 2}
                  maxRows={6}
                  placeholder={`输入问题，让 ${selectedModel?.name} 帮你解决`}
                  value={inputValue}
                  onChange={handleChange}
                  sx={{
                    flex: 1,
                    width: '100%',
                    lineHeight: '1.8em',
                    transition: 'min-height 0.2s linear,',
                    minHeight: isFocused ? '5.4em' : '3.6em',
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                  onBlur={() => {
                    if (!inputValue) {
                      setIsFocused(false);
                    }
                  }}
                  onClick={() => setIsFocused(true)}
                />
              </div>
              <div className="bot-page-input-bottom">
                <Box className="left">
                  {isOpenModel && (
                    <Box className="bot-page-input-model-box">
                      <div className="model-title cortex-font">AI模型</div>
                      <div className="model-list">
                        {modelData.map((model) => (
                          <div
                            key={model.id}
                            onClick={() => handleModelClick(model)}
                            className={`model-item ${
                              selectedModel?.id === model.id ? 'selected' : ''
                            }`}
                          >
                            <img
                              src={model.icon}
                              alt={model.name}
                              className="model-icon"
                            />
                            <div>
                              <div className="model-name">{model.name}</div>
                              <div className="model-description">
                                {model.description}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </Box>
                  )}
                  <Button
                    className="bot-page-input-btn"
                    onClick={handleOpenModel}
                    variant="text"
                    sx={{
                      backgroundColor: isOpenModel
                        ? 'rgba(9, 89, 170, 0.1)'
                        : '',
                    }}
                  >
                    <img
                      src={selectedModel?.icon}
                      alt={selectedModel?.name}
                      className="model-icon"
                    />
                    <span className="cortex-font">
                      {selectedModel?.name || 'Cortex AI'}
                    </span>
                    <ExpandMoreIcon
                      sx={{
                        fontSize: '1.2rem',
                        ml: '0.3rem',
                        color: 'rgba(191, 204, 217, 0.8)',
                      }}
                    />
                  </Button>

                  <Divider
                    sx={{
                      height: '16px',
                      mr: '0.5rem',
                      mt: '10px',
                    }}
                    className="btn"
                    variant="middle"
                    orientation="vertical"
                    flexItem
                  />
                  <div className="btn file"></div>
                  {/* <AddCircleOutlineIcon
                    className="btn add click-scale"
                    style={{
                      cursor: 'pointer',
                    }}
                  /> */}
                  {/* <FileOpenIcon
                    className="btn file"
                    style={{
                      cursor: 'pointer',
                    }}
                  /> */}
                </Box>
                <Box className="right">
                  {/* 清空 */}
                  <ClearIcon
                    className="btn"
                    style={{
                      display: inputValue ? 'block' : 'none',
                      cursor: 'pointer',
                      filter: 'grayscale(100%)',
                    }}
                    onClick={() => handleClear()}
                  />
                  <Divider
                    sx={{
                      height: '16px',
                      m: '0 1rem',
                      mt: '3px',
                    }}
                    className="btn"
                    variant="middle"
                    orientation="vertical"
                    flexItem
                  />
                  {/* 发送 */}
                  <SendIcon
                    className={`btn ${inputValue ? 'click-scale' : 'no-click'}`}
                  />
                </Box>
              </div>
            </div>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
