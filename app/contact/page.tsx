import { Header, Footer, JsonLd } from '../components';
import { site, staffingOffer, leadQuestions, staffingFitNote } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Request a plan for HR admin support. Share the tasks, HR tools, schedule, access needs, and approval lines.',
};

export default function Contact() {
  const siteAny = site as any;
  const siteUrl = siteAny.url || `https://${String(site.domain).toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
        ],
      },
    ],
  };

  return (
    <>
      <Header />
      <main className="section">
        <JsonLd data={schema} />
        <div className="container two">
          <div>
            <p className="eyebrow">HR support intake</p>
            <h1>Plan the HR admin role</h1>
            <p className="lead">Tell us which HR work is piling up and who owns the sensitive decisions. Your answers will help shape a role with clear tasks, access limits, and review steps.</p>
            <div className="card">
              <h2>What to map before hiring</h2>
              <ul className="list">{staffingOffer.included.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <div className="card">
              <h2>Useful details to include</h2>
              <ul className="list">{leadQuestions.map((question) => <li key={question}>{question}</li>)}</ul>
            </div>
            <p className="callout"><b>Role fit:</b> {staffingFitNote}</p>
          </div>
          <form className="card" action="/thank-you">
            <label>Name<br /><input required name="name" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Email<br /><input required name="email" type="email" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Company / website<br /><input name="company" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>Which HR admin work do you want handled?<br /><textarea name="tasks" rows={6} style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
            <label>What needs the most attention?<br />
              <select name="concern" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }}>
                <option>Onboarding files and checklists</option>
                <option>Employee questions and HR inbox</option>
                <option>Interview scheduling and candidate follow-up</option>
                <option>HR reports and missing paperwork</option>
                <option>Access limits and approval rules</option>
              </select>
            </label>
            <button className="btn" type="submit">Send HR support request</button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
