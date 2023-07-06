import Button from "@/components/Button";
import Image from "next/image";

export function Case(props) {
  return (
    <>
      <article className=" p-4">
        <div>
          <Image
            className=""
            src={`http://webdesam.dk/wedesam_site_content/images/mockups/${props.caseImage}.png`}
            width={500}
            height={500}
            alt={props.caseAlt}
          />
          <div className=" flex justify-between">
            <h3>{props.caseName}</h3> <Button text={`Visit page`}></Button>
          </div>
          <p className=" mt-6">{props.caseParagraph}</p>
        </div>
      </article>
    </>
  );
}
