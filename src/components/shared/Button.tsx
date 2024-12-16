function Button({ text, buttonStyle, url, imgStyle, onclick, textStyle }) {
  return (
    <button
      className={`relative cursor-pointer rounded-xl p-[10px] min-h-[3rem] ${buttonStyle} flex items-center justify-center w-full`}
      onClick={onclick}
    >
      <img src={`${url}`} className={`rounded-md absolute ${imgStyle}`} />
      <p className={`text-white ${textStyle}`}>{text}</p>
    </button>
  );
}

export default Button;
