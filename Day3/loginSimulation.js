export class User {
  static users = [];
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = "user";
    this.isLoggedIn = false;
    this.profile = { bio: "", website: "" };
    User.users.push(this);
  }
  logIn(email, password) {
    if (email === this.email && password === this.password) {
      this.isLoggedIn = true;
      console.log(`The user ${this.name} is logged in`);
      return true;
    } else {
      console.log("email or password are incorrect, login failed");
      return false;
    }
  }
  logOut() {
    this.isLoggedIn = false;
  }
  updateProfile(bio, website) {
    this.profile = { bio: bio, website: website };
  }
}

export class Admin extends User {
  constructor(name, email, password) {
    super(name, email, password);
    this.role = "admin";
  }

  getUsers(admin) {
    if (admin instanceof Admin) {
      return User.users;
    } else {
      throw new Error("Access denied");
    }
  }
}
