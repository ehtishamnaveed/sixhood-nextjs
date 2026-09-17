export default function Arrow({ className = 'btn__arrow' }) {
  return (
    <svg className={className} viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 13L13 3M5 3h8v8" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
