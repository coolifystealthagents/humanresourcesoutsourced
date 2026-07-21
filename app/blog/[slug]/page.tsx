import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogPosts, site } from '../../data';

const siteUrl = 'https://humanresourcesoutsourced.com';

const guideDetails: Record<string, {
  shortAnswer: string;
  sections: { title: string; body: string; items: string[] }[];
}> = {
  'human-resources-outsourced-planning': {
    shortAnswer: 'Write down the repeat HR admin work, the systems it touches, and the decisions that cannot leave your HR owner. That gives a provider or candidate a real role to review instead of a vague request for HR help.',
    sections: [
      {
        title: 'Describe the desk as it works today',
        body: 'Use real queues and documents. A list such as "watch the HR inbox, chase missing onboarding forms, and update interview calendars" is easier to staff than "help with people operations."',
        items: ['Name the inboxes, calendars, files, and HR systems involved', 'Show a good example of each repeat task', 'Note the busy days, cutoffs, and expected response times'],
      },
      {
        title: 'Draw the decision line',
        body: 'The assistant needs to know when to stop and ask. Keep pay, policy exceptions, discipline, investigations, medical issues, offers, and terminations with the person responsible for those decisions.',
        items: ['List messages the assistant may send from an approved template', 'Name the owner for payroll, benefits, recruiting, and employee relations questions', 'Start with limited access and expand it only after the work is accurate'],
      },
    ],
  },
  'human-resources-outsourced-tasks-to-outsource': {
    shortAnswer: 'Begin with work that repeats, has a clear example, and can be checked quickly. Onboarding checklists, interview scheduling, missing-document follow-up, and HR inbox sorting are usually easier to define than sensitive employee relations work.',
    sections: [
      {
        title: 'Good first tasks',
        body: 'Pick work where the right result is easy to see. The goal is to remove a steady admin queue without asking a new person to interpret policy.',
        items: ['Schedule interviews and send approved reminders', 'Track missing onboarding forms and policy acknowledgements', 'Sort HR inbox messages by owner and urgency', 'Prepare an open-items report for the HR lead'],
      },
      {
        title: 'Work to keep with the HR owner',
        body: 'Do not hand over a decision simply because the related paperwork is repetitive. The assistant can prepare the file or draft a message, but the accountable owner should review sensitive cases.',
        items: ['Compensation and benefits changes', 'Policy exceptions and legal questions', 'Discipline, investigations, offers, and terminations'],
      },
    ],
  },
  'human-resources-outsourced-provider-questions': {
    shortAnswer: 'Ask the provider to explain who will do the work, who reviews it, how access is limited, and what happens when an employee question needs an HR decision. Specific answers matter more than a polished staffing pitch.',
    sections: [
      {
        title: 'Ask about the daily handoff',
        body: 'A provider should be able to explain how open questions move back to your team. Ask for the actual review process, not a general promise about quality.',
        items: ['Who checks the first replies, file updates, and calendar changes?', 'How are urgent or sensitive employee messages tagged?', 'What will the daily open-items note show?', 'Who covers the queue when the assigned person is away?'],
      },
      {
        title: 'Ask about access and ownership',
        body: 'HR work can expose employee records and private messages. Find out how the provider limits access and removes it when an assignment ends.',
        items: ['Can the role start with only the folders and tools it needs?', 'Who approves access changes?', 'How are passwords and shared accounts handled?', 'Which decisions will the provider refuse to make without your approval?'],
      },
    ],
  },
  'human-resources-outsourced-onboarding-checklist': {
    shortAnswer: 'Keep the first week narrow. Set up limited access, review sample work, agree on escalation rules, and check the queue every day before adding more tasks.',
    sections: [
      {
        title: 'Before the first task',
        body: 'Give the new staff member enough context to work safely without opening every HR system at once.',
        items: ['Share the task list and the owner for each type of question', 'Provide approved messages and examples of completed work', 'Grant only the access needed for the first queue', 'Write down topics that must be escalated without a reply'],
      },
      {
        title: 'During the first week',
        body: 'Review real work while the queue is still small. Fix unclear instructions before they turn into habits.',
        items: ['Check the first batch of messages and file updates', 'Review missing items and blocked questions each day', 'Confirm that sensitive requests reached the right owner', 'Add another task only after the first work stays accurate'],
      },
    ],
  },
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return { title: 'Guide' };

  const url = `${siteUrl}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      siteName: site.brand,
      type: 'article',
    },
  };
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug) || blogPosts[0];
  const details = guideDetails[post.slug];
  const path = `/blog/${post.slug}`;
  const url = `${siteUrl}${path}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        url,
        mainEntityOfPage: { '@id': `${url}#webpage` },
        author: { '@type': 'Organization', name: site.brand, url: siteUrl },
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        hasPart: details.sections.map((section, index) => ({
          '@type': 'WebPageElement',
          position: index + 1,
          name: section.title,
          description: section.body,
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        name: post.title,
        description: post.excerpt,
        url,
        isPartOf: { '@type': 'WebSite', name: site.brand, url: siteUrl },
        mainEntity: { '@id': `${url}#article` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <article className="container" style={{ maxWidth: 880 }}>
          <p className="eyebrow">{site.brand} guide</p>
          <h1>{post.title}</h1>
          <p className="lead">{post.excerpt}</p>
          <div className="card">
            <h2>The short answer</h2>
            <p>{details.shortAnswer}</p>
            {details.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                <ul>{section.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ))}
          </div>
        </article>
        <CTA />
      </main>
      <Footer />
    </>
  );
}
