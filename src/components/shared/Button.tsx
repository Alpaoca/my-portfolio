function Button({ text, style, url, img }) {
  return (
    <button
      className={`relative cursor-pointer rounded-xl p-[10px] min-h-[3rem] min-w-full text-white ${style} flex items-center justify-center`}
    >
      <img src={`${url}`} className={`rounded-md absolute ${img}`} />
      {text}
    </button>
  );
}

export default Button;
