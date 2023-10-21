import Lamp from './Images/Lamp.png'
import Bedroom from './Images/Bed Room.png'
import LivingRoom from './Images/Living Room.png'
import Guitar from './Images/Guitar.png'
import ArtBox from './Images/Art Box.png'
import Cycle from './Images/Cycle.png'

const datas = [
    {
        id:1,
        title: 'Handmade Lamp',
        price: 150,
        img: Lamp,
        stats: {
            rating: 5.0,
            reviewCount: 10,
        },
        availability: 5
    },
    {
        id:2,
        title: 'Miniature Bed Room',
        price: 250,
        img: Bedroom,
        stats: {
            rating: 5.0,
            reviewCount: 20,
        },
        availability: 4
    },
    {
        id:3,
        title: 'Miniature Living Room',
        price: 200,
        img: LivingRoom,
        stats: {
            rating: 4.5,
            reviewCount: 15,
        },
        availability: 0
    },
    {
        id:4,
        title: 'Miniature Guitar',
        price: 100,
        img: Guitar,
        stats: {
            rating: 4.8,
            reviewCount: 30,
        },
        availability: 10
    },
    {
        id:5,
        title: 'Customized Art Box',
        price: 200,
        img: ArtBox,
        stats: {
            rating: 4.7,
            reviewCount: 8,
        },
        availability: 0
    },
    {
        id:6,
        title: 'Miniature Cycle',
        price: 150,
        img: Cycle,
        stats: {
            rating: 4.0,
            reviewCount: 6,
        },
        availability: 7
    },
]

export default datas;