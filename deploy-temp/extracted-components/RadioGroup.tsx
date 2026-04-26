const imgVector = "https://www.figma.com/api/mcp/asset/b8387988-a24e-4964-b630-336cf4f329a4";
const imgVector1 = "https://www.figma.com/api/mcp/asset/f13683b1-eba2-4245-b21d-52469483036e";

type RadioProps = {
  className?: string;
  checked?: boolean;
  color?: "Primary";
  size?: "Medium";
  state?: "Enabled";
};

function Radio({ className, checked = false, color = "Primary", size = "Medium", state = "Enabled" }: RadioProps) {
  return (
    <div className={className || "content-stretch flex items-center overflow-clip relative"} data-node-id="7894:81322">
      <div className="content-stretch flex items-center p-[9px] relative rounded-[100px] shrink-0" data-node-id="7894:81323" data-name="Padding">
        <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="7894:81324" data-name="*hidden">
          <div className="absolute inset-[8.33%]" data-node-id="I7894:81324;7475:49593" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
    </div>
  );
}

type FormControlLabelRadioProps = {
  className?: string;
  disabled?: "False";
  labelPlacement?: "End";
};

function FormControlLabelRadio({ className, disabled = "False", labelPlacement = "End" }: FormControlLabelRadioProps) {
  return (
    <div className={className || "content-stretch flex items-center relative"} data-node-id="634:100263">
      <Radio className="content-stretch flex items-center overflow-clip relative shrink-0" />
      <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="637:92575" data-name="<FormLabel>">
        <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--neutral\/rodeo-black,#333)] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I637:92575;11436:165289" style={{ fontVariationSettings: "'wdth' 100" }}>
          Label
        </p>
      </div>
    </div>
  );
}

type RadioGroupProps = {
  className?: string;
  disabled?: "False";
  radios?: "5";
  row?: "False";
};

function RadioGroup({ className, disabled = "False", radios = "5", row = "False" }: RadioGroupProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="637:93244">
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="637:93246" data-name="<FormControlLabel> | Radio">
        <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="I637:93246;634:100332" data-name="<Radio>">
          <div className="content-stretch flex items-center p-[9px] relative rounded-[100px] shrink-0" data-node-id="I637:93246;634:100332;7894:81327" data-name="Padding">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I637:93246;634:100332;7894:81328" data-name="*hidden">
              <div className="absolute inset-[8.33%]" data-node-id="I637:93246;634:100332;7894:81328;7475:49581" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I637:93246;637:92575" data-name="<FormLabel>">
          <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--neutral\/rodeo-black,#333)] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] whitespace-nowrap" data-node-id="I637:93246;637:92575;11436:165289" style={{ fontVariationSettings: "'wdth' 100" }}>
            Label
          </p>
        </div>
      </div>
      <FormControlLabelRadio className="content-stretch flex items-center relative shrink-0" />
      <FormControlLabelRadio className="content-stretch flex items-center relative shrink-0" />
      <FormControlLabelRadio className="content-stretch flex items-center relative shrink-0" />
      <FormControlLabelRadio className="content-stretch flex items-center relative shrink-0" />
    </div>
  );
}

export default RadioGroup;
