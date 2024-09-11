import { useMemo } from "react";
import NavigationPill from "./NavigationPill";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({
  className = "",
  headerPadding,
  label5,
  propBackgroundColor5,
  propMinWidth5,
  propDisplay5,
  navigationPillPadding5,
}) => {
  const headerStyle = useMemo(() => {
    return {
      padding: headerPadding,
    };
  }, [headerPadding]);

  return (
    <header className={`header ${className}`} style={headerStyle}>
      <div className="navigation-pill-list">
        <NavigationPill
          label={label5}
          propBackgroundColor={propBackgroundColor5}
          propMinWidth={propMinWidth5}
          propDisplay={propDisplay5}
          navigationPillPadding={navigationPillPadding5}
        />
        <NavigationPill
          label={label5}
          propBackgroundColor={propBackgroundColor5}
          propMinWidth={propMinWidth5}
          propDisplay={propDisplay5}
          navigationPillPadding={navigationPillPadding5}
        />
        <NavigationPill
          label={label5}
          propBackgroundColor={propBackgroundColor5}
          propMinWidth={propMinWidth5}
          propDisplay={propDisplay5}
          navigationPillPadding={navigationPillPadding5}
        />
        <NavigationPill
          label={label5}
          propBackgroundColor={propBackgroundColor5}
          propMinWidth={propMinWidth5}
          propDisplay={propDisplay5}
          navigationPillPadding={navigationPillPadding5}
        />
        <NavigationPill
          label={label5}
          propBackgroundColor={propBackgroundColor5}
          propMinWidth={propMinWidth5}
          propDisplay={propDisplay5}
          navigationPillPadding={navigationPillPadding5}
        />
        <NavigationPill
          label={label5}
          propBackgroundColor={propBackgroundColor5}
          propMinWidth={propMinWidth5}
          propDisplay={propDisplay5}
          navigationPillPadding={navigationPillPadding5}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  label5: PropTypes.string,
  propBackgroundColor5: PropTypes.string,
  propMinWidth5: PropTypes.string,
  propDisplay5: PropTypes.string,
  navigationPillPadding5: PropTypes.string,

  /** Style props */
  headerPadding: PropTypes.any,
};

export default Header;
