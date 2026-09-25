import { Navigate, Route } from 'react-router-dom';
import { LazyMotion, MotionConfig } from 'motion/react';
import AppShell from './components/shell/AppShell';
import SkipLink from './components/shell/SkipLink';
import Home from './pages/Home';
import Experience from './pages/Experience';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// `domMax` is loaded asynchronously because `layout` / `layoutId` (the nav pill,
// the filter pills) needs it; `strict` then forces every animated element in the
// app to use the lightweight `m` component.
const loadDomMax = () => import('./lib/motionFeatures').then((mod) => mod.default);

const App = () => (
  <MotionConfig reducedMotion="user">
    <LazyMotion features={loadDomMax} strict>
      <SkipLink />

      <AppShell>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Old route kept as a redirect so existing links don't break. */}
        <Route path="/skills" element={<Navigate to="/#skills" replace />} />
        <Route path="*" element={<NotFound />} />
      </AppShell>
    </LazyMotion>
  </MotionConfig>
);

export default App;
