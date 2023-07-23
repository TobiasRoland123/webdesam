import Image from "next/image";

export function USP(props) {
  return (
    <>
      <article className="mt-24">
        <div className="flex justify-center">
          <Image
            className=" "
            src={props.svg}
            width={100}
            height={100}
            alt={props.svgAlt}
          />
        </div>

        <div className=" flex flex-col">
          <h3 className=" mx-auto sm:mx-0">{props.uspHeading}</h3>
          <p className=" mx-auto">{props.uspParagraph}</p>
        </div>
      </article>
    </>
  );
}
