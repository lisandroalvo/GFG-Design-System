type FormHelperTextProps = {
  className?: string;
  disabled?: "Disabled";
  value?: string;
};

function FormHelperText({ className, disabled = "Disabled", value = "Helper text" }: FormHelperTextProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start pt-[3px] relative w-[120px]"} data-node-id="11140:154886">
      <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] justify-center leading-[0] relative shrink-0 text-[color:var(--text\/disabled,rgba(0,0,0,0.38))] text-[length:var(--_fontsize\/0\,75rem,12px)] tracking-[0.4px] w-full" data-node-id="11140:154887" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.66]">{value}</p>
      </div>
    </div>
  );
}

export default FormHelperText;
