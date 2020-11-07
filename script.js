console.log('A mixed messages program');

//Storing the messages to be randomly outputed.
const messages = [['Your limitation-it\'s only your imagination', 
    'Push yourself because no one else is going to do it for you.',
    'Sometimes, later becomes never. Do it now.'],
    ['Great things never come from the comfort zone',
    'Dream it, wish it, do it.',
    'Success doesn\'t just find you, you have to go out and get it'],
    ['The harder you work for something, the greater you\'ll feel when you achieve it.',
    'Dream bigger, do bigger.',
    'Don\'t stop when you are tired, stop when you are done.'],
    ['Wake up with determination, go to bed with satisfaction.',
    'Do something today that your future self will thank you for.',
    'Little things make big days.'],
    ['It\'s going to be hard, but hard does not mean impossible.',
    'Don\'t wait for opportunity, create it.',
    'Sometimes, we are tested not to show our weaknesses, but to discover our strengths.'],
    ['The key to success is to focus on goals, not obstacles.',
    'Dream it, believe it, build it.',
    'You have to believe in yourself.'],
    ['Create a positive environment.',
    'Celebrate your small wins.',
    'Surround yourself with motivated people.'],
    ['If people are doubting how far you can go, go so far you can\'t hear them anymore.',
    'Magic is believing in yourself, if you can make that happen, you can make anything happen.',
    'One day or day one, you decide.']];

    const randomMessages = (arr) => {
        let index = Math.floor(Math.random() * Math.floor(arr.length));
        let greeting = 'Hello user! Here is your special message for the day:';
        let message = console.log(greeting + '\n' + (arr[index])) ;
        return message;
    }

    randomMessages(messages);