import ContactCard from '../components/ContactCard';
import ContactHeader from '../components/ContactHeader';

function Contact({ header, description }) {

  return (
    <div className="page contact-page">
      <div className="page-content">
        <ContactHeader 
          header="get in touch" 
          description="lets connect!"
          githubUrl="https://github.com/fiorittoev"
          linkedinUrl="https://www.linkedin.com/in/evanfioritto/"
        />
        <ContactCard>
          send me a message!
        </ContactCard>
      </div>
    </div>
  );
}

export default Contact;