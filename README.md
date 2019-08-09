# EmployeeDetails

## Demo
http://user-details-e4969.firebaseapp.com

## App Structure

![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/0.jpg)

## Documentation 
So there are two screens.

1. **Login screen**
2. **User details screen**

**Login Screen - **

user has to enter a valid email and password 
for which I am using the Angular Reactive forms - as the project is not connected to a 
backend, so if the user enters a valid email followed by the password

the app calls login() method which in return make a fake http request (getRequestWithObservable('auth-user-response.json')) 
which return some details like userId, jwt token, userName and userRole.

The login method sets the jwt token in the cookies(can also be stored in the localStorage) so that jwt token can access it throughout the application and can be appended in every Http request's Header.

[I have also created an Http Interceptor - which gets the store JWT Token in the cookies and appends the JWT token in every Http Request]

after the authentication is done the app navigates to the user details page 
where the user can see the list of the users.


**User Details page - **

Its access is protected by Angular Nav Guards.
I am using AuthGuard Service which checks if the user is authenticated or not based on which it returns a boolean value to the canActivate in the app-routing.module.ts.


--------------------------------------------------------------------------------------------

I have already included the app structure in the image below.

App contains 

1.**Components Folder**
2.**Services Folder**
3.**Shared Folder**
4.**Interceptors Folder**
5.**Models Folder**
6.**Assets Folder**
[this can be different according to a different way of working and templating]

1. **Components folder** - the idea was to keep all the components in one place.
    it contains the login, navigation and the user components.

- **Login Component** - it is already explained above.
- **Navigation Component** - it contains two more component(children) - Header and Side nav List
    The **Header component** is responsible to show the app header along with the Menu Button and the user's picture - also       hides some features if the user is not logged in.
    The **SideNavList** - contains the links to all the pages (i.e User page and logout).


**Users Component** - It's is protected with the NavGuards.

the users component contains - 3 child components - 
    a) **add-user** - for adding a new user (updates the userDetailsSubscription with the new user object).
    b) **user-details-list** - displays the list of the user - from a HTTP get request (contains a subscription the the                  userDetailsSubscription).
    c) **user-profile** - Dummy user profile.

I have user **@Input, @Output, BehaviourSubject** for passing the data between the components, used **Reactive forms** (also with validations).

2. **Services Folder** - contains 5 services with a common services.module.ts 

    a) **auth-guards.service** - Check is the user is Authenticated and return a boolean value and also navigates back to the               login page if the value is false.
    b) **auth.services** - validates the JWT token using @auth0/angular-jwt plugin and emits is the user Logged in or not and it            also contains logout() - which deletes the JWT from the cookies and navigates to the Login page.
    c) **cookies.service** - contains set, get and delete cookies methods - plugin used ngx-cookie-service.
    d) **http.service** - is responsible for making the HTTP calls.
    e) **user-details.service** - emits the user-list-response json to the subscribers.

3. **Shared Folder** - contains the common Material module.

4. **Interceptors Folder** - contains the HttpInterceptor which gets the store JWT Token in the cookies and appends the JWT                     token in every Http Request.

5. **Model Folder** - contains all the **types** and the **Interfaces** used throughout the Application.

6. **Assets folder** - contains **images** and **mock-json** file for the HTTP get requests.


I have used Angular Material for the UI part and have designed everything by myself.
I have tried to follow all the angular guidelines while developing the application.
I have also initialized Firebase in the project so that It can be built and deployed over the internet (link mentioned below).



## App Screen
![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/1.png)
![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/2.png)
![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/3.png)
![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/4.png)
![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/5.png)
![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/6.png)
![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/7.png)

## App Chrome Audit
![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/8.png)
![preview](https://raw.githubusercontent.com/Anky001/User-details/master/screenshots/9.png)

## Running and Testing

Please install the node modules by executing the following command

```
npm install
```

inside the root folder


## Built With

*  [Angular8](https://angular.io)

*  [Angular Material](https://material.angular.io)

*  [HTML](https://www.w3.org/html/)

*  [SCSS](https://sass-lang.com/)

*  [TypeScript](http://www.typescriptlang.org/)


## Author

*  **Ankit Pant**
