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
	var p = new Unit(UNITS[i]);
	p.id=name;
	if (!p.unique) { p.id=""+p.id(globalid++); }
	if (p.init != undefined) p.init();
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
			upgrades: ["Heavy Reinforcement", "Reinforcement", "Datapad", "Grenade"],
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
			upgrades: ["Tech"],
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
			upgrades: ["Force Power", "Force Power", "Datapad"],
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
			upgrades: ["Heavy Reinforcement", "Reinforcement", "Datapad", "Grenade"],
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
			upgrades: ["Attachment", "Tech"],
			weapons: ["Grappling Claws", "A-300 Blaster Rifle"],
		}
	];
	