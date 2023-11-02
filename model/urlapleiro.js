export const urlapLeiro = {
  nev: {
    megjelenes: "Név",
    tipus: "text",
    value: "",
    placeholder: "Valaki vagyok",
    regex: "[A-Z][a-z]{2,15}", //pattern is lehet
    validalas: "Név nagybetűvel kezdődik, legalább 3 karakter!"
  },
  szulEv: {
    megjelenes: "Születési év",
    tipus: "number",
    value: "2000",
    regex: {
      min: 1900,
      max: 2023,
    },
    validalas: "1000 és 2023 között kell legyen a szám!"
  },
  datum: {
    megjelenes: "Dátum",
    tipus: "date",
    value: ""
  },
  email: {
    megjelenes: "Email",
    tipus: "email",
    value: "",
    placeholder: "valaki@gmail.com",
    regex: "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",
    validalas: "Az email címet @ jellel irjuk pl.: valaki@gmail.com"
  }
};
