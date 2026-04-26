type CardActionsProps = {
  className?: string;
  disableSpacing?: "False";
};

function CardActions({ className, disableSpacing = "False" }: CardActionsProps) {
  return (
    <div className={className || "content-stretch flex gap-[8px] items-center justify-end p-[8px] relative w-[344px]"} data-node-id="11436:165307">
      <div className="content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[var(--radius\/button,6px)] shrink-0" data-node-id="11436:165308" data-name="<Button>">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I11436:165308;15667:31995">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I11436:165308;9996:109957" data-name="Base">
            <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I11436:165308;9996:109958">
              Action 1
            </p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col h-[34px] items-center justify-center overflow-clip px-[20px] py-[10px] relative rounded-[var(--radius\/button,6px)] shrink-0" data-node-id="11436:165309" data-name="<Button>">
        <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0" data-node-id="I11436:165309;15667:31995">
          <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-node-id="I11436:165309;9996:109957" data-name="Base">
            <p className="font-[family-name:var(--font\/family\/body,'Lato:Bold',sans-serif)] leading-[normal] not-italic relative shrink-0 text-[color:var(--primary\/dark-dust,#af9577)] text-[length:var(--font\/size\/overline,11px)] tracking-[1.98px] uppercase whitespace-nowrap" data-node-id="I11436:165309;9996:109958">
              Action 2
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardActions;
