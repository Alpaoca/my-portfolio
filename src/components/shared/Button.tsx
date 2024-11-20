function Button({ text, style, url, img, onclick }) {
  return (
    <button
      className={`relative cursor-pointer rounded-xl p-[10px] min-h-[3rem] text-white ${style} flex items-center justify-center`}
      onClick={onclick}
    >
      <img src={`${url}`} className={`rounded-md absolute ${img}`} />
      {text}
    </button>
  );
}

export default Button;
