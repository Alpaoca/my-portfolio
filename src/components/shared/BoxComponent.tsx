function BoxComponent({ text }) {
  return (
    <div className="bg-[#f7f7f7] border border-transparent inline-flex items-center rounded-md text-xs font-semibold font-sans text-pretty px-2 py-0 md:text-sm xl:text-nm">
      {text}
    </div>
  );
}

export default BoxComponent;
