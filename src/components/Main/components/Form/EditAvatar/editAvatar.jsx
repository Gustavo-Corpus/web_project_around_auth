import React, { useState, useEffect } from 'react';

export default function EditAvatar({ onUpdateAvatar }) {
  const [avatarLink, setAvatarLink] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const isLinkValid = avatarLink.trim().length > 0 && isValidUrl(avatarLink);
    setIsFormValid(isLinkValid);
  }, [avatarLink]);

  const handleAvatarChange = (event) => {
    setAvatarLink(event.target.value);
  };

  const handleSubmit = (event) => {  
    event.preventDefault();  
    if (isFormValid) {  
      onUpdateAvatar(avatarLink);
    }  
  };

  return (
    <form
      id="avatar-form"
      className="popup__form"
      name="avatar"
      noValidate
      onSubmit={handleSubmit}
    >
      <div className="popup__field">
        <input
          type="url"
          name="avatar"
          className="popup__input popup__input_avatar"
          placeholder="Enlace a la imagen"
          required
          value={avatarLink}
          onChange={handleAvatarChange}
        />
        <span className="popup__error">
          {avatarLink.trim().length === 0 ? 
            '' : 
            !isValidUrl(avatarLink) ? 
            'Por favor, introduce una URL válida' : 
            '\u00A0'}
        </span>
      </div>

      <button
        type="submit"
        className={`popup__button ${!isFormValid ? 'popup__button_disabled' : ''}`}
        disabled={!isFormValid}
      >
        Guardar
      </button>
    </form>
  );
}