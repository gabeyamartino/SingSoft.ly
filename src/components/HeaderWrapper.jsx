import Header from "./Header.jsx";
import React from "react";

const HeaderWrapper = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="fixed top-0 z-10 w-full lg:max-w-screen-md">
      <Header {...props} />
    </div>
  );
});

HeaderWrapper.displayName = "HeaderWrapper";

export default HeaderWrapper;
