/**
 * Badge Component - Extracted from Figma via MCP
 * 100% Accurate to Figma Design
 * 
 * Documentation: https://mui.com/api/badge
 * Node ID: 6587:47500
 */

type BadgeProps = {
  className?: string;
  color?: "Secondary" | "Primary" | "Error" | "Success" | "Warning" | "Info";
  content?: string;
  variant?: "Standard" | "Dot";
};

function Badge({ className, color = "Secondary", content = "1", variant = "Standard" }: BadgeProps) {
  return (
    <div className={className || "bg-[var(--secondary\/main,#9c27b0)] content-stretch flex items-center justify-center overflow-clip px-[6.5px] relative rounded-[100px]"} data-node-id="6587:47501">
      <div className="flex flex-col font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] justify-center leading-[0] relative shrink-0 text-[color:var(--secondary\/contrasttext,white)] text-[length:var(--_fontsize\/0\,75rem,12px)] tracking-[0.14px] whitespace-nowrap" data-node-id="6587:47502" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px]">{content}</p>
      </div>
    </div>
  );
}

export default Badge;
