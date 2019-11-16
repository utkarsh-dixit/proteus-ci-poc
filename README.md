# React Native One

React Native One is the project for building the app for Android, iOS, and Web with the same react base.

## Installation

Use the package manager [yarn](https://yarnpkg.com/lang/en/) because this project will be depending yarn "workspaces" functionality.


#### 1. Clone the repository 


```console
$ git clone https://github.com/headout/react-native-one.git
```

#### 2. Install all the dependencies
```console
$ yarn install
```

#### 3. Run Web version using
```console
$ yarn workspace web start
```

#### 4. Starting React Native server for Android/iOS
```console
$ yarn workspace mobile start
```

#### 5. Building Android and iOS
```console
$ yarn workspace mobile android
$ yarn workspace mobile ios
```

