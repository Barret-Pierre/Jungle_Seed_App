// import defaultCover from "../assets/monstera.jpg"
import monstera from "../assets/monstera.jpg"
import lyrata from "../assets/lyrata.jpg"
import pothos from "../assets/pothos.jpg"
import cactus from "../assets/cactus.jpg"
import olivier from "../assets/olivier.jpg"
import mint from "../assets/mint.jpg"
import basil from "../assets/basil.jpg"
import succulente from "../assets/succulent.jpg"
import calathea from "../assets/calathea.jpg"

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		isSpecialOffer: true,
		water: 2,
		light: 2,
		price: 8,
		cover: monstera,
	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab',
		isSpecialOffer: false,
		water: 1,
		light: 2,
		price: 16,
		cover: lyrata,
	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		isSpecialOffer: false,
		water: 2,
		light: 1,
		price: 14,
		cover: pothos
	},
	{
		name: 'cactus',
		category: 'cactus',
		id: '4kk',
		isSpecialOffer: false,
		water: 1,
		light: 3,
		price: 9,
		cover: cactus
	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		isSpecialOffer: false,
		water: 2,
		light: 3,
		price: 25,
		cover: olivier
	},
	{
		name: 'menthe',
		category: 'extérieur',
		id: '6uo',
		isSpecialOffer: false,
		water: 2,
		light: 3,
		price: 13,
		cover: mint
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		isSpecialOffer: true,
		water: 2,
		light: 3,
		price: 7,
		cover: basil
	},
	{
		name: 'calathea',
		category: 'plante grasse',
		id: '8fp',
		isSpecialOffer: false,
		water: 1,
		light: 2,
		price: 11,
		cover: calathea
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		isSpecialOffer: false,
		water: 3,
		light: 3,
		price: 12,
		cover: succulente
	}
]
