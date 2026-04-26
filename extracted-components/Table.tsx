type TableProps = {
  className?: string;
  padding?: "Normal";
  size?: "Medium";
  stickyHeader?: "False";
};

function Table({ className, padding = "Normal", size = "Medium", stickyHeader = "False" }: TableProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[600px]"} data-node-id="6572:50232">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6572:50233" data-name="<TableHead>">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="I6572:50233;6572:50234" data-name="<TableRow>">
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px px-[16px] py-[16px] relative" data-node-id="I6572:50233;6572:50235" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] tracking-[0.17px] w-full" data-node-id="I6572:50233;6572:50236" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dessert (100g serving)
            </p>
          </div>
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-col items-start justify-center px-[16px] py-[16px] relative shrink-0" data-node-id="I6572:50233;6572:50237" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-right tracking-[0.17px] whitespace-nowrap" data-node-id="I6572:50233;6572:50238" style={{ fontVariationSettings: "'wdth' 100" }}>
              Calories
            </p>
          </div>
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-col items-start justify-center px-[16px] py-[16px] relative shrink-0" data-node-id="I6572:50233;6572:50239" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-right tracking-[0.17px] whitespace-nowrap" data-node-id="I6572:50233;6572:50240" style={{ fontVariationSettings: "'wdth' 100" }}>
              Fat (g)
            </p>
          </div>
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-col items-start justify-center px-[16px] py-[16px] relative shrink-0" data-node-id="I6572:50233;6572:50241" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-right tracking-[0.17px] whitespace-nowrap" data-node-id="I6572:50233;6572:50242" style={{ fontVariationSettings: "'wdth' 100" }}>
              Carbs (g)
            </p>
          </div>
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-col items-start justify-center px-[16px] py-[16px] relative shrink-0" data-node-id="I6572:50233;6572:50243" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Medium',sans-serif)] font-[var(--fontweightmedium,500)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-right tracking-[0.17px] whitespace-nowrap" data-node-id="I6572:50233;6572:50244" style={{ fontVariationSettings: "'wdth' 100" }}>
              Protein (g)
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="6572:50245" data-name="<TableBody>">
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-node-id="I6572:50245;6572:50246" data-name="<TableRow>">
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px px-[16px] py-[16px] relative" data-node-id="I6572:50245;6572:50247" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.43] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] tracking-[0.17px] w-full" data-node-id="I6572:50245;6572:50248" style={{ fontVariationSettings: "'wdth' 100" }}>
              Frozen yoghurt
            </p>
          </div>
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-col items-start justify-center px-[16px] py-[16px] relative shrink-0" data-node-id="I6572:50245;6572:50249" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.43] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-right tracking-[0.17px] whitespace-nowrap" data-node-id="I6572:50245;6572:50250" style={{ fontVariationSettings: "'wdth' 100" }}>
              159
            </p>
          </div>
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-col items-start justify-center px-[16px] py-[16px] relative shrink-0" data-node-id="I6572:50245;6572:50251" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.43] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-right tracking-[0.17px] whitespace-nowrap" data-node-id="I6572:50245;6572:50252" style={{ fontVariationSettings: "'wdth' 100" }}>
              6.0
            </p>
          </div>
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-col items-start justify-center px-[16px] py-[16px] relative shrink-0" data-node-id="I6572:50245;6572:50253" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.43] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-right tracking-[0.17px] whitespace-nowrap" data-node-id="I6572:50245;6572:50254" style={{ fontVariationSettings: "'wdth' 100" }}>
              24
            </p>
          </div>
          <div className="border-[var(--divider,rgba(0,0,0,0.12))] border-b border-solid content-stretch flex flex-col items-start justify-center px-[16px] py-[16px] relative shrink-0" data-node-id="I6572:50245;6572:50255" data-name="<TableCell>">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.43] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body2,14px)] text-right tracking-[0.17px] whitespace-nowrap" data-node-id="I6572:50245;6572:50256" style={{ fontVariationSettings: "'wdth' 100" }}>
              4.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
