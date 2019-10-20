function Command(name)
{
    var i;
    var id=COMMAND_dict[name];
    for (i=0; i<COMMANDS.length; i++)
    {
        if (COMMANDS[i].name==id)
        {
            return Commandfromid(i);
        }
    }
    console.log("Could not find command "+name);
}
function Commandfromid(i)
{
    var c = COMMANDS[i];
    return c;
}

var COMMANDS =[
    {
        name: "Ambush",
        priority: 1,
        units: "1",
        text: "",
        commander: "Any"
    },
    {
        name: "Assault",
        priority: 3,
        units: "3"
    },
    {
        name: "Implaccable",
        priority: 1,
        units: "Darth Vader",
        text: "At the end of Darth Vader's first activation, he may suffer 1 wound to shuffle his token into the order pool. During Darth Vader's second activation, he performs 1 fewer action.",
        commander: "Darth Vader"
    },
    {
        name: "Master of Evil",
        priority: 3,
        units: "Darth Vader and 2 units",
        text: "When Darth Vader is issued an order, he gains 1 dodge token.",
        commander: "Darth Vader"
    },
    {
        name: "Maximum Firepower",
        commander: "General Veers"
    },
    {
        name: "My Ally Is The Force",
        priority: 2,
        units: "2 Troopers",
        text: "When a friendly trooper unit is issued an order, it gains 1 dodge token.",
        commander: "Luke Skywalker"
    },
    {
        name: "New Ways To Motivate Them",
        priority: 2,
        units: "2 Troopers",
        text: "When a friendly non-Darth Vader trooper unit with a faceup order token activates, it may suffer 1 wound to perform 1 free action.",
        commander: "Darth Vader"
    },
    {
        name: "Push",
        priority: 2,
        units: "2"
    },
    {
        name: "Return Of The Jedi",
        priority: 3,
        units: "Luke Skywalker and 2 units",
        text: "When Luke Skywalker is issued an order, he gains 1 dodge token. When Luke Skywalker activates, each friendly trooper unit at range 1-3 of him may remove 1 suppersion token.",
        commander: "Luke Skywalker"
    },
    {
        name: "Son Of Skywalker",
        priority: 1,
        units: "Luke Skywalker",
        text: "After Luke Skywalker performs his first attack, he may perform 1 additional attack.",
        commander: "Luke Skywalker"
    },
    {
        name: "Standing Orders",
        priority: 4,
        units: "1"
    }
];