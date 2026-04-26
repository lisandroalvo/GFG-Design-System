const imgVector = "https://www.figma.com/api/mcp/asset/rating-star-url";

type RatingProps = {
  className?: string;
  disabled?: "False";
  precision?: "1";
  readOnly?: "False";
  size?: "Medium";
  value?: "3";
};

function Rating({ className, disabled = "False", precision = "1", readOnly = "False", size = "Medium", value = "3" }: RatingProps) {
  return (
    <div className={className || "content-stretch flex gap-[4px] items-start relative"} data-node-id="899:97569">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="899:97570" data-name="StarFilled">
        <div className="absolute inset-[12.5%]" data-node-id="I899:97570;7475:71011" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="899:97571" data-name="StarFilled">
        <div className="absolute inset-[12.5%]" data-node-id="I899:97571;7475:71011" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="899:97572" data-name="StarFilled">
        <div className="absolute inset-[12.5%]" data-node-id="I899:97572;7475:71011" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="899:97573" data-name="StarBorderFilled">
        <div className="absolute inset-[12.5%]" data-node-id="I899:97573;7475:71022" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-node-id="899:97574" data-name="StarBorderFilled">
        <div className="absolute inset-[12.5%]" data-node-id="I899:97574;7475:71022" data-name="Vector">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
        </div>
      </div>
    </div>
  );
}

export default Rating;
