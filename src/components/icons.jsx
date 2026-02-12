const LaundryIcons = {
  WashFold: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 lg:w-12 lg:h-12">
      <path d="M3 10h18l-1.5 10H4.5L3 10z" fill="#D2B48C" />
      <path d="M2 10h20v2H2v-2z" fill="#A0522D" />
  
      <path d="M6 7h12v3H6V7z" fill="#60A5FA" />
      <path d="M8 5h8v2H8V5z" fill="#DBEAFE" />
      <path d="M9 10V8a3 3 0 016 0v2" stroke="#A0522D" strokeWidth="1.5" />
    </svg>
  ),
  DryClean: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 lg:w-12 lg:h-12">
      <path d="M12 2l2.5 5.5L20 10l-4.5 4.5L17 21l-5-3-5 3 1.5-6.5L3 10l5.5-2.5L12 2z" fill="#FDE047" />
      <circle cx="18" cy="5" r="2" fill="#FACC15" />
      <circle cx="5" cy="18" r="1.5" fill="#FEF08A" />
    </svg>
  ),
  SteamIron: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 lg:w-12 lg:h-12">

      <path d="M21 18H5c-2 0-3-1.5-3-3.5V11a3 3 0 013-3h11l5 4v6z" fill="#3B82F6" />
      <path d="M5 8h10v2H5V8z" fill="#2563EB" />
   
      <path d="M18 4l1-1M21 5l1-1M15 5l-1-1" stroke="#93C5FD" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 18h16" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),
  Shoe: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 lg:w-12 lg:h-12">
      <path d="M3 13s0-4 5-5c3 0 8 1 11 5s2 7 2 7H4s-1-4-1-7z" fill="#E2E8F0" />
      <path d="M19 20H4l-1-4 6-5 10 5v4z" fill="#319795" />
      <path d="M10 8l1 4M13 8l1 4M16 9l1 3" stroke="#94A3B8" strokeWidth="1.5" />
      <circle cx="18" cy="16" r="1" fill="white" />
    </svg>
  ),
  HomeLinen: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 lg:w-12 lg:h-12">
      <path d="M2 18V7h20v11" stroke="#4A5568" strokeWidth="2" />
      <rect x="3" y="11" width="18" height="6" rx="1" fill="#EBF8FF" />
      <rect x="5" y="8" width="6" height="3" rx="1" fill="white" stroke="#BEE3F8" />
      <rect x="13" y="8" width="6" height="3" rx="1" fill="white" stroke="#BEE3F8" />
    </svg>
  ),
  PremiumSilk: () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 lg:w-12 lg:h-12">
      <path d="M7 4c0 10 2 16 2 16l3-2 3 2s2-6 2-16H7z" fill="#EF4444" />
      <path d="M7 4s5-2 10 0v4s-5-2-10 0V4z" fill="#DC2626" />
      <path d="M9 10h6M9 14h6" stroke="#B91C1C" strokeWidth="0.5" />
    </svg>
  )
};

export default LaundryIcons;