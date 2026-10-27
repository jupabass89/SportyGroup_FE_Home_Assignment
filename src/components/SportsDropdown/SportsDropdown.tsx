import "./SportsDropdown.scss";

interface SportsDropdownProps {
  sports: string[];
  value: string;
  onChange: (value: string) => void;
}

export function SportsDropdown({
  sports,
  value,
  onChange,
}: SportsDropdownProps) {
  return (
    <section>
      <label>Sport</label>
      <select
        id="sport-dropdown"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">All sports</option>
        {sports.map((sport) => (
          <option key={sport} value={sport}>
            {sport}
          </option>
        ))}
      </select>
    </section>
  );
}
