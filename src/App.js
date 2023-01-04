import React, { useState } from "react";

import CartProvider from "./context/CartProvider";
import Header from "./components/Header/Header";
import CartPage from "./components/Layouts/CartPage";
import MobileMenu from "./components/Header/MobileMenu/MobileMenu";
import GalleryModal from "./components/Layouts/Gallery/GalleryPopup";
import CartHover from "./components/Header/Cart/CartHover";

const App = () => {
  // State to show and hide mobile menu.
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [showCartHover, setShowCartHover] = useState(false);

  return (
    // Pass setShowMobileMenu for setting the showMobileMenu state to the Context Provider
    <CartProvider
      setShowMobileMenu={setShowMobileMenu}
      setShowGalleryModal={setShowGalleryModal}
    >
      {/* Show mobile menu when humberger menu clicked. Controlled by state. */}
      {showMobileMenu && <MobileMenu />}

      {/* Show gallery modal when product image clicked */}
      {showGalleryModal && <GalleryModal />}

      {/* Show Header component. */}
      <Header
        setShowCartHover={setShowCartHover}
        showCartHover={showCartHover}
      />

      {/* Show cart page component. */}
      <CartPage />

      {showCartHover && <CartHover setShowCartHover={setShowCartHover} />}
    </CartProvider>
  );
};

export default App;
