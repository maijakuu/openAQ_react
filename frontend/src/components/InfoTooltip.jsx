import { Info } from 'lucide-react'

function InfoTooltip({ text, children }) {
  return (
    <div className="tooltip">
      <Info size={36} color="#6b38f8" strokeWidth={2.75} />
      <span className="tooltipText">{text}</span>
    </div>
  );
}

export default InfoTooltip;