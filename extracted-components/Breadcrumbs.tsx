const imgVector = "https://www.figma.com/api/mcp/asset/breadcrumb-separator-url";

type BreadcrumbsProps = {
  className?: string;
  expandText?: "Show path";
  itemsAfterCollapse?: "1";
  itemsBeforeCollapse?: "1";
  maxItems?: "8";
  separator?: "/";
};

function Breadcrumbs({ className, expandText = "Show path", itemsAfterCollapse = "1", itemsBeforeCollapse = "1", maxItems = "8", separator = "/" }: BreadcrumbsProps) {
  return (
    <div className={className || "content-stretch flex items-center relative"} data-node-id="899:99511">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-node-id="899:99512" data-name="List">
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="899:99513" data-name="<Link>">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--primary\/main,#1976d2)] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] underline whitespace-nowrap" data-node-id="I899:99513;899:97344" style={{ fontVariationSettings: "'wdth' 100" }}>
            Link
          </p>
        </div>
        <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="899:99514" style={{ fontVariationSettings: "'wdth' 100" }}>
          {separator}
        </p>
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="899:99515" data-name="<Link>">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--primary\/main,#1976d2)] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] underline whitespace-nowrap" data-node-id="I899:99515;899:97344" style={{ fontVariationSettings: "'wdth' 100" }}>
            Link
          </p>
        </div>
        <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="899:99516" style={{ fontVariationSettings: "'wdth' 100" }}>
          {separator}
        </p>
        <div className="content-stretch flex items-start relative shrink-0" data-node-id="899:99517" data-name="<Typography>">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I899:99517;899:99868" style={{ fontVariationSettings: "'wdth' 100" }}>
            Body1
          </p>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumbs;
