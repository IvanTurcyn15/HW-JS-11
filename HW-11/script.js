// Task 1

const bankAccount = {
    ownerName:'James',
    accountNumber: 432,
    balance:4500,

    deposit(sum){
        this.balance += sum;
        return `Теперішній баланс - ${this.balance}`;
    },

    withdraw(sum){
        this.balance -= sum;
        return `Теперішній баланс - ${this.balance}`;
    }
};

const depositInput = document.getElementById("depositInput");
const withdrawInput = document.getElementById("withdrawInput");

const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");

depositBtn.addEventListener("click", () => alert(bankAccount.deposit(Number(depositInput.value))));
withdrawBtn.addEventListener("click", () => alert(bankAccount.withdraw(Number(withdrawInput.value))));

// Task 2

const weather = {
    temperature: 90,
    humidity: 26,
    windSpeed: 13,

    checkTemperature(temp){
        this.temperature = temp;
        return this.temperature < 0 ? alert("Температура нижче 0 градусів Цельсія") : alert("Температура вище або дорівнює 0 градусів Цельсія");
    }
};


const tempInput = document.getElementById("tempInput");
const tempBtn = document.getElementById("tempBtn");

tempBtn.addEventListener("click", () => weather.checkTemperature(Number(tempInput.value)));


// Task 3

const user = {
    name: 'Ivan',
    email: 'hahahaha@gmail.com',
    password: 1234,

    login(emailInput, passwordInput){
        return emailInput === this.email && passwordInput === this.password 
        ? alert('Пошта та пароль були введені правильно')
        : alert('Пошта та пароль були введені неправильно');
    }
};

const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const checkBtn = document.getElementById('checkBtn');

checkBtn.addEventListener("click", () => user.login(emailInput.value,Number(passwordInput.value)));


// Task 4

const movie = {
    title:'Гидкий я',
    director: 'Кріс Рено',
    year: 2010,
    rating: 7.6,

    checkRating(){
        return this.rating > 8;
    }
}

const title = document.getElementById('title');
title.textContent = `Назва фільму - ${movie.title}`;
title.style.color = movie.checkRating() ? 'green' : 'red';

const director = document.getElementById('director');
director.textContent = `Ім'я режисера - ${movie.director}`;

const year = document.getElementById('year');
year.textContent = `Рік виходу - ${movie.year}`;

const rating = document.getElementById('rating');
rating.textContent = `Рейтинг фільму - ${movie.rating}`;

