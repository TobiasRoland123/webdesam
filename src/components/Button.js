export default function (props) {
  return (
    <>
      <button
        className="border-none w-44 h-14 border rounded-md bg-col-accent"
        onClick={props.clickAction}
      >
        <h3 className=" text-xl m-0">{props.text}</h3>
      </button>
    </>
  );
}
