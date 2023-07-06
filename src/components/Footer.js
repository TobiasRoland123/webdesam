export default function () {
  return (
    <>
      <footer>
        <article>
          <h3 className=" text-center">Contact info</h3>
          <a
            className="text-center"
            href="mailto:tobiasroland@webdesam.dk"
          >
            <p> tobiasroland@webdesam.dk</p>
          </a>
          <a
            className="text-center"
            href="tel:50478603"
          >
            <p> +45 50470603</p>
          </a>
        </article>
        <article>
          <h3 className=" text-center">Get around</h3>

          <a
            className=" text-center"
            href="#home"
          >
            <p>Home</p>
          </a>
          <a
            className=" text-center"
            href="#cases"
          >
            <p>Cases</p>
          </a>

          <a
            className=" text-center"
            href="#contact"
          >
            <p>Contact</p>
          </a>
          <a
            className=" text-center"
            href="#about"
          >
            <p>About</p>
          </a>
        </article>
        <div className="flex justify-center mt-12">
          <small className=" opacity-50 text-center text-xs">CVR: 45652156</small>
        </div>
      </footer>
    </>
  );
}
