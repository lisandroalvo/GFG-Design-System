const imgVector = "https://www.figma.com/api/mcp/asset/checkbox-icon-url";

type FormGroupCheckboxProps = {
  className?: string;
  row?: "False";
};

function FormGroupCheckbox({ className, row = "False" }: FormGroupCheckboxProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="634:100331">
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="634:100332" data-name="<FormControlLabel> | Checkbox">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I634:100332;634:100263" data-name="<Checkbox>">
          <div className="content-stretch flex items-start p-[9px] relative rounded-[100px] shrink-0" data-node-id="I634:100332;634:100263;6543:43107" data-name="Padding">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I634:100332;634:100263;6543:43108" data-name="*hidden">
              <div className="absolute inset-[12.5%]" data-node-id="I634:100332;634:100263;6543:43108;7475:49560" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I634:100332;637:92575" data-name="<FormLabel>">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--neutral\/rodeo-black,#333)] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I634:100332;637:92575;11436:165289" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="634:100333" data-name="<FormControlLabel> | Checkbox">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I634:100333;634:100263" data-name="<Checkbox>">
          <div className="content-stretch flex items-start p-[9px] relative rounded-[100px] shrink-0" data-node-id="I634:100333;634:100263;6543:43107" data-name="Padding">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I634:100333;634:100263;6543:43108" data-name="*hidden">
              <div className="absolute inset-[12.5%]" data-node-id="I634:100333;634:100263;6543:43108;7475:49560" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I634:100333;637:92575" data-name="<FormLabel>">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--neutral\/rodeo-black,#333)] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I634:100333;637:92575;11436:165289" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </div>
      </div>
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="634:100334" data-name="<FormControlLabel> | Checkbox">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I634:100334;634:100263" data-name="<Checkbox>">
          <div className="content-stretch flex items-start p-[9px] relative rounded-[100px] shrink-0" data-node-id="I634:100334;634:100263;6543:43107" data-name="Padding">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I634:100334;634:100263;6543:43108" data-name="*hidden">
              <div className="absolute inset-[12.5%]" data-node-id="I634:100334;634:100263;6543:43108;7475:49560" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I634:100334;637:92575" data-name="<FormLabel>">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--neutral\/rodeo-black,#333)] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I634:100334;637:92575;11436:165289" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </div>
      </div>
    </div>
  );
}

export default FormGroupCheckbox;
