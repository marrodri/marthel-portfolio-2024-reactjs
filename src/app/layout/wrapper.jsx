import Image from "next/image";
import Intro from "./intro";
import Spotlight from "../components/spotlight";
import Card from "../components/card";
import ContactMeForm from "../components/contactMeForm";
///Children: ${Children.JSX}
export default function Wrapper() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Intro />
      {/* spotlight about me and this website */}
      <Spotlight color="bg-purple-400">
        <h1 className="font-bold">About Me</h1>
        <p>
          Hi, my name is Marthel Rodriguez, a student who has a big drive for
          computer science, My main focus is web development, AI and graphics
        </p>
        <p>
          I have started my journey in computer science on my late 2018, when
          I've got accepted to a competitive coding bootcamp called "42 Silicon
          Valley", which led me to participate as a mobile app and web developer
          intern for two startups. In mid 2022, I've made the decision to enroll
          in a community college with the goal of pursuing an education related
          to the field of Computer Science and Engineering. Today, I'm currently
          enrolled in an AI course that takes place in UCLA, and mentoring
          upcoming computer science students who have the potential to thrive in
          this field of CS. I
        </p>
      </Spotlight>
      {/* spotlight: experience and portfolio */}
      <Spotlight color="bg-yellow-400">
        <h1 className="font-bold py-5">Experience and Portfolio</h1>
        <div className="flex flex-col space-y-2">
          <Card />
          <Card />
          <Card />
        </div>
      </Spotlight>
      {/* form: about get in touch */}
      <Spotlight color="bg-blue-300">
        <ContactMeForm />
      </Spotlight>
    </main>
  );
}
