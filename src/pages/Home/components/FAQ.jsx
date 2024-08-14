import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      sx={{
        pt: { xs: 3, sm: 5 },
        pb: { xs: 5, sm: 8 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <span className="cortex-font">你想了解的</span>
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Cortex 主要有什么功能?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              可以用来智能对话、创作、阅读、写作、自动生成代码，写周报、快速翻译、快速总结，提高你的工作效率，此外也可以用来聊天，娱乐等等。
              <Link> 点这里快速体验 </Link>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              支持哪些大模型?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              通过Cortex，轻松访问GPT-3、GPT-4o、Gemini、Claude、文心一言、通义千问、星火认知等多个AI模型。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              Cortex 是免费的吗
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              您可以免费使用Cortex，我们提供免费功能和付费功能，可以通过每日登录获取金币，金币可以用来抵扣付费功能的使用。
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              谷歌浏览器插件在哪里下载?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: '100%', md: '70%' } }}
            >
              Cortex
              提供了一整套的AI插件，常驻在浏览器侧边栏，目前功能还在开发中，敬请期待。
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
      {/* <div
        style={{
          aspectRatio: '1 / 1',
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(3, 51, 99, 0.5) 39.0625%, rgba(2, 31, 59, 0) 100%)',
          width: '650px',
          zIndex: 0,
          position: 'absolute',
          left: '-0',
          top: '-102px',
          borderRadius: '100%',
          filter: 'blur(125px)',
        }}
      ></div> */}
    </Container>
  );
}
