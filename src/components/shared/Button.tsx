function Button({ text, buttonStyle, url, imgStyle, onclick, textStyle }) {
  return (
    <button
      className={`relative cursor-pointer rounded-lg p-2 min-h-[1rem] ${buttonStyle} flex items-center justify-center w-full xl:p-[10px] xl:min-h-[3rem] xl:rounded-xl`}
      onClick={onclick}
    >
      <img src={`${url}`} className={`rounded-md absolute ${imgStyle}`} />
      <p className={`text-white ${textStyle}`}>{text}</p>
    </button>
  );
}

export default Button;
