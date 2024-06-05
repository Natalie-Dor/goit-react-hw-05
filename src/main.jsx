import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css';
import 'modern-normalize';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// modern-normalize
// axios
// npm install react-router-dom
// e55c53756133ccdba699b07cf2d9ba8e
// токен доступу для читання api:
//eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTVjNTM3NTYxMzNjY2RiYTY5OWIwN2NmMmQ5YmE4ZSIsInN1YiI6IjY2NWI0MzQxZTJkNzA0NGJiNTQ3ZTA5OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IITZYDh-x2wc2Btm6Po97qcqVrqpFiPW0ZI0GwxxFGQ

//
// Навігація в додатку
// У застосунку обов'язково повинні бути наступні маршрути.

// '/' – компонент HomePage, домашня сторінка із списком популярних кінофільмів.
// '/movies' – компонент MoviesPage, сторінка пошуку кінофільмів за ключовим словом.
// '/movies/:movieId' – компонент MovieDetailsPage, сторінка із детальною інформацією про кінофільм.
// /movies/:movieId/cast – компонент MovieCast, інформація про акторський склад. Рендериться в нижній частині на сторінці MovieDetailsPage.
// /movies/:movieId/reviews – компонент MovieReviews, інформація про огляди. Рендериться в нижній частині на сторінці MovieDetailsPage.
// Якщо користувач зайшов за неіснуючим маршрутом, потрібно показувати компонент NotFoundPage, в якому є посилання Link на домашню сторінку.

// Файли, папки та компоненти:
// Файли компонентів сторінок, таких як HomePage, MoviesPage, MovieDetailsPage, NotFoundPage, повинні бути в папці src/pages.
// Компоненти MovieCast і MovieReviews не є окремими сторінками, вони є лише частинами сторінки MovieDetailsPage, тому файли цих компонентів зберігаємо в src/components.
// Меню з навігаційними посиланнями перенесіть в компонент Navigation. Він складається з двох компонентів NavLink, які вказують на маршрути / і /movies.
// Для відображення списку фільмів створіть компонент MovieList. Використовуйте його на сторінках HomePage і MoviesPage.

// При натисканні на посилання Go back (після перегляду акторів/ рев'ю) користувач має повернутися на сторінку, з якої він зайшов на сторінку з деталями фільма. Якщо сторінку було оновлено і об'єкт місцезнаходження не зберігся, то повертай користувача на "/movies”.
