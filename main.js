var activity = [
    'Exercise',
    'Dance',
    'Drive',
    'Read',
    'Sleep',
    'Cook'
];

var friends = [
    'Mat',
    'Chris',
    'Bruce',
    'Garry',
    'that girl you forgot to text back',
    'David'
];

var randomNumber = Math.floor(Math.random()*activity.length);
var activityname = activity[randomNumber];
var friendname = friends[randomNumber];

document.write("How about you to <strong>" + activityname + "</strong> with <strong>" + friendname + "</strong>?");
