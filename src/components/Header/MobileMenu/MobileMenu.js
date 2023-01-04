import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";

import MobileMenuModal from "./MobileMenuModal";
import Overlay from "../../UI/Overlay/Overlay";
import CartContext from "../../../context/cart-context";

const MobileMenu = () => {
  // Importing cart content.
  const cartCtx = useContext(CartContext);

  const overlayClickHandler = () => {
    // Change state to close mobile menu.
    cartCtx.setShowMobileMenu(false);
  };

  return (
    <Fragment>
      {/* Port the overlay to the DOM */}
      {ReactDOM.createPortal(
        <Overlay onClick={overlayClickHandler} />,
        document.getElementById("overlay")
      )}

      {/* Port the mobile menu modal to the DOM */}
      {ReactDOM.createPortal(
        <MobileMenuModal />,
        document.getElementById("mobile-menu-modal")
      )}
    </Fragment>
  );
};

export default MobileMenu;
