import { FaHome, FaInfoCircle, FaPhone,FaWifi,FaCoffee  } from "react-icons/fa";
import { GiPriceTag, GiVideoConference } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { MdMeetingRoom,MdPrivateConnectivity } from "react-icons/md";


export const navLinks = [
    {
        name : 'Accueil',
        icon : FaHome,
        urlPath : '/'
    },
    {
        name : 'A propos',
        icon : FaInfoCircle,
        urlPath : '#about_sec'
    },
    {
        name : 'Nos Tarifs',
        icon : GiPriceTag,
        urlPath : '#pricing_sec'
    },
    // {
    //     name : 'Gallery',
    //     icon : GrGallery,
    //     urlPath : '/'
    // },
    {
        name : 'Contact',
        icon : FaPhone,
        urlPath : '#contact_sec'
    },
]

export const intallment = [
    {
        name : 'Open Space',
        icon : IoIosPeople,
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque voluptatem quas odit, facilis alias, eum molestias similique ullam sed veniam cupiditate minima explicabo.'
    },
    {
        name : 'Salle Privé',
        icon : MdPrivateConnectivity,
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque voluptatem quas odit, facilis alias, eum molestias similique ullam sed veniam cupiditate minima explicabo.'
    },
    {
        name : 'Salle de Réunion',
        icon : MdMeetingRoom,
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque voluptatem quas odit, facilis alias, eum molestias similique ullam sed veniam cupiditate minima explicabo.'
    },
    {
        name : 'Salle de Formation',
        icon : GiVideoConference,
        desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Eaque voluptatem quas odit, facilis alias, eum molestias similique ullam sed veniam cupiditate minima explicabo.'
    },

]

export const additionBonus = [
    {
        name : 'Internet Haut Debit',
        icon : FaWifi,
        desc : ''
    },
    {
        name : 'Café Offert',
        icon : FaCoffee,
        desc : ''
    },
]

export const plans = [
    {
        name : 'Open Space',
        price_h: '1 000 FCFA',
        price_d: '5 000 FCFA',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, modi consequuntur.',
        adv : {
            first: 'Wifi Gratuit',
            second : 'Café Offert'
        }
    },
    {
        name : 'Bureau Privé',
        price_h: '5 000 FCFA',
        price_d: '15 000 FCFA',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, modi consequuntur.',
        adv : {
            first: 'Wifi Gratuit',
            second : 'Café Offert'
        }
    },
    {
        name : 'Client Permanent',
        price_h: '',
        price_d: '150 000 FCFA',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, modi consequuntur.',
        access : {
            first: 'salle Réunion',
            second : 'Bureau Privé',
            third : 'Open Space'

        },
        adv : {
            first: 'Wifi Gratuit',
            second : 'Café Offert'
        }
    },
    {
        name : 'Salle Réunion',
        price_h: '4 000 FCFA',
        price_d: '15 000 FCFA',
        desc : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, modi consequuntur.',
        adv : {
            first: 'Wifi Gratuit',
            second : 'Café Offert'
        }
    }
]
