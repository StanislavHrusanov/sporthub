exports.validateUser = ({ username, firstName, lastName, password, repass, email }) => {
    if (username.length < 3 || username.includes(' ')) {
        throw ('Потребителското име трябва да съдържа поне 3 символа различни от интервал!');
    }
    if (!firstName.match(/^[А-Я][а-я]*$|^[A-Z][a-z]*$/gm)) {
        throw ('Името трябва да започва с главна буква и да се състои само от букви на кирилица или латиница!');
    }
    if (!lastName.match(/^[А-Я][а-я]*$|^[A-Z][a-z]*$/gm)) {
        throw ('Фамилията трябва да започва с главна буква и да се състои само от букви на кирилица или латиница!');
    }
    if (password.length < 6 || password.includes(' ')) {
        throw ('Паролата трябва да съдържа поне 6 символа различни от интервал!');
    }
    if (password != repass) {
        throw ('Паролите не съвпадат!');
    }
    if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm)) {
        throw ('Невалиден имейл адрес!');
    }
}