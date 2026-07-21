import { Footer, Header } from '../components';

export default function Thanks() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1>Your HR support request is in.</h1>
          <p className="lead">The role details will be reviewed before the next planning step.</p>
          <a className="btn primary" href="/">Back to the homepage</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
