//This is the basic skeleton that lists the start
alert("All answers will be lowercase only. ANSWERS ARE CASE SENSITIVE.");
var startGame = prompt("The year is YX15. Your nation, the Atrar Union, located on planet Serenity, is being attacked by the Methera Empire. " +
    "War has broken out as the Atrar soldiers defend your nation against the Methera invaders. Do you help defend at the front lines, " +
    "try to find the mothership, try to resolve the conflict by speaking with the leader, or flee your planet? (defend/mothership/talk/flee)");
switch (startGame) {
    case "defend":
        var defendPlanet = prompt("There's smoke in the air, buildings taller then the clouds for miles on fire. The whole world in front of you is collapsing" +
            "Soldiers and civilians are dying all over and most Commanders have abandoned them. Now everyone on Serenity looks to you for leadership." +
            "Your primary objective is to find and secure Chancellor Keith but you need to get civilians out of danger. You have limited assets. What will you spend them on? Who will you save?" +
            "(chancellor/civilians)");
        if (defendPlanet === "chancellor"){
            var serOneA = prompt("You start sending out scouts and Serenity has been bombarded and turned into a complete war zone. Your scouts come back with good and bad news" +
                "They have found the chancellor injured and brought him back alive but unconscious and injured from a Methera Bot Execution Camp. " +
                "In the process however, your scouts let several hundreds of civilians die to keep their cover. A nearby Atrar ship will pick up the Chancellor if you personally escort him to one of two LZ's." +
                "FIRST LZ INTEL: The top of one of the only standing buildings but ");
        }
        break;
    case "mothership":
        break;
    case "talk":
        var speakWithLeader = prompt("Your meeting with the leader of the methera invaders is going very well, until you see a sharp object hanging above you" +
            "Do you continue the meeting or run back to your planet?");
         
        break;
    case "flee":
        var fleePlanet = prompt("As the Methera forces killed all of your friends and family several years ago, you have no attachment " +
            "to the Atrar Union and decide to flee the planet in the interest of saving your own life. You get in your ship and prepare " +
            "to take off. With the amount of fuel you have, there are only a few other planets you will be able to reach before you run " +
            "out. The closest, Nustrye, is an ally of the Atrar Union ");
        break;
}
/* Work on your own part:
 Andy: Defend
 Nick: Mothership
 Marques: Talk
 Ben: Flee
 */
//test comment push