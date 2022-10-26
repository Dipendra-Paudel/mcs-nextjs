import Link from "next/link";

const CardLinkButton = ({ link, label }) => {
  return (
    <Link href={link} passHref={true}>
      <a className="text-sm text-secondary border px-4 py-2 border-secondary hover:bg-secondary hover:text-white">
        {label}
      </a>
    </Link>
  );
};

export default CardLinkButton;
