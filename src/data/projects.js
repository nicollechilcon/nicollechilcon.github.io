// Ecolana
import ecolanaCover from '../assets/images/projects/ecolana/cover.png';
import ecolanaHeroCover from '../assets/images/projects/ecolana/hero-cover.png';
import ecolanaTitle from '../assets/images/projects/ecolana/title.png';
// Viajes Ballesteros
import viajesBallesterosCover from '../assets/images/projects/viajes-ballesteros/cover.png';
import viajesBallesterosHeroCover from '../assets/images/projects/viajes-ballesteros/hero-cover.png';
import viajesBallesterosTitle from '../assets/images/projects/viajes-ballesteros/title.png';

export const projects = [
  {
    id: 'viajes-ballesteros',
    name: 'viajes Ballesteros Perú',
    banner: {
      title: 'VIAJES BALLESTEROS - WEB - UX - PERÚ',
      slogan: 'A different way to travel',
      cover: viajesBallesterosCover,
      theme: '#F4BA79'
    },
    content: {
      hero: {
        titleImg: viajesBallesterosTitle,
        coverImg: viajesBallesterosHeroCover,
        theme: '#C49A6C'
      },
      main: {
        theme: '#D68324',
        description: 'Viajes Ballesteros peru is a travel agency whose main objective is to create personalized packages. The owner Catherine, who I personally admire, created this agency in 2016, due to the pandemic was affected and now seeks to revive this beautiful sector of tourism.',
        challenge: 'Frequently the users get lost with the information, it is not visually structured. It is necessary that the client navigates in a page with clear, orderly information and mainly that generates confidence. Also restructure the online store, the customer highlights us, and the whole buying process to make the product accessible to the customer. So that\'s what we are going to do!.',
        goal: 'Website redesign, AI, look & feel',
        tools: ['Figma', 'Zeplin', 'Trello', 'Miro'],
        roles: ['UX/UI Designer'],
        team: '3 intelligent tech  women',
        duration: '4 weeks'
      }
    }
  },
  {
    id: 'ecolana',
    name: 'Ecolana',
    banner: {
      title: 'ECOLANA APP - UX DESIGN - MÉXICO',
      slogan: 'An app to help the environment',
      cover: ecolanaCover,
      theme: '#89D2BF'
    },
    content: {
      hero: {
        titleImg: ecolanaTitle,
        coverImg: ecolanaHeroCover,
        theme: '#92D4C3'
      },
      main: {
        theme: '#208067',
        description: 'Ecolana is the number one recycling app in Mexico. Ecolana main goal is to give visibility to all the collection centers in LATAM so that people have access to recycling and learn how to separate their recyclable materials.',
        challenge: 'Ecolana wants to give a more user-centric approach to its app, adding features and flows that make it enjoyable and understandable for people. Ecolana wants to offer a fun way to recycle with more emphasis on challenge flow and validation. To reach the full potential this mobile app has, they are looking foward to keep them engaged sending notifications, giving awards like (Ecolanitas), tracking their progress (potential gamification), etc.',
        goal: 'Improve the experience and user flow',
        tools: ['Figma', 'Zeplin', 'Adobe Ilustrator', 'Trello'],
        roles: ['UX Research', 'UX/UI Designer'],
        team: 'Bootcamp peers',
        duration: '4 weeks'
      }
    }
  }
];
