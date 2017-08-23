// Upgrades
var UPGRADE_TYPES={Specialist:"Specialist", Reinforcement:"Reinforcement",Datapad:"Datapad",Grenade:"Grenade",Force:"Force Power", Tech:"Tech",Attachment:"Attachment"};

var UPGRADES=[
	{
		name: "DLT-19 Stormtrooper",
		type: "Heavy Reinforcement",
		points: 24,
		range: "1-4",
		attack: [ "Red", "Red" ],
		keywords: [ "Impact 1" ],
		unit: "Stormtroopers"
	},
	{
		name: "AT-RT Flamethrower",
		type: "Attachment",
		range: "1",
		attack: [ "Black", "Black" ],
		unit: "AT-RT"
	},
	{
		name: "AT-RT Rotary Blaster",
		type: "Attachment",
		points: 30,
		range: "1-3",
		attack: [ "Black", "Black", "Black", "Black", "Black" ],
		keywords: [ "Fixed: Front" ],
		unit: "AT-RT"
	},
	{
		name: "Battle Meditation",
		type: "Force Power",
		points: 10
	},
	{
		name: "Force Choke",
		type: "Force Power",
		points: 5,
		unit: "Galactic Empire"
	},
	{
		name: "Force Push",
		type: "Force Power",
		points: 10
	},
	{
		name: "Force Reflexes",
		type: "Force Power",
		points: 15
	},
	{
		name: "HH-12 Stormtrooper",
		type: "Specialist",
		points: 34,
		range: "2-4",
		attack: [ "Black", "Black", "Black" ]
	},
	{
		name: "Jedi Mind Trick",
		type: "Force Power",
		points: 5,
		unit: "Rebellion"
	},
	{
		name: "Long-Range Comlink",
		type: "Tech",
		points: 10
	},
	{
		name: "Rebel Trooper",
		type: "Reinforcement",
		points: 10
	},
	{
		name: "Saber Throw",
		type: "Force Power",
		points: 10
	},
	{
		name: "Stormtrooper",
		type: "Reinforcement",
		points: 11
	},
	{
		name: "Targeting Scopes",
		keywords: "Precise 1"
	},
	{
		name: "Z-6 Trooper",
		type: "Specialist",
		points: 22,
		unit: "Rebel Troopers"
	}
]
