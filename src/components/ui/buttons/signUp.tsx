interface SignUpProps {
  w: string;
  h: string;
  text: string;
}

const SignUp = ({ w, h, text }: SignUpProps) => {
  const getFontSize = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 544) {
      return "0.8rem";
    }
    return +w.slice(2) > 50 ? "1.5rem" : "1rem";
  };

  const getWidth = () => {
    if (typeof window !== "undefined" && window.innerWidth <= 544) {
      return +w.slice(2) < 50 ? "w-28" : "w-36";
    }
    return w;
  };

  return (
    <button
      className={`${getWidth()} ${h} rounded-[10px] bg-main text-center text-white cursor-pointer hover:bg-blue-700`}
      style={{ fontSize: getFontSize() }}
    >
      {text}
    </button>
  );
};

export default SignUp;
