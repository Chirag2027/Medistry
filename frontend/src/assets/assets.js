import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
// import logo_new from './logo_new.png'
// import logo_med from './logo_med.png'
import transparent_logo from './transparent_logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    transparent_logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
    {
        _id: 'doc1',
        name: 'Dr. Rajiv Malhotra',
        image: doc1,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '15 Years',
        about: 'Dr. Rajiv Malhotra is a renowned general physician in Delhi NCR, specializing in primary healthcare and internal medicine.',
        fees: 800,
        address: {
            line1: 'AIIMS, Ansari Nagar',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Sunita Kapoor',
        image: doc2,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '12 Years',
        about: 'Dr. Sunita Kapoor is an expert in women’s health, high-risk pregnancies, and fertility treatments.',
        fees: 1000,
        address: {
            line1: 'Max Hospital, Saket',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Aman Verma',
        image: doc3,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '8 Years',
        about: 'Dr. Aman Verma is a leading dermatologist specializing in skin care, cosmetic treatments, and laser surgeries.',
        fees: 900,
        address: {
            line1: 'BLK Hospital, Rajendra Place',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Priya Sharma',
        image: doc4,
        speciality: 'Pediatricians',
        degree: 'MBBS, MD',
        experience: '10 Years',
        about: 'Dr. Priya Sharma is a trusted pediatrician, ensuring quality care for infants and children.',
        fees: 850,
        address: {
            line1: 'Fortis Hospital, Gurgaon',
            line2: 'Haryana, India'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Rakesh Gupta',
        image: doc5,
        speciality: 'Neurologist',
        degree: 'MBBS, DM',
        experience: '18 Years',
        about: 'Dr. Rakesh Gupta is a leading neurologist specializing in treating brain disorders and neurodegenerative diseases.',
        fees: 1500,
        address: {
            line1: 'Medanta, The Medicity',
            line2: 'Gurgaon, India'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Meena Saxena',
        image: doc6,
        speciality: 'Gastroenterologist',
        degree: 'MBBS, DM',
        experience: '14 Years',
        about: 'Dr. Meena Saxena is a leading gastroenterologist specializing in digestive health, liver diseases, and endoscopy.',
        fees: 1200,
        address: {
            line1: 'Indraprastha Apollo',
            line2: 'New Delhi, India'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Karan Mehta',
        image: doc13,
        speciality: 'General physician',
        degree: 'MBBS, MD',
        experience: '19 Years',
        about: 'Dr. Karan Mehta is an experienced general physician known for his expertise in chronic disease management.',
        fees: 950,
        address: {
            line1: 'Jaypee Hospital',
            line2: 'Noida, India'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Shalini Rao',
        image: doc14,
        speciality: 'Gynecologist',
        degree: 'MBBS, MD',
        experience: '21 Years',
        about: 'Dr. Shalini Rao is a senior gynecologist with a specialization in laparoscopic surgeries.',
        fees: 1200,
        address: {
            line1: 'Fortis La Femme',
            line2: 'Delhi, India'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Aditya Kashyap',
        image: doc15,
        speciality: 'Dermatologist',
        degree: 'MBBS, MD',
        experience: '9 Years',
        about: 'Dr. Aditya Kashyap is an expert in aesthetic dermatology and hair restoration procedures.',
        fees: 1000,
        address: {
            line1: 'Paras Hospital',
            line2: 'Gurgaon, India'
        }
    }
];
