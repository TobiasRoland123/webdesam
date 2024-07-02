export default function (props) {
  return (
    <>
      <button
        className='border-none w-44 h-14 border rounded-md bg-col-accent'
        onClick={props.clickAction}
      >
        <Span className=' text-xl m-0 text-white '>{props.text}</Span>
      </button>
    </>
  );
}
