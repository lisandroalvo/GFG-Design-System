type InputLabelProps = {
  className?: string;
  disabled?: "False";
  error?: "False";
  focused?: "False";
  required?: "False";
  shrink?: "True";
  size?: "Normal";
  value?: string;
  variant?: "Outlined";
};

function InputLabel({ className, disabled = "False", error = "False", focused = "False", required = "False", shrink = "True", size = "Normal", value = "Label", variant = "Outlined" }: InputLabelProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="6626:50991">
      <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[color:var(--text\/secondary,rgba(0,0,0,0.6))] text-[length:var(--_fontsize\/0\,75rem,12px)] tracking-[0.15px] whitespace-nowrap" data-node-id="6626:50992" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[12px]">{value}</p>
      </div>
    </div>
  );
}

export default InputLabel;
