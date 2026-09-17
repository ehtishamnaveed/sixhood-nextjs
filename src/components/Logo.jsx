// Vector rebuild of public/assets/flastech-logo.jpeg, drawn in the source image's pixel space.
const LETTERS = [
  'M334 456H459V509H396V555H454V609H396V736H334Z',
  'M473 456H535V686H594V736H473Z',
  'M630 456H730L760.5 736H700.5L697 691H663L659.5 736H600.5ZM679 505H681L693 643H666Z',
  'M848 453C890 453 919 475 919 506V536H856L855 516C854 509 851 507 845 507C838 507 832 511 832 518V532C832 538 838 542 856 556L902 598C914 610 920 625 920 650V675C920 715 890 739 848 739C800 739 770 717 770 685V631H831V675C831 683 836 688 844 688C853 688 858 682 858 670C858 656 854 646 846 634L814 600C790 576 770 562 770 530V506C770 473 800 453 848 453Z',
];

const TECH = [
  'M711 757H742V764H731V787H722V764H711Z',
  'M753 757H781V764H762V769H779V775H762V780H781V787H753Z',
  'M823 767H814C813 764.5 811 764 808 764C803.5 764 801 767 801 772C801 777 803.5 780 808 780C811 780 813 779.5 814 777H823C821.5 783.5 815.5 788 808 788C798.5 788 792 781.5 792 772C792 762.5 798.5 756 808 756C815.5 756 821.5 760.5 823 767Z',
  'M837 757H845V768H860V757H869V787H860V775H845V787H837Z',
];

const BOLTS = {
  full: ['M633 444L861 263L731 444Z', 'M476 749H593L296 986Z'],
  // Same bases, tips pulled 60% closer so the mark fits a header row.
  compact: ['M633 444L753.6 371.6L731 444Z', 'M476 749H593L439.1 843.8Z'],
};

const VIEWBOX = {
  full: '286 256 640 736',
  compact: '326 366 600 482',
};

export default function Logo({ variant = 'compact', fill = 'currentColor', title = 'FlasTech', className = '', ...rest }) {
  const gradientId = fill === 'iris' ? `logo-iris-${variant}` : null;
  const paint = gradientId ? `url(#${gradientId})` : fill;

  return (
    <svg
      viewBox={VIEWBOX[variant]}
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      {gradientId && (
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#cfc2f7" />
            <stop offset="0.36" stopColor="#f6cadf" />
            <stop offset="0.66" stopColor="#faddc4" />
            <stop offset="1" stopColor="#bdf1ec" />
          </linearGradient>
        </defs>
      )}
      <g fill={paint} fillRule="evenodd">
        {LETTERS.map((d) => (
          <path key={d} d={d} />
        ))}
        {BOLTS[variant].map((d) => (
          <path key={d} d={d} />
        ))}
        {variant === 'full' && TECH.map((d) => <path key={d} d={d} />)}
      </g>
    </svg>
  );
}
