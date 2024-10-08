import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

import {
  TableExamples,
  TableBasic,
  TableLoadOnScroll,
  TableLoadOnScrollSpinner,
  TableLoadOnScrollSkeleton,
} from './components/Table';
import {
  AccordionExamples,
  AccordionBasic,
  AccordionDimension,
  AccordionDivider,
  AccordionIcon,
  AccordionModes,
} from './components/Accordion';
import { BadgeExamples, BadgeAccessability, BadgeBasic, BadgeVariants } from './components/Badge';
import { Icons } from './components/Icons/icons';
import { MainPage, Layout } from './components/Main';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="accordion" element={<AccordionExamples />}>
              <Route index element={<AccordionBasic />} />
              <Route path="dimension" element={<AccordionDimension />} />
              <Route path="icon" element={<AccordionIcon />} />
              <Route path="divider" element={<AccordionDivider />} />
              <Route path="modes" element={<AccordionModes />} />
            </Route>
            <Route path="badge" element={<BadgeExamples />}>
              <Route index element={<BadgeBasic />} />
              <Route path="variants" element={<BadgeVariants />} />
              <Route path="accessability" element={<BadgeAccessability />} />
            </Route>
            <Route path="table" element={<TableExamples />}>
              <Route index element={<TableBasic />} />
              <Route path="load-on-scroll" element={<TableLoadOnScroll />} />
              <Route path="load-on-scroll-with-spinner" element={<TableLoadOnScrollSpinner />} />
              <Route path="load-on-scroll-with-skeleton" element={<TableLoadOnScrollSkeleton />} />
            </Route>
            <Route path="icons" element={<Icons />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

export default App;
