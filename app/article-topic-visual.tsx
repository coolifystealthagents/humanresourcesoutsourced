type ArticleTopicVisualProps = {
  title: string;
  kind: 'guide' | 'research';
};

type Topic = {
  label: string;
  shortLabel: string;
  accent: string;
  accentSoft: string;
  keywords: readonly string[];
};

const topics: readonly Topic[] = [
  { label: 'Candidate workflow', shortLabel: 'CANDIDATE', accent: '#2367a5', accentSoft: '#dceeff', keywords: ['candidate', 'recruit', 'interview', 'requisition', 'hiring'] },
  { label: 'Onboarding workflow', shortLabel: 'ONBOARD', accent: '#17746b', accentSoft: '#d7f3ee', keywords: ['onboarding', 'new-hire', 'new hire', 'start date'] },
  { label: 'Payroll control', shortLabel: 'PAYROLL', accent: '#9a5b12', accentSoft: '#fff0d2', keywords: ['payroll', 'pay ', 'wage', 'deduction', 'hours'] },
  { label: 'Benefits support', shortLabel: 'BENEFITS', accent: '#7856a6', accentSoft: '#eee6fb', keywords: ['benefit', 'enrollment', 'leave', 'eligibility'] },
  { label: 'Records administration', shortLabel: 'RECORDS', accent: '#376275', accentSoft: '#deedf3', keywords: ['record', 'file', 'document', 'data', 'hris', 'retention'] },
  { label: 'Learning administration', shortLabel: 'LEARNING', accent: '#a34f68', accentSoft: '#fae2e9', keywords: ['learning', 'training', 'course', 'roster'] },
  { label: 'Performance cycle', shortLabel: 'REVIEWS', accent: '#3d629e', accentSoft: '#e2eafb', keywords: ['performance', 'review', 'scorecard', 'feedback'] },
  { label: 'Offboarding workflow', shortLabel: 'OFFBOARD', accent: '#8a5548', accentSoft: '#f5e6e1', keywords: ['offboarding', 'termination', 'separation', 'leaver'] },
  { label: 'HR service desk', shortLabel: 'HR DESK', accent: '#216c82', accentSoft: '#dbf0f4', keywords: ['help desk', 'request', 'inbox', 'employee-relations', 'complaint'] },
];

const fallback: Topic = {
  label: 'HR operations workflow',
  shortLabel: 'HR OPS',
  accent: '#2f6f9f',
  accentSoft: '#dcecf7',
  keywords: [],
};

function topicFor(title: string) {
  const value = title.toLowerCase();
  return topics.find((topic) => topic.keywords.some((keyword) => value.includes(keyword))) ?? fallback;
}

function titleCode(title: string) {
  let total = 0;
  for (const character of title) total = (total * 31 + character.charCodeAt(0)) % 997;
  return String(total).padStart(3, '0');
}

export function ArticleTopicVisual({ title, kind }: ArticleTopicVisualProps) {
  const topic = topicFor(title);
  const code = titleCode(title);
  const isResearch = kind === 'research';

  return (
    <figure className="article-topic-visual" data-visual-topic={topic.shortLabel.toLowerCase().replace(' ', '-')}>
      <svg viewBox="0 0 1200 630" role="img" aria-label={`${topic.label} illustration for ${title}`}>
        <title>{title}</title>
        <desc>A structured, topic-specific diagram showing an HR work item moving from intake through an accountable owner review to documented closeout.</desc>
        <rect width="1200" height="630" rx="32" fill="#f7fafc" />
        <path d="M0 0h1200v156H0z" fill="#102d49" />
        <circle cx="1074" cy="78" r="116" fill={topic.accent} opacity=".34" />
        <circle cx="1140" cy="24" r="72" fill="#ffffff" opacity=".1" />
        <text x="72" y="72" className="article-visual-kicker">{isResearch ? 'RESEARCH CONTROL MODEL' : 'HR OPERATIONS FIELD GUIDE'}</text>
        <text x="72" y="120" className="article-visual-topic">{topic.shortLabel}</text>
        <text x="1080" y="112" textAnchor="end" className="article-visual-code">{isResearch ? 'R' : 'G'} · {code}</text>

        <path d="M190 348H1010" stroke="#b7c8d6" strokeWidth="10" strokeLinecap="round" />
        <path d="M420 348h112M680 348h112" stroke={topic.accent} strokeWidth="10" strokeLinecap="round" />
        {[240, 600, 960].map((x, index) => (
          <g key={x}>
            <circle cx={x} cy="348" r="94" fill="#ffffff" stroke={index === 1 ? topic.accent : '#c9d7e2'} strokeWidth="8" />
            <circle cx={x} cy="348" r="58" fill={index === 1 ? topic.accentSoft : '#eef4f8'} />
            {index === 0 ? <path d="M212 322h56v52h-56zM222 309h36" fill="none" stroke={topic.accent} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" /> : null}
            {index === 1 ? <path d="m565 348 23 23 48-52" fill="none" stroke={topic.accent} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" /> : null}
            {index === 2 ? <path d="M929 323h62v52h-62zM941 338h38M941 354h28" fill="none" stroke={topic.accent} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" /> : null}
            <text x={x} y="492" textAnchor="middle" className="article-visual-step">{['INTAKE', 'OWNER REVIEW', 'EVIDENCE'][index]}</text>
          </g>
        ))}
        <rect x="72" y="555" width="1056" height="2" fill="#d9e3ea" />
        <text x="72" y="596" className="article-visual-foot">CLEAR SCOPE</text>
        <text x="600" y="596" textAnchor="middle" className="article-visual-foot">LIMITED ACCESS</text>
        <text x="1128" y="596" textAnchor="end" className="article-visual-foot">NAMED DECISION OWNER</text>
      </svg>
      <figcaption>{topic.label}: intake, owner review, and closeout evidence.</figcaption>
    </figure>
  );
}
