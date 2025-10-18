interface IProfile {
  bio: string;
  website: string;
}

type UserRole = 'user' | 'admin';

export class User {
  static users: User[] = [];
  public name: string;
  public email: string;
  protected password: string;
  public role: UserRole;
  public isLoggedIn: boolean;
  public profile: IProfile;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = 'user';
    this.isLoggedIn = false;
    this.profile = { bio: '', website: '' };
    User.users.push(this);
  }

  logIn(email: string, password: string): boolean {
    if (email === this.email && password === this.password) {
      this.isLoggedIn = true;
      console.log(`The user ${this.name} is logged in`);
      return true;
    } else {
      console.log('email or password are incorrect, login failed');
      return false;
    }
  }

  logOut(): void {
    this.isLoggedIn = false;
  }

  updateProfile(bio: string, website: string): void {
    this.profile = { bio, website };
  }
}

export class Admin extends User {
  constructor(name: string, email: string, password: string) {
    super(name, email, password);
    this.role = 'admin';
  }

  getUsers(admin: User): User[] {
    if (admin instanceof Admin) {
      return User.users;
    } else {
      throw new Error('Access denied');
    }
  }
}
