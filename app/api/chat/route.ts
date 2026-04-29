import { google } from '@ai-sdk/google';
import { createOpenAI } from '@ai-sdk/openai';
import { convertToModelMessages, streamText } from 'ai';
import { PROJECTS, SKILLS, EXPERIENCE, EDUCATION, ACHIEVEMENTS } from '@/app/components/data';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const portfolioData = `
Here is the data for Kola Abdul Khadiri's portfolio:

Skills: ${SKILLS.map((s) => s.name).join(', ')}

Experience:
${EXPERIENCE.map((e) => `- ${e.role} at ${e.company} (${e.period}): ${e.desc}`).join('\n')}

Education:
${EDUCATION.degree} from ${EDUCATION.school} (${EDUCATION.period}), CGPA: ${EDUCATION.cgpa}

Projects:
${PROJECTS.map((p) => `- ${p.title}: ${p.description} (Tech: ${p.tech.join(', ')})`).join('\n')}

Achievements:
${ACHIEVEMENTS.map((a) => `- ${a.title} at ${a.organization} (${a.year}): ${a.description}`).join('\n')}
  `;

  const systemPrompt = `
You are an AI assistant for Kola Abdul Khadiri's portfolio website. 
You must ONLY answer questions related to Kola Abdul Khadiri, his skills, experience, projects, education, and achievements.
If the user asks about anything else, politely decline and steer the conversation back to Kola's portfolio.
Answer concisely and professionally.

${portfolioData}
  `;

  const openrouterApiKey = process.env.OPENROUTER_API_KEY;
  const nvidiaApiKey = process.env.NVIDIA_API_KEY;
  const openrouterModelFromEnv = process.env.OPENROUTER_MODEL?.trim();
  const openrouterModel =
    openrouterModelFromEnv && !openrouterModelFromEnv.startsWith('openai/tencent/')
      ? openrouterModelFromEnv
      : 'openai/gpt-4o-mini';

  const model = openrouterApiKey
    ? createOpenAI({
        apiKey: openrouterApiKey,
        baseURL: 'https://openrouter.ai/api/v1',
        headers: {
          'HTTP-Referer': process.env.OPENROUTER_SITE_URL ?? 'http://localhost:3000',
          'X-Title': process.env.OPENROUTER_APP_NAME ?? 'Kola Portfolio',
        },
      }).chat(openrouterModel)
    : nvidiaApiKey
      ? createOpenAI({
          apiKey: nvidiaApiKey,
          baseURL: 'https://integrate.api.nvidia.com/v1',
        }).chat(process.env.NVIDIA_MODEL ?? 'meta/llama-3.1-70b-instruct')
      : google('gemini-2.0-flash');

  const result = streamText({
    model,
    system: systemPrompt,
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
