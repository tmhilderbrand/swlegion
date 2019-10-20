// Upgrades
var UPGRADE_TYPES={Specialist:"Specialist", Trooper:"Trooper",Equipment:"Equipment",Grenade:"Grenade",Force:"Force Power", System:"System",Hardpoint:"Hardpoint",Domino:"Domino",Pilot:"Pilot"};

function Upgrade(name)
{
	var i;
	var id=UPGRADE_dict[name];
	for (i=0; i<UPGRADES.length; i++)
	{
		if (UPGRADES[i].name==id)
		{
			return Upgradefromid(i);
		}
	}
function Upgradefromid(i)
	{
		var p = UPGRADES[i];
		return p;
	}
}

var UPGRADES=[
	{
		name: "88 Twin Light Blaster Cannon",
		type: "Hardpoint",
		points: 20,
		range: "1-3",
		attack: [ "Red", "Black", "White" ],
		keywords: [ "Fixed: Front", "Impact 1" ],
		unti: "AT-ST"
	},
	{
		name: "AT-RT Flamethrower",
		type: "Hardpoint",
		points: 25,
		range: "1",
		attack: [ "Black", "Black" ],
		keywords: ["Blast", "Fixed: Front", "Spray"],
		unit: "AT-RT"
	},
	{
		name: "AT-RT Laser Cannon",
		type: "Hardpoint",
		points: 35,
		range: "2-4",
		attack: [ "Red", "Black", "Black" ],
		keywords: ["Impact 3", "Fixed: Front"],
		unit: "AT-RT"
	},
	{
		name: "AT-RT Rotary Blaster",
		type: "Hardpoint",
		points: 30,
		range: "1-3",
		attack: [ "Black", "Black", "Black", "Black", "Black" ],
		keywords: [ "Fixed: Front" ],
		unit: "AT-RT"
	},
	{
		name: "Battle Meditation",
		type: "Force Power",
		points: 10,
		text: "When you issue orders, one of those orders can be issued to any friendly unit on the battlefield."
	},
	{
		name: "Commanding Presence",
		type: "Domino",
		points: 10,
		text: "When you issue orders, you can issue orders at range 4."
	},
	{
		name: "Comms Jammer",
		type: "System",
		points: 15,
		text: "Enemy units at range 1 cannot be issued orders, unless they are issuing an order to themselves."
	},
	{
		name: "Concussion Grenade",
		type: "Grenade",
		points: 5,
		range: "1",
		attack: ["Black"],
		keywords: ["Blast"]
	},
	{
		name: "DLT-19 Stormtrooper",
		type: "Specialist",
		points: 24,
		range: "1-4",
		attack: [ "Red", "Red" ],
		keywords: [ "Impact 1" ],
		text: "Add 1 DLT-19 Stormtrooper mini.",
		unit: "Stormtroopers"
	},
	{
		name: "DW-3 Concussion Grenade Launcher",
		type: "Hardpoint",
		points: 15,
		range: "1-2",
		attack: [ "Black", "Black" ],
		keywords: [ "Fixed: Front", "Blast" ],
		unit: "AT-ST"
	},
	{
		name: "Esteemed Leader",
		type: "Domino",
		points: 5,
		text: "While you are defending, each friendly corps trooper unit at range 1 gains X 3"
	},
	{
		name: "Force Choke",
		type: "Force Power",
		points: 5,
		text: "Free Action: Choose an enemy trooper mini at range 1 that is not a commander. It suffers 1 wound.",
		unit: "Galactic Empire"
	},
	{
		name: "Force Push",
		type: "Force Power",
		points: 10,
		text: "Free Action: Choose an enemy trooper unit at range 1. Perform a speed 1 move with that unit, even if it is engaged."
	},
	{
		name: "Force Reflexes",
		type: "Force Power",
		points: 15,
		text: "Free Action: Gain 1 dodge token."
	},
	{
		name: "General Weiss",
		type: "Pilot",
		points: 10,
		text: "Action: Until the end of your activation, you gain ARSENAL 2.",
		unit: "Galactic Empire"
	},
	{
		name: "Grappling Hooks",
		type: "Equipment",
		points: 3,
		text: "You gain Expert Climber"
	},
	{
		name: "HH-12 Stormtrooper",
		type: "Specialist",
		points: 34,
		range: "2-4",
		attack: [ "Black", "Black", "Black" ],
		unit: "Stormtroopers"
	},
	{
		name: "Impact Grenade",
		type: "Grenade",
		points: 5,
		range: "1",
		keywords: [ "Impact 1" ]
	},
	{
		name: "Jedi Mind Trick",
		type: "Force Power",
		points: 5,
		text: "Choose an enemy trooper unit at range 1-2. It gains 2 suppression tokens.",
		unit: "Rebellion"
	},
	{
		name: "Long-Range Comlink",
		type: "System",
		points: 10,
		text: "During the Command Phase, you may be issued orders as though you are in range of the nominated commander."
	},
	{
		name: "MPL-57 Ion Trooper",
		type: "Specialist",
		points: 32,
		range: "1-3",
		attack: ["Red", "Red"],
		keywords: ["Impact 1", "Ion 1"],
		text: "Add 1 MPL-57 Ion trooper mini.",
		unit: "Rebel Troopers"
	},
	{
		name: "Rebel Trooper",
		type: "Trooper",
		points: 10,
		text: "Add 1 Rebel Trooper mini.",
		unit: "Rebel Troopers"
	},
	{
		name: "Saber Throw",
		type: "Force Power",
		points: 10,
		text: "Action: Choose one of your melee weapons. Perform a ranged attack with that weapon against an enemy unit at range 1-2, using half of that weapon's dice, rounded up. This is treated as an attack action."
	},
	{
		name: "Snowtrooper",
		type: "Trooper",
		points: 12,
		text: "Add 1 Snowtrooper mini.",
		unit: "Snowtroopers"
	},
	{
		name: "Stormtrooper",
		type: "Trooper",
		points: 11,
		text: "Add 1 Stormtrooper mini.",
		unit: "Stormtroopers"
	},
	{
		name: "T-7 Ion Snowtrooper",
		type: "Specialist",
		points: 34,
		range: "1-2",
		attack: [ "Black", "White", "White" ],
		keywords: [ "Impact 1", "Ion 1" ],
		text: "Add 1 T-7 Ion snowtrooper mini.",
		unit: "Snowtroopers"
	},
	{
		name: "Targeting Scopes",
		type: "Equipment",
		points: 6,
		text: "You gain PRECISE 1"
	},
	{
		name: "Z-6 Trooper",
		type: "Specialist",
		points: 22,
		range: "1-3",
		attack: [ "White", "White", "White", "White", "White", "White" ],
		text: "Add 1 Z-6 Trooper mini.",
		unit: "Rebel Troopers"
	}
]
