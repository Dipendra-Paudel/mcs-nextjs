const HamburgerMenu = ({ toggled, changeToggled }) => {
  return (
    <div
      className="space-y-1 cursor-pointer  hamburger-menu relative z-50"
      onClick={() => changeToggled(!toggled)}
    >
      <div className={toggled ? "rotate-45" : ""}></div>
      <div className={toggled ? "rotate-315" : ""}></div>
      <div className={toggled ? "fade" : ""}></div>
    </div>
  );
};

export default HamburgerMenu;
