# react_04
Learn react + typescript + rescripts + yarn
* [create-react-app](https://create-react-app.dev/docs/making-a-progressive-web-app)
* [Tutorial](https://reactjs.org/tutorial/tutorial.html#passing-data-through-props)
* [react-typescript-cheatsheets](https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets)

# 1. Installing Yarn on Ubuntu
* [how-to-install-yarn-on-ubuntu-20-04](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-20-04/)
```sh
$ nvm ls
$ nvm install lts/gallium
$ nvm install lts/fermium
$ nvm alias default lts/gallium

$ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
$ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
$ sudo apt update
$ sudo apt install --no-install-recommends yarn
$ yarn --version

$ yarn create react-app react_03 --template typescript
$ cd react_03
$ yarn start
```

# 2. Add Router
```sh
$ yarn add react-router-dom
$ yarn add bootstrap

$ yarn add flow-bin
$ yarn flow init
$ yarn flow
```
