import { useLocation } from 'react-router-dom';
import useLayoutMode from '../../hooks/useLayoutMode';
import useDocumentTitle, { titleForPath } from '../../hooks/useDocumentTitle';
import SideNav from './SideNav';
import TopBar from './TopBar';
import BottomTabBar from './BottomTabBar';
import PageFooter from './PageFooter';
import PageTransition from './PageTransition';

// One column, one footer.
//
// mobile  (<768)      TopBar + BottomTabBar
// tablet  (768–1023)  SideNav 88px
// desktop (1024–1279) SideNav 88px
// wide    (≥1280)     SideNav 256px
//
// Layout spec §1.2 — the shell owns page width, and no page may set its own.
// The content fills the space right of the nav minus a gutter (16 / 24 / 32 /
// 40 by breakpoint) and only caps at 1440px, which does not engage until a
// 1760px viewport. At 1440 that is 1120px of the 1184px available: 94.6% used,
// against the 720px column (16% dead space per side) this replaces.

const AppShell = ({ children }) => {
  const mode = useLayoutMode();
  const location = useLocation();
  const isMobile = mode === 'mobile';

  useDocumentTitle(titleForPath(location.pathname));

  return (
    <>
      {isMobile ? <TopBar /> : <SideNav collapsed={mode !== 'wide'} />}
      {isMobile ? <BottomTabBar /> : null}

      <div className="shell-content ml-[var(--nav-w)] px-[var(--gutter)]">
        <div className="mx-auto flex w-full min-w-0 max-w-[var(--content-max)] flex-col pb-[calc(var(--tabbar-h)_+_24px)] md:pb-6">
          <main id="main" tabIndex={-1} className="min-w-0 pt-6 md:pt-8">
            <PageTransition>{children}</PageTransition>
          </main>

          <PageFooter />
        </div>
      </div>
    </>
  );
};

export default AppShell;
