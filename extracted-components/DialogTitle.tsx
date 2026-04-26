type DialogTitleProps = {
  className?: string;
};

function DialogTitle({ className }: DialogTitleProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start p-[16px_24px] relative"} data-node-id="11436:165306">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="I11436:165306;899:99867" data-name="<Typography>">
        <p className="font-[family-name:var(--fontfamily,'Roboto:Regular',sans-serif)] font-[var(--fontweightregular,400)] leading-[1.6] relative shrink-0 text-[color:var(--text\/primary,rgba(0,0,0,0.87))] text-[length:var(--typography\/h6,20px)] tracking-[0.15px] w-full" data-node-id="I11436:165306;899:99868" style={{ fontVariationSettings: "'wdth' 100" }}>
          Dialog Title
        </p>
      </div>
    </div>
  );
}

export default DialogTitle;
