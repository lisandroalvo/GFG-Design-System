type LinkProps = {
  className?: string;
  color?: "Primary";
  underline?: "Always";
  variant?: "Body1";
};

function Link({ className, color = "Primary", underline = "Always", variant = "Body1" }: LinkProps) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-node-id="899:97343">
      <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--primary\/main,#1976d2)] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] underline whitespace-nowrap" data-node-id="899:97344" style={{ fontVariationSettings: "'wdth' 100" }}>
        Link
      </p>
    </div>
  );
}

export default Link;
