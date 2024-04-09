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
        desc : "Découvrez nos espaces communs soigneusement conçus pour favoriser les interactions et la collaboration entre nos membres pour enrichir votre expérience de coworking chez Afwork"
       
    },
    {
        name : 'Salle Privé',
        icon : MdPrivateConnectivity,
        desc : "Optez pour notre solution de bureaux privés pour bénéficier d'un espace dédié, calme et personnalisable, idéal pour concentrer votre travail et favoriser la productivité."
        
    },
    {
        name : 'Salle de Réunion',
        icon : MdMeetingRoom,
        desc : "Découvrez nos salles de réunion modernes et équipées, parfaites pour accueillir vos rencontres professionnelles, présentations et séances de brainstorming chez Afwork" 
        
    },
    {
        name : 'Salle de Formation',
        icon : GiVideoConference,
        desc : "Explorez nos salles de formation spacieuses et équipées pour accueillir vos sessions de formation, ateliers et événements. Bénéficiez d'un environnement propice à l'apprentissage et assurer le succès chez Afwork."
    
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
        desc : 'Travaux courts et rapide',
        adv : {
            first: 'Wifi Gratuit',
            second : 'Café Offert'
        }
    },
    {
        name : 'Bureau Privé',
        price_h: '5 000 FCFA',
        price_d: '15 000 FCFA',
        desc : 'Concentration Max et calme',
        adv : {
            first: 'Wifi Gratuit',
            second : 'Café Offert'
        }
    },
    {
        name : 'Client Permanent',
        price_h: '',
        price_d: '150 000 FCFA',
        desc : 'Offre Client Premium.',
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
        desc : 'Maximiser mon Business.',
        adv : {
            first: 'Wifi Gratuit',
            second : 'Café Offert'
        }
    }
]
