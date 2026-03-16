function InfoTooltip({ text, children }) {
  return (
    <div className="tooltip">
      <span className="infoIcon">{children}</span>
      <span className="tooltipText">{text}</span>
    </div>
  );
}

export default InfoTooltip;