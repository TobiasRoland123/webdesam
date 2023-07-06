import Button from "@/components/Button";
import { Inter } from "next/font/google";
import Image from "next/image";
import { PersonSvg } from "../../public/images/figures";
import { USP } from "../components/USP";
import { Case } from "../components/Case";

const inter = Inter({ subsets: ["latin"] });

const cases = [
  {
    caseName: "Kleines",
    caseImage: "kleines_mockup",
    caseLink: "https://madvigux.dk/kleines/",
    caseParagraph:
      "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
  },
  {
    caseName: "NBU",
    caseImage: "nbu_mockup",
    caseLink: "https://madvigux.dk/kleines/",
    caseParagraph:
      "the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also",
  },
];

export default function Home() {
  return (
    <main>
      <section>
        <div id="home"></div>
        <h1 className=" mt-12">New website?</h1>

        <Image
          className=""
          src="http://webdesam.dk/wedesam_site_content/images/mockups/kleines_mockup.png"
          width={500}
          height={500}
          alt="A mock of a case that has been made by wedesam"
        />
        <div
          className="
    flex justify-center "
        >
          <a
            className=" items-center flex justify-center align-middle mt-8 border-none w-44 h-14 border rounded-md bg-col-accent"
            href="#contact"
          >
            <h3 className=" text-xl  m-0">Contact me</h3>
          </a>
        </div>
      </section>
      <section className="  mt-24">
        <h2 className=" text-center ">Why built with us?</h2>

        <USP
          uspHeading={" Solutions tailored to the client's needs"}
          uspParagraph={
            "As a frontend developer and designer, you offer tailored websites that are specifically customized to each client's desires and requirements. This allows your customers to have a unique and personalized website that reflects their business and brand in the best possible way."
          }
          svg={PersonSvg}
          svgAlt={"Siluette of a person"}
        />

        <USP
          uspHeading={" Solutions tailored to the client's needs"}
          uspParagraph={
            "As a frontend developer and designer, you offer tailored websites that are specifically customized to each client's desires and requirements. This allows your customers to have a unique and personalized website that reflects their business and brand in the best possible way."
          }
          svg={PersonSvg}
          svgAlt={"Siluette of a person"}
        />
        <USP
          uspHeading={" Solutions tailored to the client's needs"}
          uspParagraph={
            "As a frontend developer and designer, you offer tailored websites that are specifically customized to each client's desires and requirements. This allows your customers to have a unique and personalized website that reflects their business and brand in the best possible way."
          }
          svg={PersonSvg}
          svgAlt={"Siluette of a person"}
        />
      </section>

      <section>
        <div id="contact"></div>
        <h2>Contact me</h2>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit="submit"
        >
          <input
            type="hidden"
            name="form-name"
            value="contact"
          />

          <div className="  flex flex-col mt-4 mb-2">
            <label
              className=" text-base text-col-accent"
              for="name"
            >
              Full name
            </label>
            <input
              className=" [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary h-11 rounded-md border-none"
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              spellCheck="false"
              required
            />
          </div>
          <div className="  flex flex-col mt-4 mb-2">
            <label
              className=" text-base text-col-accent"
              for="email"
            >
              Email
            </label>
            <input
              className=" [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary h-11 rounded-md border-none"
              type="email"
              name="email"
              id="email"
              inputMode="email"
              autoComplete="email"
              spellCheck="false"
              required
            />
          </div>
          <div className="  flex flex-col mt-4 mb-2">
            <label
              className=" text-base text-col-accent"
              for="tel"
            >
              Phone Number
            </label>
            <input
              className=" [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary h-11 rounded-md border-none"
              type="text"
              name="tel"
              id="tel"
              inputMode="tel"
              autoComplete="tel"
              required
            />
          </div>
          <div className="  flex flex-col mt-4 mb-2">
            <label
              className=" text-base text-col-accent"
              for="message"
            >
              Short message
            </label>
            <textarea
              className=" [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary  rounded-md border-none "
              id="message"
              name="message"
              rows="5"
              cols="33"
              required
            ></textarea>
          </div>
          <div className="  flex flex-col mt-4 mb-2">
            <label
              className=" text-base text-col-accent"
              for="time"
            >
              When is the best time for me to reach you?
            </label>
            <select
              className=" [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary  rounded-md border-none "
              id="time"
              name="time"
              required
            >
              <option value={""}>---please select time frame---</option>
              <option value={"09-12"}>Between 09-12</option>
              <option value={"12-15"}>Between 12-15</option>
              <option value={"15-18"}>Between 15-18</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              className=" mt-8 border-none w-44 h-14 border rounded-md bg-col-accent"
              type="submit"
            >
              <h3 className=" text-xl m-0">Send</h3>
            </button>
          </div>
        </form>
      </section>

      <section>
        <div id="cases"></div>
        <h2 className="text-center mt-24">Cases</h2>

        {cases.map((caseDetails) => (
          <Case
            caseImage={caseDetails.caseImage}
            caseName={caseDetails.caseName}
            caseLink={caseDetails.caseLink}
            caseParagraph={caseDetails.caseParagraph}
          />
        ))}
      </section>

      <section>
        <div id="about"></div>
        <h2 className="text-center">About</h2>

        <p>
          Welcome to [Your Name]'s Web Development Studio! I'm a passionate frontend developer and designer, dedicated to bringing
          your vision to life. With customized websites that captivate and engage, I create user-friendly experiences that leave a
          lasting impression. Let's collaborate to craft a unique online presence that exceeds your expectations. Contact me today
          to get started on your tailor-made web solution!
        </p>

        <Image
          className=""
          src="http://webdesam.dk/wedesam_site_content/images/headshotme.png"
          width={500}
          height={500}
          alt="A mock of a case that has been made by wedesam"
        />
      </section>
    </main>
  );
}
