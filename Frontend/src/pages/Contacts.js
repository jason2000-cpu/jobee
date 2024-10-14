import NavBar from "../components/NavBar";
import Footer from "../components/footer";
import ContactForm from  '../components/forms/ContactForm.js'

import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";


const faqs = [
    {
        id: '1',
        quiz: 'How do I apply for Jobs',
        answer: 'Once you\'re logged in, browse available jobs, and when you find a job you\'re interested in, click \'Apply Now\' and follow the prompts.'
    },
    {
        id: '2',
        quiz: 'Ho will I know if I get Shortlisted or Hired',
        answer: 'You will receive an email notification from the employer or directly through Jobee when there\'s a status update on your application.'
    },
    {
        id: '3',
        quiz: 'Is my Data Safe on Jobee',
        answer: 'We take your privacy seriously. Your data is securely stored and will not be shared with third parties without your consent. Please refer to our Privacy Policy for more information'
    },
    {
        id: '4',
        quiz: 'Can I apply for more than one job?',
        answer: 'Yes! You can apply for as many jobs as you like. We encourage you to apply to all relevant positions that match your skills and interests.'
    }
]

function Contacts() {
    return (
        <div>
            <NavBar />
            <div className="md:mt-4">
                <span className="text-xl mx-3 md:mx-10">Contacts</span>
                <div className="md:grid grid-cols-2 gap-10 md:mx-6 my-4">
                    <div className="px-4 space-y-10 flex flex-col justify-center">
                        <div className="flex flex-col space-y-3">
                            <span className="text-5xl font-bold">We’d Love to Hear from <br /> You!</span>
                            <span>
                                Looking for support? Have questions? Our 
                                team is here to provide <br/> assistance every 
                                step of the way
                            </span>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="flex space-x-1 ">
                                <VscLocation size={24} />
                                <div className="flex flex-col space-y-3">
                                    <span className="text-xl font-bold">Address</span>
                                    <span>Rulpha Bunce Rd Upper Hill<br /> Nairobi, Kenya</span>
                                </div>
                            </div>
                            <div className="flex space-x-1 ">
                                <BsTelephone size={24} />
                                <div className="flex flex-col space-y-3">
                                    <span className="text-xl font-bold">Phone</span>
                                    <span>+254 797955092</span>
                                </div>
                            </div>
                            <div className="flex space-x-1 ">
                                <MdOutlineMail size={24} />
                                <div className="flex flex-col space-y-3">
                                    <span className="text-xl font-bold">Email</span>
                                    <span>info@jobee.com</span>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-3">
                                <span className="text-xl font-bold">Socials</span>
                                <div className="flex space-x-10">
                                    <FaFacebookF size={24} />
                                    <FaTwitter size={24} />
                                    <FaLinkedinIn size={24} />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mx-4 md:mx-0 my-6 md:my-0 border-t border-x rounded-lg  shadow-lg">
                        <ContactForm />
                    </div>
                </div>
                <div className="flex flex-col items-center mt-28">
                    <h1>Questions and Answers</h1>
                    <h1 className="text-3xl font-bold ">Frequently Asked Questions</h1>
                    <div className="md:grid grid-cols-2 gap-10 mx-2 space-y-4 md:space-y-0 md:mx-20 my-16">
                        {
                            faqs.map((faq, index) => (
                                <div key={index} className="flex space-x-4">
                                    <div className="h-fit px-2 bg-[#6300B3] text-white border rounded-full">
                                        <span>{index + 1}</span>
                                    </div>
                                    <div className="space-y-2">
                                        <h1 className="text-xl font-semibold">{faq.quiz}</h1>
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contacts;