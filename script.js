//if esc is pressed 3 times, change to youtube link

document.addEventListener('keydown', function(event){
	if(event.key == "Escape"){
		if(event.key == "Escape") {
      if(event.key == "Escape") {
        window.location.href = "https://youtu.be/eecw2ImHWlM";
      }
    }
	}
});


// upon loading first page, make an alert
function mymessage() {
  alert("For a quick escape from this website, press the escape button 3 times.\n\nThis website will talk about verbal abuse. If you are sensitive to that, please proceed with caution or exit this website. Thank you!\n\n:)");
}


// upon loading story page, make an alert
function tw() {
  alert("This page will show many of abuse victims' stories. You are not alone in your struggles. Please take caution, for this will talk about abuse, mentions of suicidal thoughts, and more.\n\nRemember, for a quick escape from this website, press the escape button 3 times.");
}

// statistics generator
var facts = [
  "In romantic relationships, 12.1% of women experience verbal abuse.",
  "In romantic relationships, 17.3% of men experience verbal abuse.",
  "Many people experience verbal abuse in their lifetimes. Most often, abuse occurs in romantic relationships, between a parent and a child, or at work.",
  "Verbal abuse against children is highly understudied and underreported.",
  "The World Health Organization (WHO) estimates that over 1 billion children between the ages of 2 and 17 experienced some type of abuse, verbal included.",
  "A report by the RAND Corporation, an American research organization, found that as many as 13.1% of men and 12.4% of women experienced verbal abuse regularly at work.",
  "Emotional neglect is a form of verbal abuse.",
  "A person who is constantly verbally abused by their partner may experience anxiety, depression, changes in mood, chronic stress, a lowered self-esteem, feelings of guilt or shame stemming from the abuse, post-traumatic stress disorder (PTSD), isolation/withdrawal from loved ones, and/or substance abuse.",
  "When a child is verbally abused by one of their parents, their brain development is affected. Research has shown that changes in the white matter pathways of the brain, which is the area of the brain that helps send messages, occur when children are subjected to verbal abuse.",
  "One study looked at whether verbal affection during childhood from the parent who was verbally abusive or the other parent could help to mitigate the effect of verbal abuse. It found that no matter how much verbal affection the child received, the effects of verbal abuse were still present.",
  "The same study showed that verbal abuse during childhood could cause the same extent of psychological damage as witnessing domestic violence and being sexually abused.",
  "Some long-term consequences of childhood verbal abuse are impaired social skills, impaired cognitive development, impaired emotional development, feelings of helplessness/aggression/neuroticism, long-term tendency to be anxious/pessimistic, an inability or unwillingness to connect with others, poor school performance, an increased risk for getting involved in illegal activity later on in life, low self-esteem, psychiatric disorders (such as anxiety, PTSD, and depression), substance abuse issues later on in life, eating disorders, suicidal/self-injury behaviors in adulthood, poor physical health in adulthood, increased risk of heart disease, and/or an inability to trust others in adulthood.",
  "More than 50% of children who are abused as children also experience abuse in adulthood.",
  "Roughly 1 in 5 Americans have been verbally abused at their workplace.",
  "Some effects of workplace verbal abuse are high blood pressure (hypertension), feelings of depression, a loss of interest in doing activities that you once enjoyed, feeling guilt/shame/humiliation, being obsessed with getting work done even on your days off, anxiety surrounding work, and/or feeling overwhelmed/defeated/angry at work.",
  "Oftentimes, adults who have abusive tendencies developed them because of childhood patterns of abuse that occurred either to them or in their home.",
  "People who are in abusive relationships often ignore the abuse and view their situation as not as bad as it actually is. Because of that, helping someone who is being abused can be difficult."
]

var random;

function newFacts() {

  random = Math.floor(Math.random() * (facts.length));
  document.getElementById("facts").innerHTML = facts[random];
}

// acts of kindness generator
var acts = [
  "Surprise them with an unexpected visit or phone call.",
  "Give them a big hug.",
  "Express your empathy. Often the greatest gift we can someone else is the gift of empathy.",
  "Give them a handwritten card or letter.",
  "Babysit for free. To new parents especially, this can mean the world.",
  "Write them a letter.",
  "Make them a meal.",
  "Go visit your parents. Tell them how much you appreciate them (or at least one thing about them you appreciate).",
  "Treat them to their favorite coffee.",
  "Say ‘I love you’ with meaning.",
  "Tell them how wonderful they are and how happy you are to have them in your life.",
  "Ask, “How can I help you?”",
  "Make them a cup of tea.",
  "Listen to them carefully without interrupting.",
  "Say, “I’m sorry.”",
  "Buy them a gift from the dollar store.",
  "Help with a household chore.",
  "Tell them you wish you understood.",
  "Bring them Ibruprofen for their headache.",
  "Invite them to play.",
  "Acknowledge and respect their feelings even if you feel they are not accurate/appropriate.",
  "Hold their hand.",
  "Buy them a small chocolate.",
  "Gently wash and dress their cut/wound.",
  "Tell them about the best part of the day you just spent with them.",
  "Let them sleep.",
  "Offer them a drink of water.",
  "Wear or use a gift they gave you in their presence.",
  "Keep that sigh to yourself.",
  "Use a kind voice even if you have to fake it.",
  "Listen for the feelings behind the words.",
  "Put chocolate chips in their pancakes.",
  "Visit a sick friend.",
  "Run them a bath.",
  "Give a new mom her own gift.",
  "Respect someone’s wishes.",
  "Write messages of love and put them in their lunches.",
  "Choose a book they might like and lend it to a friend.",
  "Take the garbage out for a friend.",
  "Hold them while they cry.",
  "Give them a chocolate bandaid.",
  "Invite them over for scones and clotted cream.",
  "Send a copy of a photo to the person in it.",
  "Make someone else’s bed.",
  "Share your knowledge with someone who needs it.",
  "Share herbs from your garden.",
  "Share a good recipe.",
  "Take a rose to someone in the home for the elderly.",
  "Say please and thank you.",
  "Let someone go first through a door.",
  "Buy a box of cookies and offer them around.",
  "Carry someone’s bags.",
  "Pick up some trash.",
  "Be extra polite.",
  "Donate your “read” books to the library.",
  "Buy a sandwich for the person asking for cash in front of the grocery store.",
  "Hold up your hand in thanks when other drivers let you through.",
  "Welcome new people to your neighborhood, school, club, etc.",
  "Hold a door open for someone.",
  "Buy a stranger lunch.",
  "Put change in an expiring meter.",
  "Offer up your seat.",
  "Return a misplaced or lost item.",
  "Smile at every stranger at the mall.",
  "Donate your unwanted items.",
  "Send off a care package to the military.",
  "Share your homegrown vegetables.",
  "Pay for a strangers bridge toll.",
  "Write Post-It notes with encouraging messages and leave them in library books.",
  "Write a thank you note.",
  "Leave some change at the coffee machine.",
  "Let people through in traffic.",
  "Use a compost bin and recycle as much as possible.",
  "Acknowledge someone else’s kindness to you.",
  "Leave a tip plus another dollar.",
  "Pay a compliment.",
  "Leave your old magazines in waiting rooms.",
  "Volunteer.",
  "Buy some flowers and give them out.",
  "Let someone go ahead at the checkout.",
  "Be patient when you want to yell.",
  "Water someone’s drying / dying flowers.",
  "Let someone cut in line at the movie theater.",
  "Listen carefully to what someone is really passionate about.",
  "Ask a customer service person genuinely how they’re doing.",
  "Invite someone who recently moved to town for coffee.",
  "Be extra patient and understanding."
]

var random2;

function newActs() {

  random2 = Math.floor(Math.random() * (acts.length));
  document.getElementById("acts").innerHTML = acts[random2];
  
}
