// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

// Bonus

// Abbellire con CSS o Bootstrap
// Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo quelle precedenti)
// Far sì che le email vengono stampati solo quando arrivano tutti i 10 email

const emailListContainer = document.querySelector(".email-list-container");
const newEmailsBtn = document.querySelector("button");

// const emailListItem = `<li>${email}</li>`;
const getEmailList = () => {
for (let i = 0; i < 10; i++) {
axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then((resp) => {
    const email = resp.data.response;
    const emailListItem = `<li>${email}</li>`;
    emailListContainer.innerHTML += emailListItem;
  });
}};
getEmailList();
newEmailsBtn.addEventListener("click", () => 
  {
    emailListContainer.innerHTML = "";
    getEmailList();
  });