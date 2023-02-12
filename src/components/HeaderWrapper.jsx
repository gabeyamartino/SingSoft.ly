import Header from "./Header.jsx";
import React, { useRef } from "react";

const HeaderWrapper = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="fixed top-0 left-0 z-10 w-full">
      <Header {...props} />
    </div>
  );
});

HeaderWrapper.displayName = "HeaderWrapper";

export default HeaderWrapper;
