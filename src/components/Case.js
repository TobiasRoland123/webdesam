import Button from "@/components/Button";
import Image from "next/image";

export function Case(props) {
  return (
    <>
      <article className=" mt-12 p-4 sm:mt-4">
        <div>
          <a href={props.caseLink}>
            <Image
              className=" mx-auto  "
              src={`http://webdesam.dk/wedesam_site_content/images/mockups/${props.caseImage}.png`}
              width={500}
              height={500}
              alt={props.caseAlt}
            />
          </a>
          <div className=" max-w-md">
            <div className=" mt-6 flex sm:max-lg:flex-col  justify-between items-center">
              <h3 className=" sm:max-lg:self-baseline m-0">{props.caseName}</h3>

              <a
                className=" text-col-accent underline sm:max-lg:self-baseline"
                href={props.caseLink}
              >
                Besøg side
              </a>

              {/* <Button
              // className=" sm:max-lg:mt-4 sm:max-lg:self-baseline"
              text={`Visit page`}
            ></Button> */}
            </div>
            <p className=" mt-6">{props.caseParagraph}</p>
          </div>
        </div>
      </article>
    </>
  );
}
