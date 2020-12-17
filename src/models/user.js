
export default class UserModel {
  static create(data) {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  };

  static login(credentials) {
    // remember to send authorization headers
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
      // auth headers - included with any request requiring authentication
      credentials: 'include'
    }).then(res => res.json())
  };

  static logout() {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/auth/logout`, {
      method: "DELETE",
      credentials: 'include'
    })
  };
  // add a new route for user update and delete
  static update(data) {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/users/update`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      body: JSON.stringify(data)
    }).then(res => res.json())
  };

  static delete(data) {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/users/destroy`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  };
};

