// Bottom-center cards: docs (GitBook), as a white logo (Simple Icons, in public/social/).
type Social = { label: string; icon: string; href?: string };

const SOCIALS: Social[] = [
  { label: "Docs", icon: "/social/gitbook.svg", href: "https://docs.neuriio.xyz" },
];

export function SocialLinks() {
  return (
    <footer className="bottom">
      {SOCIALS.map((s) =>
        s.href ? (
          <a key={s.label} className="panel foot-slot social" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
            <img src={s.icon} alt="" />
          </a>
        ) : (
          <span key={s.label} className="panel foot-slot social social-soon" aria-label={`${s.label} (coming soon)`} title={`${s.label}: coming soon`}>
            <img src={s.icon} alt="" />
          </span>
        ),
      )}
    </footer>
  );
}
