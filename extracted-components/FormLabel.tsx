type FormLabelProps = {
  className?: string;
  color?: "-";
  state?: "Enabled";
  value?: string;
};

function FormLabel({ className, color = "-", state = "Enabled", value = "Label" }: FormLabelProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="11436:165291">
      <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="11436:165289" style={{ fontVariationSettings: "'wdth' 100" }}>
        {value}
      </p>
    </div>
  );
}

export default FormLabel;
