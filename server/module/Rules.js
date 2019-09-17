class RuleModel {
    constructor(p_firstOp, p_secondOp) {
        this.firstOp = p_firstOp;
        this.secondOp = p_secondOp;
    }
}

rule1 = new RuleModel("take a shot then say the name of a love one", "person to your left take a shot"),

rule2 = new RuleModel("take two shots and tell everyone something you are greatful for", "person on your right take half a shot"),

rule3 = new RuleModel("tell the person on your right what makes him/her cute, then you take a shot", "take one shot for the homie"),

rule4 = new RuleModel("make anyone take a shot with you", "shotgun a beer(if no beer take 3 shots)"),

rule5 = new RuleModel("ask the person to your left to kiss you(if rejected take 3 shots)", "everyone else take a shot")

rule6 = new RuleModel("rate the person right of you from 1 to 5, then he/she take a shot", "take a shot with one person you love")

rule7 = new RuleModel("describe what's perfect 10 to you then take a shot", "people who's next to you left and right take a shot")

rule8 = new RuleModel("make the person you dislike the most in the group take two shots", "you and your best friend take a shot")

rule9 = new RuleModel("you and a guy take a shot", "take a shot then stand up and spin 10 times")

rule10 = new RuleModel("guess the last name of the person to your left, fail take a shot", "take two shots or kiss the person on your right, if he or she refuse you take one more shot with that person")

rule11 = new RuleModel("take a shot with no chaser until your next turn", "sing a song or take two shots")

rule12 = new RuleModel("take two shots with no chaser for the next minute ", "what's the combine numbers of letters in your name(10 seconds), fail take two shots")

rule13 = new RuleModel("person across from you take a shot", "person to your right take a shot with a girl in the room, if she say no you take two shots")

rule14 = new RuleModel("name 5 presidents in 5 seconds, fail take three shots", "anyone wearing black take a shot, white take two")

rule15 = new RuleModel("guess the favorite color of the person to your right, fail take a shot", "take a shot if the person to your left is wearing black")

rule16 = new RuleModel("take a shot if you feel loved", "take a shot if you are wearing white")

rule17 = new RuleModel("tell someone in the room why he/she is a bad friend and why or take two shots", "take a shot if you think dogs are cute")

rule18 = new RuleModel("do 10 push ups in 10 seconds, fail take two shots", "take a shot then do ten push ups")

rule19 = new RuleModel("take 3 shots or shotgun a beer", "point to a person you dislike and tell him why, then you both take a shot")

rule20 = new RuleModel("name 10 states (10 seconds), fail you and the people next to you take 2 shots", "if you have a pet you take a shot, if not the person to your right take a shot")

rule21 = new RuleModel("name 10 countries in South America (10 seconds), fail take two shots", "get up and do 20 jumping jack or take 3 shots")

rule22 = new RuleModel("drink half a can of beer", "take a shot with someone you love and someone you hate, don't say which one is which")

rule23 = new RuleModel("finish a full can of beer in 20 seconds, fail everyone including you take a shot", "play rock paper scissor with the person to your left, loser take two shots")

rule24 = new RuleModel("drink 1/3 of a can of beer then take a shot", "if you own a cat take a shot, if not people who are wearing black take a shot")

const arrayOfRules = [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13, rule14, rule15, rule16, rule17, rule18, rule19, rule20, rule21, rule22, rule23, rule24]


module.exports = arrayOfRules;
