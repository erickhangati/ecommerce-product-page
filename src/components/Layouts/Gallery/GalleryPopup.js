import React, { Fragment, useContext } from "react";
import ReactDOM from "react-dom";

import Overlay from "../../UI/Overlay/Overlay";
import GalleryModal from "./GalleryModal";
import CartContext from "../../../context/cart-context";

const GalleryPopup = () => {
  const cartCtx = useContext(CartContext);

  const overlayClickHandler = () => {
    // Close modal by clicking backdrop.
    cartCtx.setShowGalleryModal(false);
  };

  // Render the modal from a portal.
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay onClick={overlayClickHandler} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <GalleryModal />,
        document.getElementById("mobile-menu-modal")
      )}
    </Fragment>
  );
};

export default GalleryPopup;
