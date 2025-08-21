import './mobileOverlay.css'

interface MobileOverlayProp {
   isOpen: boolean,
}

function MobileOverlay({ isOpen }: MobileOverlayProp) {
   const mobileOverlay = isOpen ? 'mobile__overlay-active' : '';
   return (

      <div className={`mobile__overlay ${mobileOverlay}`} id="mobileOverlay"></div>
   )
}

export default MobileOverlay