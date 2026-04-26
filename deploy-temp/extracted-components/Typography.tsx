type TypographyProps = {
  className?: string;
  align?: "Inherit";
  gutterBottom?: "False";
  noWrap?: "False";
  paragraph?: "False";
  variant?: "Body1";
};

function Typography({ className, align = "Inherit", gutterBottom = "False", noWrap = "False", paragraph = "False", variant = "Body1" }: TypographyProps) {
  return (
    <div className={className || "content-stretch flex items-start relative"} data-node-id="899:99867">
      <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="899:99868" style={{ fontVariationSettings: "'wdth' 100" }}>
        Body1
      </p>
    </div>
  );
}

export default Typography;
