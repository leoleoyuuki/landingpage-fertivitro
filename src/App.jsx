import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import AboutSection from './components/AboutSection';
import LabShowcase from './components/LabShowcase';
import FertibankSection from './components/FertibankSection';
import ProceduresSection from './components/ProceduresSection';
import ClinicTour from './components/ClinicTour';
import BlogSection from './components/BlogSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import VideoModal from './components/VideoModal';
import AppointmentModal from './components/AppointmentModal';
import CookieNotice from './components/CookieNotice';
import LinkTreePage from './components/LinkTreePage';

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [appointmentModalOpen, setAppointmentModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (search.includes('links') || search.includes('linktree') || hash.includes('links') || hash.includes('linktree') || path.endsWith('/links')) {
        return 'linktree';
      }
    }
    return 'landing';
  });

  useEffect(() => {
    const handleUrlChange = () => {
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();
      if (search.includes('links') || search.includes('linktree') || hash.includes('links') || hash.includes('linktree') || path.endsWith('/links')) {
        setCurrentView('linktree');
      } else {
        setCurrentView('landing');
      }
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const navigateToLinkTree = () => {
    window.history.pushState({}, '', '?links');
    setCurrentView('linktree');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToLanding = () => {
    window.history.pushState({}, '', window.location.pathname);
    setCurrentView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentView === 'linktree') {
    return <LinkTreePage onGoToLandingPage={navigateToLanding} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-slate-800 antialiased font-sans w-full max-w-full overflow-x-hidden">
      {/* Top utility bar */}
      <TopBar onOpenLinkTree={navigateToLinkTree} />

      {/* Main sticky navigation */}
      <Navbar 
        onOpenAppointmentModal={() => setAppointmentModalOpen(true)} 
        onOpenLinkTree={navigateToLinkTree}
      />

      {/* Main content flow */}
      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Hero Section with Dynamic Slides and Real Photos */}
        <Hero onOpenAppointmentModal={() => setAppointmentModalOpen(true)} />

        {/* The 4 Core Pillars of Fertility Care */}
        <Pillars onSelectPillar={(pillar) => setAppointmentModalOpen(true)} />

        {/* About Fertivitro & Welcoming Lounge/Team with Real Clinic Photos */}
        <AboutSection onOpenAppointmentModal={() => setAppointmentModalOpen(true)} />

        {/* IVF Cleanroom Laboratory Showcase with 4K Video Player */}
        <LabShowcase onOpenVideoModal={() => setVideoModalOpen(true)} />

        {/* Fertibank & Oocyte Cryopreservation with Real Tank Photos */}
        <FertibankSection onOpenAppointmentModal={() => setAppointmentModalOpen(true)} />

        {/* Interactive Procedures & Treatments Tabs */}
        <ProceduresSection onOpenAppointmentModal={() => setAppointmentModalOpen(true)} />

        {/* Interactive Virtual Tour & Photo Lightbox */}
        <ClinicTour />

        {/* Scientific Accreditations & Society Badges */}
        <PartnersSection />

        {/* Blog & Educational Medical Articles */}
        <BlogSection />

        {/* Interactive FAQ Accordion */}
        <FaqSection onOpenAppointmentModal={() => setAppointmentModalOpen(true)} />

        {/* Appointment Scheduling Form & Moema Location */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer onOpenLinkTree={navigateToLinkTree} />

      {/* Floating Action Button */}
      <WhatsAppButton />

      {/* Video Modal in Full Screen */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* Quick Appointment Modal */}
      <AppointmentModal
        isOpen={appointmentModalOpen}
        onClose={() => setAppointmentModalOpen(false)}
      />

      {/* Privacy Notice Banner */}
      <CookieNotice />
    </div>
  );
}
