// Put your code here
console.log("My Enemies List");
console.log("---------------");

const enemies = [
  {
    FirstName: "Joshua",
    LastName: "Flowers",
    Offenses: [
      {
        offense: "Being a jerk to me in elementary school",
        offense2: "Not being nice to me in elementary school",
      },
    ],
    isReallyHated: true,
  },

  {
    FirstName: "Darth",
    LastName: "Vader",
    Offenses: [
      {
        offense: "Cut off Luke's hand",
        offense2: "Murdered all those kids",
        offense3: "Unkind management practices",
      },
    ],
    isReallyHated: false,
  },

  {
    FirstName: "Betty",
    LastName: "Rudelady",
    Offenses: [
      {
        offense: "Phone calls in the theater",
        offense2: "Phone calls on the bus",
        offense3: "Phone calls in line at the grocery store",
        offense4: "Poor conversationalist",
      },
    ],
    isReallyHated: true,
  },

  {
    FirstName: "Leon",
    LastName: "Peck",
    Offenses: [
      {
        offense: "Keeps giving me a hotplate",
      },
    ],
    isReallyHated: false,
  },
];

for (const enemy of enemies) {
  if (enemy.isReallyHated) {
    console.log(`${enemy.FirstName} ${enemy.LastName} Really, really dislike!`);
  } else {
    console.log(`${enemy.FirstName} ${enemy.LastName}`);
  }
}
