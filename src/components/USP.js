import Image from "next/image";

export function USP(props) {
  return (
    <>
      <article className="mt-24">
        <div className="flex justify-center">
          <Image
            className=""
            src={props.svg}
            width={100}
            height={100}
            alt={props.svgAlt}
          />
        </div>

        <h3>{props.uspHeading}</h3>
        <p>{props.uspParagraph}</p>
      </article>
    </>
  );
}
