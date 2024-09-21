import Form from "@/components/Form";
import {MailIcon, HomeIcon, PhoneCall} from "lucide-react";


const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustrations  */}
        <div className="grid justify-center text-center lg:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text  */}
          <div className="flex flex-col justify-center"> 
            <div className="mx-auto lg:mx-0 flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
              <span className="lg:hidden w-[30px] h-[2px] bg-primary"></span> 
            </div>
            <h1 className="h1 mx-auto max-w-md mb-8">Let's Collaborate on Something Great!</h1>
            <p className="mx-auto subtitle max-w-[400px]">
            I'm always excited to work on new projects and bring innovative ideas to life. Feel free to reach out, and let's discuss how we can create something amazing together!
            </p>
          </div>
          {/* illustrations  */}
          <div className="hidden lg:flex w-full bg-contact_illustration_light 
          dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>
        {/* info text & form  */}
        <div className="grid lg:grid-cols-2 mb-24 xl:mb-32">
          {/* info text  */}
          <div className="flex flex-col mx-auto gap-y-4 lg:gap-y-14 mb-12 lg:mb-24 text-base lg:text-lg">
            {/* mail  */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary"/>
              <div>chemilthas@gmail.com</div>
            </div>
            {/* address  */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary"/>
              <div>Kandy, Sri Lanka.</div>
            </div>
            {/* phone  */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary"/>
              <div>+94 78 386 3533</div>
            </div>
          </div>
          <Form/>
        </div>
      </div>
    </section>
  )
}

export default Contact