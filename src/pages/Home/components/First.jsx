import * as React from 'react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ClearIcon from '@mui/icons-material/Clear';

import TypedText from '@/components/TypedText/TypedText';

import Star1 from '@/assets/images/star-1.svg';
import Star2 from '@/assets/images/star-2.svg';
import Star3 from '@/assets/images/star-3.svg';
import Star4 from '@/assets/images/star-4.svg';
import Star5 from '@/assets/images/star-5.svg';
import Star6 from '@/assets/images/star-6.svg';
import BotAI from '@/assets/images/bot-ai.svg';

import WebhookIcon from '@mui/icons-material/Webhook';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ArrowOutwardIcon from '@mui/icons-material/NorthEast';

export default function First() {
  const navigate = useNavigate();
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleClear = () => {
    setValue('');
    setIsFocused(true);
  };

  return (
    <Box
      id="first-page"
      sx={(theme) => ({
        width: '100%',
        // height: { sm: '70vh', md: '60vh' },
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFFFFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 43%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      {/* 背景 */}
      <div className="first-page-bg pointer-pass"></div>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <div
          className="first-page-logo-tips no-select"
          onClick={() => navigate('/dashboard')}
        >
          <img
            src={BotAI}
            alt="BotAI"
            style={{ height: '20px', marginRight: '7px' }}
          />
          <span>Free Q & A Engine</span>
          <div className="star star-1">
            <img src={Star1} alt="Star 1" />
          </div>
          <div className="star star-2">
            <img src={Star2} alt="Star 2" />
          </div>
          <div className="star star-3">
            <img src={Star3} alt="Star 3" />
          </div>
          <div className="star star-4">
            <img src={Star4} alt="Star 4" />
          </div>
          <div className="star star-5">
            <img src={Star5} alt="Star 5" />
          </div>
          <div className="star star-6">
            <img src={Star6} alt="Star 6" />
          </div>
        </div>
        <Stack
          spacing={0}
          useFlexGap
          sx={{
            width: { xs: '100%', sm: '70%' },
          }}
        >
          {/* <img
            src="/logo.svg"
            alt="logo"
            style={{ height: '100px', margin: '50px' }}
          /> */}
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            {/* Cortex-Logo */}
            <Typography
              component="span"
              variant="h1"
              className="first-page-mask"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light'
                    ? 'primary.main'
                    : 'primary.light',
                height: { xs: '8rem', sm: '10rem' },
              }}
            ></Typography>
          </Typography>
          <Typography
            component="h2"
            variant="h5"
            color="text.primary"
            sx={{
              textAlign: 'center',
              fontWeight: 500,
              transform: 'translateY(-0.5rem)',
            }}
          >
            <span className="cortex-font">一句话，为您搞定一切。</span>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'grey.400', mt: 1, textAlign: 'center' }}
          >
            千亿参数大模型无缝集成，数十项细分功能，贴近最原始使用场景，沉浸式超级全能
            AI 助手。
          </Typography>
          {/* PC */}
          <Box
            textAlign="center"
            color="text.secondary"
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignSelf: 'center',
              width: { sm: '100%', md: '80%' },
              mt: 5,
            }}
          >
            <div
              className="first-page-input"
              onClick={() => setIsFocused(true)}
            >
              <div className="title">AI帮我</div>
              <div style={{ flex: '1' }}>
                {isFocused ? (
                  <InputBase
                    placeholder="输入问题，让Cortex帮你解决"
                    value={value}
                    onChange={handleChange}
                    autoFocus
                    sx={{ flex: 1, width: '100%' }}
                    inputProps={{ 'aria-label': 'search' }}
                    onBlur={() => {
                      if (!value) {
                        setIsFocused(false);
                      }
                    }}
                  />
                ) : (
                  <TypedText
                    texts={[
                      '一处聊天，同时调用多个模型，选择最佳答案 ',
                      'AI 编码，无需人类插手 ',
                      '全平台一体化人工智能助手 ',
                    ]}
                  />
                )}
              </div>
              <ClearIcon
                style={{ display: value ? 'block' : 'none', cursor: 'pointer' }}
                onClick={handleClear}
              />
              <Button
                component="a"
                target="_blank"
                onClick={() => navigate('/dashboard')}
                sx={{
                  borderWidth: 0,
                  color: '#ffffff',
                  width: '80px',
                  marginLeft: '10px',
                  height: '35px',
                  borderRadius: '8px',
                  background:
                    'linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <AutoAwesomeIcon
                    style={{ fontSize: '1.2rem', margin: '0 3px 3px 0' }}
                  />
                  <span>发送</span>
                </span>
              </Button>
            </div>
          </Box>
          {/* 移动端 */}
          <Box
            textAlign="center"
            color="text.secondary"
            sx={{
              display: { sm: '', md: 'none' },
              width: '100%',
              mt: 5,
            }}
          >
            <div
              className="first-page-input"
              style={{
                width: '100%',
                minHeight: '150px',
                // height: '200px',
                padding: '0.5em 0.8em 3.5em 0.8em',
                alignItems: 'flex-start',
              }}
              onClick={() => setIsFocused(true)}
            >
              <div style={{ flex: '1', height: '100%' }}>
                {isFocused ? (
                  <InputBase
                    multiline
                    minRows={3}
                    maxRows={6}
                    placeholder="输入问题，让Cortex帮你解决"
                    value={value}
                    onChange={handleChange}
                    autoFocus
                    sx={{ flex: 1, width: '100%', lineHeight: '1.8em' }}
                    inputProps={{ 'aria-label': 'search' }}
                    onBlur={() => {
                      if (!value) {
                        setIsFocused(false);
                      }
                    }}
                  />
                ) : (
                  <div style={{ marginTop: '5px' }}>
                    <TypedText
                      texts={[
                        '一处聊天，同时调用多个模型，选择最佳答案 ',
                        'AI 编码，无需人类插手 ',
                        '全平台一体化人工智能助手 ',
                      ]}
                    />
                  </div>
                )}
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <ClearIcon
                  style={{
                    display: value ? 'block' : 'none',
                    cursor: 'pointer',
                  }}
                  onClick={handleClear}
                />
                <Button
                  component="a"
                  target="_blank"
                  onClick={() => navigate('/dashboard')}
                  sx={{
                    borderWidth: 0,
                    color: '#ffffff',
                    width: '80px',
                    marginLeft: '10px',
                    height: '35px',
                    borderRadius: '8px',
                    background:
                      'linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%)',
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center' }}>
                    <AutoAwesomeIcon
                      style={{ fontSize: '1.2rem', margin: '0 3px 3px 0' }}
                    />
                    <span>发送</span>
                  </span>
                </Button>
              </div>
            </div>
          </Box>
          <Box
            sx={{ width: { sm: '100%', md: '90%' }, margin: { md: 'auto' } }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 1, md: 2 },
                zIndex: 1,
                mt: { xs: 2, md: 4 },
              }}
            >
              <Box
                sx={{ width: { xs: '100%', md: 'auto' } }}
                onClick={() => navigate('/dashboard')}
              >
                <div className="first-page-input-tips first-page-input-tips-active">
                  <LocalFireDepartmentIcon className="pre-icon" />
                  帮我生成 {new Date().getFullYear()} 年度工作计划
                  <ArrowOutwardIcon className="icon" />
                </div>
              </Box>
              <Box
                sx={{ width: { xs: '100%', md: 'auto' } }}
                onClick={() => navigate('/dashboard')}
              >
                <div className="first-page-input-tips">
                  帮我写一份互联网运营计划报告
                  <ArrowOutwardIcon className="icon" />
                </div>
              </Box>

              <Box
                sx={{ width: { xs: '100%', md: 'auto' } }}
                onClick={() => navigate('/dashboard')}
              >
                <div className="first-page-input-tips">
                  帮我分析一下这个SQL查询语句
                  <ArrowOutwardIcon className="icon" />
                </div>
              </Box>
              <Box
                sx={{ display: { xs: 'none', md: 'block' } }}
                onClick={() => navigate('/dashboard')}
              >
                <div className="first-page-input-tips">
                  帮我优化一下简历
                  <ArrowOutwardIcon className="icon" />
                </div>
              </Box>
              <Box
                sx={{ display: { xs: 'none', md: 'block' } }}
                onClick={() => navigate('/dashboard')}
              >
                <div className="first-page-input-tips">
                  帮我解答生活百科知识
                  <ArrowOutwardIcon className="icon" />
                </div>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
