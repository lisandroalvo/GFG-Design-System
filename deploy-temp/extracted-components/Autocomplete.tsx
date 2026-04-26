const imgVector = "https://www.figma.com/api/mcp/asset/autocomplete-icon-url";

type AutocompleteProps = {
  className?: string;
  disabled?: "False";
  disablePortal?: "False";
  freeSolo?: "False";
  multiple?: "False";
  size?: "Medium";
};

function Autocomplete({ className, disabled = "False", disablePortal = "False", freeSolo = "False", multiple = "False", size = "Medium" }: AutocompleteProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative w-[200px]"} data-node-id="10100:157236">
      <div className="border border-[rgba(0,0,0,0.23)] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--borderradius,4px)] shrink-0 w-full" data-node-id="10100:157237" data-name="<TextField>">
        <div className="content-stretch flex items-center px-[14px] py-[16.5px] relative shrink-0 w-full" data-node-id="I10100:157237;10100:157238" data-name="Container">
          <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-node-id="I10100:157237;10100:157239" data-name="Input">
            <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.5] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/body1,16px)] tracking-[0.15px] w-full" data-node-id="I10100:157237;10100:157240" style={{ fontVariationSettings: "'wdth' 100" }}>
              Combo box
            </p>
          </div>
          <div className="content-stretch flex items-start ml-[8px] relative shrink-0" data-node-id="I10100:157237;10100:157241" data-name="<Icon>">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="I10100:157237;10100:157241;6594:47652" data-name="ArrowDropDownFilled">
              <div className="absolute inset-[25%_29.17%]" data-node-id="I10100:157237;10100:157241;6594:47652;7475:54225" data-name="Vector">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Autocomplete;
