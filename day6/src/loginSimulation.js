'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' + String(b) + ' is not a constructor or null'
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
exports.Admin = exports.User = void 0;
var User = /** @class */ (function () {
  function User(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = 'user';
    this.isLoggedIn = false;
    this.profile = { bio: '', website: '' };
    User.users.push(this);
  }
  User.prototype.logIn = function (email, password) {
    if (email === this.email && password === this.password) {
      this.isLoggedIn = true;
      console.log('The user '.concat(this.name, ' is logged in'));
      return true;
    } else {
      console.log('email or password are incorrect, login failed');
      return false;
    }
  };
  User.prototype.logOut = function () {
    this.isLoggedIn = false;
  };
  User.prototype.updateProfile = function (bio, website) {
    this.profile = { bio: bio, website: website };
  };
  User.users = [];
  return User;
})();
exports.User = User;
var Admin = /** @class */ (function (_super) {
  __extends(Admin, _super);
  function Admin(name, email, password) {
    var _this = _super.call(this, name, email, password) || this;
    _this.role = 'admin';
    return _this;
  }
  Admin.prototype.getUsers = function (admin) {
    if (admin instanceof Admin) {
      return User.users;
    } else {
      throw new Error('Access denied');
    }
  };
  return Admin;
})(User);
exports.Admin = Admin;
