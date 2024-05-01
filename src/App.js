import Page from './Page.js';
import Section from './Section.js';
import Blurb from './Blurb.js';
import Projects from './Project.js';


function App() {
  return (
    <Page>
      <Section name='About'>
        <Blurb />
      </Section>
      <Section name='Recent Projects'>
        <Projects />
      </Section>
    </Page>
  );
}

export default App;
