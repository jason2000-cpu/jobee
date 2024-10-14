import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const quickLinks = [
    {
        id: 1,
        name: 'About Us',
    },
    {
        id: 2,
        name: 'Contacts',
    },
    {
        id: 3,
        name: 'Policies'
    }
]

const candidateLinks =  [
    {
        id: 1,
        name: 'Browse Jobs',
    },
    {
        id: 2,
        name: 'Dashboard',
    },
    {
        id: 3,
        name: 'Saved Jobs'
    }
]

function Footer() {
    return (
        <div className="border px-16 py-16 pt-20 bg-[#EFE2F8]">
            <div className="flex justify-around">
                <div className="flex flex-col space-y-4">
                    <span className="font-bold text-3xl italic">Jobee</span>
                    <span>Connect With Us On Our Socials</span>
                    <div className="flex space-x-10">
                        <FaFacebookF size={24} />
                        <FaTwitter size={24} />
                        <FaLinkedinIn size={24} />
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <span className="font-bold text-3xl italic" >Address</span>
                        <div className="flex flex-col">
                            <span>00100 - 2118 Nairobi, Kenya</span>
                            <span>Rulpha Bunche Rd Upper Hill</span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <span className="font-semibold text-2xl italic">Contact</span>
                        <div>
                            <span>Call +254797955092</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <span className="font-bold text-3xl italic">Quick Links</span>
                    <div className="flex flex-col space-y-3">
                        { quickLinks.map((link) => <span className="text-xl">{link.name}</span>)}
                    </div>
                </div>
                <div>
                    <span className="font-bold text-3xl italic">Candidate</span>
                    <div className="flex flex-col space-y-3">
                        { 
                            candidateLinks.map(link => <span className="text-xl">{link.name}</span>)
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;
