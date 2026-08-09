import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', lab: 'JSRM Labs', version: 'v1.0.4-lab' });
  });

  // Lead inquiry endpoint
  app.post('/api/inquire', (req, res) => {
    const { name, email, company, projectType, budget, message } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    // Simulate lead registration
    console.log('[JSRM Labs Lead Captured]', { name, email, company, projectType, budget, message });
    return res.json({
      success: true,
      message: 'Inquiry received. A JSRM Labs engineering lead will respond within 4 business hours.',
      refId: `JSRM-${Math.floor(100000 + Math.random() * 900000)}`
    });
  });

  // Gemini AI Project Scope & Cost Estimator API
  app.post('/api/estimate', async (req, res) => {
    try {
      const { prompt, projectType, timeline, features, targetAudience } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        // Fallback intelligent response if API key is not configured in local environment
        return res.json({
          estimatedCost: projectType === 'enterprise' ? '$25,000 - $45,000+' : projectType === 'growth' ? '$12,000 - $18,000' : '$5,000 - $8,000',
          estimatedDuration: timeline || '6-8 Weeks',
          recommendedTechStack: ['React.js', 'Node.js/Express', 'AWS Serverless', 'Gemini / OpenAI API', 'Tailwind CSS'],
          keyMilestones: [
            'Phase 1: Architecture Blueprint & UI/UX Design System (Week 1-2)',
            'Phase 2: Core Engineering & Agentic AI Workflows (Week 3-5)',
            'Phase 3: QA, Load Testing & Security Audit (Week 6-7)',
            'Phase 4: Cloud Run / AWS Deployment & Post-Launch Monitoring (Week 8)'
          ],
          aiScopeSummary: `Tailored ${projectType || 'Software'} solution focused on high-precision engineering, scalable API architecture, and seamless automated workflows for ${targetAudience || 'high-growth enterprises'}.`
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const systemInstruction = `You are the Lead Systems Architect at JSRM Labs (a premium AI & Modern Software Engineering Lab).
Provide a concise, JSON-formatted technical scope and estimate for a software engineering project proposal based on client requirements.
Respond ONLY with a valid JSON object with the following fields:
- estimatedCost: string (e.g. "$15,000 - $22,000")
- estimatedDuration: string (e.g. "6-8 Weeks")
- recommendedTechStack: array of string (e.g. ["React.js", "Node.js", "AWS Lambda", "Gemini 2.5 Flash", "PostgreSQL"])
- keyMilestones: array of string (4 clear milestone phases)
- aiScopeSummary: string (a sharp, authoritative 2-sentence technical summary of how JSRM Labs will engineer this solution)
- keyRisksAndMitigations: string (a 1-sentence engineering risk mitigation note)
`;

      const userPrompt = `Project Type: ${projectType || 'Custom Web Application'}
Target Timeline: ${timeline || '6-8 weeks'}
Requested Features: ${Array.isArray(features) ? features.join(', ') : features || 'AI Automation, Custom Dashboard, API integration'}
Client Project Description: ${prompt || 'High performance web application with AI automation.'}
Target Audience: ${targetAudience || 'Enterprise users'}
`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `${systemInstruction}\n\n${userPrompt}`,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const responseText = response.text || '';
      try {
        const parsed = JSON.parse(responseText);
        return res.json(parsed);
      } catch (parseError) {
        return res.json({
          estimatedCost: '$15,000 - $22,000',
          estimatedDuration: '6-8 Weeks',
          recommendedTechStack: ['React.js', 'Node.js', 'AWS', 'Gemini AI API', 'Tailwind CSS'],
          keyMilestones: [
            'Phase 1: Discovery & Architecture Blueprint',
            'Phase 2: Full-Stack MVP Engineering',
            'Phase 3: AI Integration & Testing',
            'Phase 4: Deployment & Scaling'
          ],
          aiScopeSummary: responseText || 'Precision engineering roadmap tailored to high-growth requirements.'
        });
      }
    } catch (err) {
      console.error('Gemini estimate error:', err);
      return res.status(500).json({
        error: 'Failed to generate AI estimate',
        details: err?.message || 'Unknown error'
      });
    }
  });

  // Vite middleware for development or static serving for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[JSRM Labs] Dev server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
