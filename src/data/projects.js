// Ecolana
import ecolanaCover from '../assets/images/projects/ecolana/cover.png';
import ecolanaHeroCover from '../assets/images/projects/ecolana/hero-cover.png';
import ecolanaTitle from '../assets/images/projects/ecolana/title.png';
import ecolanaProcess from '../assets/images/projects/ecolana/process.png';
import ecolanaSketching from '../assets/images/projects/ecolana/sketching.png';
import ecolanaBefore1 from '../assets/images/projects/ecolana/1-before.png';
import ecolanaAfter1 from '../assets/images/projects/ecolana/1-after.png';
import ecolanaBefore2 from '../assets/images/projects/ecolana/2-before.png';
import ecolanaAfter2 from '../assets/images/projects/ecolana/2-after.png';
// Viajes Ballesteros
import viajesBallesterosCover from '../assets/images/projects/viajes-ballesteros/cover.png';
import viajesBallesterosHeroCover from '../assets/images/projects/viajes-ballesteros/hero-cover.png';
import viajesBallesterosTitle from '../assets/images/projects/viajes-ballesteros/title.png';
import viajesBallesterosProcess from '../assets/images/projects/viajes-ballesteros/process.png';
import viajesBallesterosSketching from '../assets/images/projects/viajes-ballesteros/sketching.png';
import viajesBallesterosBefore1 from '../assets/images/projects/viajes-ballesteros/1-before.png';
import viajesBallesterosAfter1 from '../assets/images/projects/viajes-ballesteros/1-after.png';
import viajesBallesterosBefore2 from '../assets/images/projects/viajes-ballesteros/2-before.png';
import viajesBallesterosAfter2 from '../assets/images/projects/viajes-ballesteros/2-after.png';
import viajesBallesterosLinkImg from '../assets/images/projects/viajes-ballesteros/link-img.png';

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
      },
      process: viajesBallesterosProcess,
      research: {
        title_theme: '#493722',
        dark_theme: '#C06A07',
        light_theme: '#CCA780',
        description: 'We conducted desk research, scope canvas, benchmarking and interviewed  lovers and potencial users, also make a testing to gain an understanding of the pain points.  As a result, we found that the user does not feel confident in purchasing travel packages on the Viajes Ballesteros Perú website.',
        link: 'https://www.figma.com/file/fak2ukDa4xQEDJc56oo2qN/Research%2F-UX-Ecolana?node-id=30%3A1728',
        problems: ['I don\'t understand the payment part', 'I click on packages and it doesn\'t take me anywhere.', 'There are cards that you click on and no information is provided.'],
        insight: 'The effort invested in convincing the user with package information is shot down in the end with an insecure payment process. <br/> <em>"Users look for truthful images and testimonials to trust the brand."</em>',
        solutions: [
          'DESIGN SOLUTIONS <br/> Dynamic banner <br/> Visible testimonials',
          'INTERACTION SOLUTIONS <br/> Payment gateway pop-up window. <br/> Include search facility for destinations and dates.',
          'COMMUNICATION SOLUTIONS <br/> Include "About Us" section on the home page. <br/> Build your package" option. Step-by-step purchase sequence'
        ],
        sketching: 'After a lot of brainstorming, we decided to prioritize and sketch out our top solutions',
        sketchingImg: viajesBallesterosSketching
      },
      prototype: {
        description: 'Now, with our usability tests and feedback from our medium fidelity prototype, we have implemented the necessary improvements, and finally the final result!',
        link: 'https://www.figma.com/proto/cY17WqD89M7fLzcThy5sqL/Viajes-Ballesteros-Peru-%2F-nicolle?page-id=143%3A88&node-id=386%3A2080&viewport=449%2C371%2C0.02&scaling=scale-down&starting-point-node-id=386%3A2080&fuid=808688472687422097',
        changes: [
          {
            beforeImg: viajesBallesterosBefore1,
            afterImg: viajesBallesterosAfter1,
            explanation: 'In the main banner, now we can see a search box, with  destinations and travel dates to encourage the buying process.'
          },
          {
            beforeImg: viajesBallesterosBefore2,
            afterImg: viajesBallesterosAfter2,
            explanation: 'Brand new pop-up payment that does not take the user out of the page, increasing the user\'s confidence!'
          }
        ]
      },
      conclusion: {
        theme: '#FEE9D1',
        final_thoughts: 'I learned the importance of having an intuitive, simple and navigable design for users, through an information architecture that helped us to meet the user\'s needs. <br/><br/>Applying UX writing to generate curiosity in the visitors of the site and generate more visits, targeting a larger audience in the future! <br/><br/> From my team, working with 3 amazing women who helped me to strengthen my soft skills in client meetings, and hard skills since the 3 of us ended up dominating figma animations ;)',
        steps: ['Show information that generates: trust and authenticity.', 'Simple information structure. Less is more.', 'Invest in high quality photography and video.', 'Keep updated on trends, promotions and the most traveled times of the year.']
      }
    },
    link: {
      theme: '#F39935',
      img: viajesBallesterosLinkImg,
      title: 'Viajes ballesteros  |  Perú  |  Website  |  UX Experience'
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
      },
      process: ecolanaProcess,
      research: {
        title_theme: '#208067',
        dark_theme: '#2B6E5D',
        light_theme: '#A4DBCDAD',
        description: 'We conducted desk research, interviewed Ecolana lovers and potencial users, also make a testing to gain an understanding of the pain points.',
        link: 'https://www.figma.com/file/fak2ukDa4xQEDJc56oo2qN/Research%2F-UX-Ecolana?node-id=30%3A1728',
        problems: ['The user does not use all the functionalities of Ecolana App', 'The focus of the application is on the map, which means that the other functions are not visible and users do not use them'],
        insight: 'Users feel guilty when they do not complete an Ecolana App activity because the focus is on the map and obscures the other features.',
        solutions: [
          'Simplify the current recycle experience.',
          'Change the focus of the app and give greater visibility to all its functions.',
          'Create dynamic user flow and visual language.'
        ],
        sketching: 'Our team applied the solutions that guided the flow of the application and the fluidity of moving from one screen to another. We prioritize changing the focus of the app',
        sketchingImg: ecolanaSketching
      },
      prototype: {
        description: 'With all the high fidelity pages designed, we built the final prototype, using Figma.',
        link: 'https://www.figma.com/file/fak2ukDa4xQEDJc56oo2qN/Research%2F-UX-Ecolana?node-id=30%3A1728',
        changes: [
          {
            beforeImg: ecolanaBefore1,
            afterImg: ecolanaAfter1,
            explanation: 'The other functions are now visible, in the profile we can find how to access more of them'
          },
          {
            beforeImg: ecolanaBefore2,
            afterImg: ecolanaAfter2,
            explanation: 'Brand-new map with intuitive buttons and a hamburger menu at the bottom for accessibility!'
          }
        ]
      },
      conclusion: {
        theme: '#92D4C34A',
        results: 'The test results exceeded our expectations. User satisfaction with the redesigned Ecolana app increased by 9.5% and the usability of the platform improved by an impressive 12%. In addition, the user retention rate increased by 15% and the number of registered recycling centers grew by 20%.',
        final_thoughts: 'With the final prototype created, I believe I have met the objectives that were traced at the beginning together with the client. New features were added based on the needs that I summarized in the interview with the users. We obtained a score of 9.5 from the users tested. <br/><br/> This UX design project that allowed me to gain a thorough understanding of design, research, testing, and constant iteration also helped me to empathize with these users who care about the environment and to be one of them.',
        steps: ['Continue testing and iterating if it\'s necessary', 'Create onboarding walkthrough steps', 'Start developing ways to make shorten the processes of validation residues']
      }
    },
    link: {
      theme: '#5AAA95',
      img: ecolanaCover,
      title: 'Ecolana App  |  México  |  Application |  UX Design'
    }
  }
];
