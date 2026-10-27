import './SearchBar.scss';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <section>
      <label>Search leagues</label>
      <input
        type="search"
        id="league-search"
        placeholder="Premier League"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </section>
  );
}
