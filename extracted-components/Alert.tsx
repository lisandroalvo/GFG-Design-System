const imgVector = "https://www.figma.com/api/mcp/asset/alert-icon-url";

type AlertProps = {
  className?: string;
  action?: "False";
  closeText?: "Close";
  color?: "Success";
  icon?: "True";
  iconMapping?: "Success";
  onClose?: "False";
  severity?: "Success";
  variant?: "Standard";
};

function Alert({ className, action = "False", closeText = "Close", color = "Success", icon = "True", iconMapping = "Success", onClose = "False", severity = "Success", variant = "Standard" }: AlertProps) {
  return (
    <div className={className || "bg-[var(--success\/_states\/filled,rgb(237,247,237))] content-stretch flex items-start p-[6px_16px] relative rounded-[var(--borderradius,4px)] w-[600px]"} data-node-id="6562:38669">
      <div className="content-stretch flex items-start mr-[12px] pt-[7px] relative shrink-0" data-node-id="6562:38670" data-name="<Icon>">
        <div className="overflow-clip relative shrink-0 size-[22px]" data-node-id="I6562:38670;6594:47652" data-name="SuccessOutlinedFilled">
          <div className="absolute inset-[8.33%]" data-node-id="I6562:38670;6594:47652;7475:71044" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px py-[8px] relative" data-node-id="6562:38671" data-name="Message">
        <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.43] relative shrink-0 text-[color:var(--success\/dark,rgb(30,70,32))] text-[length:var(--typography\/body2,14px)] tracking-[0.17px] w-full" data-node-id="6562:38672" style={{ fontVariationSettings: "'wdth' 100" }}>
          This is a success Alert.
        </p>
      </div>
    </div>
  );
}

export default Alert;
