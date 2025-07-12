class Api {  
  constructor({ baseUrl }) {  
    this._baseUrl = baseUrl;  
  }  
  
  _getHeaders() {  
    return {  
      'Content-Type': 'application/json',  
      'Authorization': '002abf4d-3eb5-4d3d-b6e5-f294e40cd739'
    };  
  }  
  
  _checkResponse(res) {  
    if (res.ok) {  
      return res.json();  
    }  
    return Promise.reject(`Error: ${res.status}`);  
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._getHeaders()
    })
    .then(this._checkResponse);
  }

  getCardList() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._getHeaders()
    })
    .then(this._checkResponse);
  }

  setUserInfo(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify(data)
    })
    .then(this._checkResponse);
  }

  setUserAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar
      })
    })
    .then(this._checkResponse);
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify(data)
    })
    .then(this._checkResponse);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._getHeaders()
    })
    .then(this._checkResponse);
  }

  changeLikeCardStatus(cardId, isLiked) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: isLiked ? 'DELETE' : 'PUT',
      headers: this._getHeaders()
    })
    .then(this._checkResponse);
  }
}


const api = new Api({
  baseUrl: 'https://around-api.es.tripleten-services.com/v1'
});

export default api;