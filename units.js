var REBEL="Rebellion",EMPIRE="Galactic Empire";

function Unit(name)
{
	var i;
	var id=UNIT_dict[name];
	for (i=0; i<UNITS.length; i++)
	{
		if (UNITS[i].name==id)
		{
			return Unitfromid(i);
		}
	}
	console.log("Could not find unit "+name);
}
function Unitfromid(i)
{
	var p = UNITS[i];
	return p;
}

var UNITS = [
		{
			name: "Darth Vader",
			unique: true,
			faction:"EMPIRE",
			rank: "Commander",
			speed: 1,
			wound: 8,
			courage: 0,
			count: 1,
			points: 200,
			keywords: ["Deflect", "Immune: Pierce", "Master of the Force 1", "Relentless"],
			upgrades: ["Force Power", "Force Power", "Force Power"],
			weapons: ["Vader's Lightsaber"],
		},
		{
			name: "Stormtroopers",
			faction:"EMPIRE",
			rank: "Corps",
			speed: 2,
			wound: 1,
			courage: 1,
			count: 4,
			points: 44,
			keywords: ["Precise 1"],
			upgrades: ["Specialist", "Trooper", "Equipment", "Grenade"],
			weapons: ["Unarmed", "E-11 Blaster Rifle"],
		},
		{
			name: "74-Z Speeder Bikes",
			faction:"EMPIRE",
			rank: "Support",
			speed: 3,
			wound: 3,
			courage: 0,
			count: 2,
			points: 90,
			keywords: ["Cover 1", "Speeder 1"],
			upgrades: ["Systems"],
			weapons: ["EC-17 Hold-out Blaster", "Ax-20 Blaster Cannon"],
		},
		{
			name: "Luke Skywalker",
			unique: true,
			faction:"REBEL",
			rank: "Commander",
			speed: 2,
			wound: 6,
			courage: 3,
			count: 1,
			points: 160,
			keywords: ["Jump 1", "Charge", "Deflect", "Immune: Pierce"],
			upgrades: ["Force Power", "Force Power", "Equipment"],
			weapons: ["Anakin's Lightsaber", "Luke's DL-44 Blaster Pistol"],
		},
		{
			name: "Rebel Troopers",
			faction:"REBEL",
			rank: "Corps",
			speed: 2,
			wound: 1,
			courage: 1,
			count: 4,
			points: 40,
			keywords: ["Nimble"],
			upgrades: ["Specialist", "Trooper", "Equipment", "Grenade"],
			weapons: ["Unarmed", "A-280 Blaster Rifle"],
		},
		{
			name: "AT-RT",
			faction:"REBEL",
			rank: "Support",
			speed: 2,
			wound: 6,
			courage: 4,
			count: 1,
			points: 55,
			keywords: ["Armor", "Climbing Vehicle", "Expert Climber"],
			upgrades: ["Hardpoint", "System"],
			weapons: ["Grappling Claws", "A-300 Blaster Rifle"],
		},
		{
			name: "AT-ST",
			faction: "EMPIRE",
			rank: "Heavy",
			speed: 2,
			wound: 11,
			courage: 8,
			count: 1,
			points: 195,
			keywords: ["Armor", "Arsenal 2", "Weak Point 1: Rear"],
			upgrades: ["Pilot", "Hardpoint", "Hardpoint", "Hardpoint", "System"],
			weapons: ["Fence-cutting Blades", "Twin Blaster Cannon"],
		},
		{
			name: "T-47 Airspeeder",
			faction: "REBEL",
			rank: "Heavy",
			speed: 3,
			wound: 7,
			courage: 5,
			count: 1,
			points: 175,
			keywords: ["Armor", "Arsenal 2", "Cover 1", "Immune: Blast, Melee", "Speeder 2"],
			upgrades: ["Pilot", "Hardpoint", "System"],
			weapons: ["Ax/11 Double Laser Cannon"],
		},
		{
			name: "General Veers",
			unique: true,
			faction: "EMPIRE",
			rank: "Commander",
			speed: 2,
			wound: 5,
			courage: 2,
			count: 1,
			points: 90,
			keywords: ["Spotter 2", "Impact 1", "Precise 1", "Sharpshooter 1"],
			upgrades: ["Domino", "Domino", "Equipment"],
			weapons: ["Combat Expertise", "Veers' E-11 Blaster Rifle"],
		},
		{
			name: "Snowtroopers",
			faction:"EMPIRE",
			rank: "Corps",
			speed: 1,
			wound: 1,
			courage: 1,
			count: 4,
			points: 48,
			keywords: ["Steady"],
			upgrades: ["Specialist", "Trooper", "Equipment", "Grenade"],
			weapons: ["Unarmed", "E-11 Blaster Rifle"],
		},
	];
	