import { Footer, Header } from '../components';

export default function Thanks() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>Thanks. Your request is in.</h1>
          <p className="lead">We will review the role details and follow up with the next planning step.</p>
          <a className="btn primary" href="/">Back to the homepage</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
