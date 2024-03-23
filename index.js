const gifts = ["teddy bear", "drone", "doll"];

const name = "Johnny";

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`${name} wrapped a ${gifts[i]} and added a bow!`);
        
    }

    return gifts;
}

wrapGifts(gifts);



// non array solution

const names = ["Charlie", "Samip", "Ali"];
const event = "birthday";

function writeCards1(names) {
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
}

writeCards1(names);


function writeCards(names, event) {
    const messages = [];
    
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    
    return messages;
  }
  
  const result = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(result);



function countDown() {
    for (let countDown = 10; countDown >= 0; countDown--) {
    console.log(countDown)
  }
}
countDown()