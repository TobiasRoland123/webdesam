export default function () {
  return (
    <>
      <footer className=" mt-20 ">
        <div className=" flex justify-around max-w-5xl mx-auto">
          <article>
            <h3 className=" text-center">Kontakt info</h3>
            <a
              className="text-center  hover:text-col-accent hover:underline transition-all"
              href="mailto:tobiasroland@webdesam.dk"
            >
              <p> tobiasroland@webdesam.dk</p>
            </a>
            <a
              className="text-center  hover:text-col-accent hover:underline transition-all"
              href="tel:50478603"
            >
              <p> +45 50470603</p>
            </a>
          </article>
          <article>
            <h3 className=" text-center">Kom omkring</h3>

            <a
              className=" text-center  hover:text-col-accent hover:underline transition-all"
              href="#cases"
            >
              <p>Cases</p>
            </a>

            <a
              className=" text-center  hover:text-col-accent hover:underline transition-all"
              href="#contact"
            >
              <p>Kontakt</p>
            </a>
            <a
              className=" text-center  hover:text-col-accent hover:underline transition-all"
              href="#about"
            >
              <p>Om os</p>
            </a>
          </article>
        </div>
        <div className="flex justify-center mt-12">
          <small className=" opacity-50 text-center text-xs">CVR: 45652156</small>
        </div>
      </footer>
    </>
  );
}
