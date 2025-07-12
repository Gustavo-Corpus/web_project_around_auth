import { useEffect } from 'react';

export default function ImagePopup({ card, isOpen, onClose }) {
  
  useEffect(() => {
    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`image-popup ${isOpen ? 'image-popup_opened' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className="image-popup__container">
        <button
          type="button"
          className="image-popup__close"
          onClick={onClose}
          aria-label="Cerrar"
        />
        {card && (
          <figure className="image-popup__figure">
            <img 
              src={card.link} 
              alt={card.name} 
              className="image-popup__image" 
            />
            <figcaption className="image-popup__caption">
              {card.name}
            </figcaption>
          </figure>
        )}
      </div>
    </div>
  );
}