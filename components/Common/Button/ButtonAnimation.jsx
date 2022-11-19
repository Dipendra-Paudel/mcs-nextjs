import Link from "next/link";

const ButtonAnimation = ({ link, label, color, size, classes = "" }) => {
  return (
    <Link href={link} passHref={true}>
      <a
        className={`animate-button text-white cursor-pointer ${
          classes !== "" ? classes : "inline-block"
        } ${color === "red" ? "bg-primary" : "bg-secondary"}`}
      >
        <div className={`text ${size === "small" ? "px-5 py-2" : "px-8 py-4"}`}>
          {label}
        </div>
        <div
          className={`left-side ${
            color === "red" ? "bg-primary2" : "bg-secondary2"
          }`}
        ></div>
        <div
          className={`right-side ${
            color === "red" ? "bg-primary2" : "bg-secondary2"
          }`}
        ></div>
      </a>
    </Link>
  );
};

export default ButtonAnimation;
