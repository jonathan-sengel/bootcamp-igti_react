# React Elections

> ### Project status: working, but still in the process of improvement :heavy_check_mark: / :warning:

## Deployed on Netlify (front) and Glitch (back) :dash:

#### Front-end:

> https://react-elections-jsengel.netlify.app/
> :warning: It may take a while to load when accessing for the first time, this is due to Glicth, it is in "sleeping" mode, please wait a few seconds :warning:

---

#### Back-end:

> https://react-elections-jonathan-sengel.glitch.me/
> routes: **/candidates**, **/election** and **/cities**

## In this repository I'm showing the result of the second module challenge of IGTI Bootcamp React :+1:

> This second application, carried out in module II of the bootcamp, made us put into practice basic knowledge in React (components, props, hooks), which were acquired in the two weeks related to this module, using Tailwindcss together. :arrow_upper_right:

<img src="https://i.imgur.com/XR0KWk1.jpeg" width=800 alt="home page image">
<img src="https://i.imgur.com/rvUXDwM.jpeg" alt="country page image" align="center">

## How to run? :boom:

1. Download zip or clone repository
2. Open the prompt and run the following commands
   ```console
   > cd module2-React-Elections
   > yarn install
   ```
3. At the end of the installation of the premises:
   ```console
   > cd backend
   > yarn install
   ```
4. Finally perform the following in the same order.
   ```console 
   > yarn server 
   ```
   "in other command window"
   ```console
   > cd module2-React-Elections
   > yarn dev
   ```
   Let's enjoy!!!!

## Content :point_down:

Basicamente o aplicativo lhe retorna o resultado das eleições em um municipio selecionado atraves do combobox. Estes dados são consultados via API em um backend rodando com o json-server.
The data displayed are: city name, number of candidates, total voters, abstentions and turnouts and below the list with candidates, their image and respective number of votes in unit and percentage

> :information_source: In the future, features to filter by candidate rather than just by cities will be introduced and more dynamic charts will be included using some library.

## What was used :interrobang:

- Components
  > Modularization and separation of the application into components for easier maintenance
- Hooks (useState, useEffect)
  > Using state and effect hooks to manage information and when it will be rendered
- Props manipulation
  > With the separate components it is necessary to exchange information between them, so the props were manipulated between them;
- Using JSX Syntax
  > In React it is recommended to use JSX to build the components, it is a mix of markup language with Javascript and is sooo powerful!
- Async/Await
  > For handling asynchronous requests in a "synchronous way"
- Data treatment with map and filter.
- Use of tailwind for component styling
  > CSS library that gives you the facility to style the components quickly and easily... it is very simple to use, but all the applied styling will be "inline".
- React spinners for loading states
  > A collection of loading spinners with React.js based on [Halogen](https://github.com/yuanyan/halogen)
- Json-Server to act as a backend
  > Get a full fake REST API with **zero coding** in **less than 30 seconds** (seriously)
