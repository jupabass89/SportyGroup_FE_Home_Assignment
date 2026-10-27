import './SearchBar.scss';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <section className="search-bar">
      <label className="search-bar__label" htmlFor="league-search">
        Search leagues
      </label>
      <input
        className="search-bar__input"
        type="search"
        id="league-search"
        placeholder="Premier League"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </section>
  );
}
