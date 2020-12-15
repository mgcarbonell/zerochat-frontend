
export default class UserModel {
  static create(data) {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json())
  }

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
  }

  static logout() {
    return fetch(`${process.env.REACT_APP_INTERNAL_API_URL}/auth/logout`, {
      method: "DELETE",
      credentials: 'include'
    })
  }
}