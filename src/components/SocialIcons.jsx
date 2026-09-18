import React from 'react';

export function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

export function YoutubeIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );
}

export function GoogleMapsIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="#EA4335" />
      <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.96 2.88 7.37L12 11V2z" fill="#4285F4" />
      <path d="M12 20.35s4.25-5.24 6.12-9.35H12v9.35z" fill="#34A853" />
      <path d="M18.12 11c.56-1.2.88-2.54.88-3.95 0-.71-.08-1.39-.24-2.05L12 11h6.12z" fill="#FBBC04" />
      <circle cx="12" cy="9" r="3" fill="#FFFFFF" />
      <circle cx="12" cy="9" r="1.5" fill="#4285F4" />
    </svg>
  );
}

export function WazeIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="11" fill="#33CCFF" />
      <path d="M12 5.5C8.41 5.5 5.5 8.41 5.5 12c0 1.63.6 3.12 1.6 4.27l-.8 2.33 2.44-.73c1.01.65 2.21 1.03 3.51 1.03 3.59 0 6.5-2.91 6.5-6.5S15.84 5.5 12 5.5z" fill="#FFFFFF" />
      <circle cx="9.5" cy="11" r="1.2" fill="#2C3E50" />
      <circle cx="14.5" cy="11" r="1.2" fill="#2C3E50" />
      <path d="M9.5 14.2c.8 1.1 2.1 1.6 3 1.6s2.2-.5 3-1.6" stroke="#2C3E50" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="8" cy="18.5" r="1.5" fill="#2C3E50" />
      <circle cx="16" cy="18.5" r="1.5" fill="#2C3E50" />
    </svg>
  );
}