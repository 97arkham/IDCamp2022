const firstName = prompt("Siapa nama depan mu?");
const lastName = prompt("Siapa nama belakang mu?");
const language = prompt("Bisa bahasa apa?");

const user={
    name:{
        first:firstName,
        last:lastName,
    },
    language:language
};

if (user.language === "indonesia") {
    alert(`Apakabar ${user.name.first} ${user.name.last} !`);
}else if (user.language === "inggris") {
    alert(`Nice to meet you, ${user.name.first} ${user.name.last} !`);
} else {
    alert(`hai ${user.name.first} ${user.name.last} !`);
}