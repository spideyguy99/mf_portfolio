import CSSFinal from '../media/cssFinalApp.jpg';
import AnimationApp from '../media/annimationApp.jpg';
import BootstrapDemo from '../media/bootstrapDemoApp.jpg';
import CampusLocator from '../media/reactCampusLoc.jpg';
import ReactFinal from '../media/reactFinal.jpg';
import GeoLocation from '../media/reactGeoLoc.jpg';
import SignIn from '../media/reactSignIn.jpg';
import Sorting from '../media/reactSorting.jpg';

let Projects = [
    {
        id:"1",
        name: "Animation Basics",
        url: "https://jolly-lichterman-ad6836.netlify.app/",
        img: AnimationApp,
        desc: "Practice application using CSS to animate a swinging Spiderman. Using only HTML and CSS"
    },{
        id:"2",
        name: "CSS Final Project",
        url: "https://cranky-austin-b867b1.netlify.app/",
        img: CSSFinal,
        desc: "Final project for 300 level HTML and CSS course. Library used: Bootstrap. Non functioning contact page."
    },{
        id:"3",
        name: "Bootstrap Demo",
        url: "https://optimistic-haibt-2849e6.netlify.app/",
        img: BootstrapDemo,
        desc: "A demonstration application to test a few different components in Bootstrap with HTML and CSS."
    },{
        id:"4",
        name: "React IUPUI Campus Location Checker",
        url: "https://elegant-lalande-8223e0.netlify.app/",
        img: CampusLocator,
        desc: "A website with a binary checker function to see if the user is or is not on IUPUI's campus."
    },{
        id:"5",
        name: "React Final Project",
        url: "https://dazzling-hopper-f4c5c1.netlify.app/",
        img: ReactFinal,
        desc: "Final project for 400 level ReactJS course. Library used: Bootstrap. Functioning sign up and log in feature. Google Maps API used with markers to show important locations on campus, and a binary checker to say if user is at one of those locations."
    },{
        id:"6",
        name: "React Geolocator App ",
        url: "https://dazzling-fermat-45ebbe.netlify.app/",
        img: GeoLocation,
        desc: "Google Maps API used to check users location, as well as teleport the map to specific locations using buttons."
    },{
        id:"7",
        name: "React Sign in App",
        url: "https://gallant-hoover-40012e.netlify.app/",
        img: SignIn,
        desc: "Functioning sign in application. No other features, just allows user to make an account then sign into it."
    },{
        id:"8",
        name: "React Sorting App",
        url: "https://epic-panini-97f05b.netlify.app/",
        img: Sorting,
        desc: "Application with multiple elements in a list. Multiple buttons which when clicked will sort in and out each item designated."
    },
]

export default Projects;