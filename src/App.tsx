/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import MainLayout from './layouts/MainLayout';
import Hero from './components/sections/Hero';
import Manifesto from './components/sections/Manifesto';
import Services from './components/sections/Services';
import AuditReport from './components/sections/AuditReport';
import Portfolio from './components/sections/Portfolio';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <Manifesto />
      <Services />
      <AuditReport />
      <Portfolio />
      <Contact />
    </MainLayout>
  );
}
