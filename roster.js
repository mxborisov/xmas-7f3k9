// Everything you might want to change lives in this one file.
window.SANTA = {
  title: "Secret Santa 2026",

  // The budget message shown on the reveal card
  budget: "Up to €25",
  budgetNote: "Keep it fun. Keep it secret. 🤫",

  // id = lowercase, no spaces
  people: [
    { id: "sven",    name: "Sven" },
    { id: "misho",   name: "Misho" },
    { id: "chocho",  name: "Chocho" },
    { id: "pacho",   name: "Pacho" },
    { id: "ami",     name: "Ami", egg: "(ne sum siguren, che toi moje da uchastva ama sure 😂)" },
    { id: "roskata", name: "Roskata" },
    { id: "avro",    name: "Avro" },
    { id: "simo",    name: "Simo" },
    { id: "ickata",  name: "Ickata" },
    { id: "rado",    name: "Rado" },
    { id: "koko",    name: "Koko" }
  ],

  // Pairs that must NOT draw each other (works in both directions)
  exclude: [["avro", "rado"]]
};
