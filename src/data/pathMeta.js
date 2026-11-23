// The short label that leads each experience bullet, keyed by `company` in
// src/data/content.js. Each label maps one-to-one onto an existing bullet, in
// order, so nothing is invented and nothing is dropped.
//
// Trimmed to the labels alone: the icons, unit numbers, hues, slugs and chest
// markers this file used to carry belonged to the game-mechanics build and are
// gone with it.
export const pathMeta = {
  TalentXO: [
    'Leads engine',
    'Scoring at scale',
    'Outreach integrations',
    'Outreach A/B test',
    'Credit attribution',
    'Recommendation engine',
    'Agents in production',
    'Agent harness',
    'Read-only by design',
    'Matching engine',
    'Ranking evaluation',
    'Model selection',
    'Core product',
    'GCP infrastructure',
    'Live-system care',
    'Security',
  ],
  'Code At Random': [
    'AI backend',
    'Job-ingestion pipeline',
    'Roadmap engine',
    'RAG chatbot',
    'Resume & JD matching',
    'Data layer',
  ],
  'MADTIN Technologies': ['Safe Climate Trip', 'Backend ownership', 'AWS deployment'],
};

/** The bullet labels for a company, or an empty list when it has none. */
export const labelsFor = (company) => pathMeta[company] || [];

export default pathMeta;
