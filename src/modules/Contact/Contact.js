const Contact = () => {
  return (
    <section className=' mx-auto container mt-24'>
      <div id='contact'></div>
      <h2>Kontakt os</h2>
      <div className='  sm:grid sm:grid-cols-2 sm:gap-12 lg:gap-16 '>
        <form
          name='contact'
          method='POST'
          data-netlify='true'
          onSubmit='submit'
        >
          <input
            type='hidden'
            name='form-name'
            value='contact'
          />

          <div className='  flex flex-col mt-4 mb-2'>
            <label
              className=' text-base text-col-accent'
              for='name'
            >
              Fulde navn
            </label>
            <input
              className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary h-11 rounded-md border-none'
              type='text'
              name='name'
              id='name'
              autoComplete='name'
              spellCheck='false'
              required
            />
          </div>
          <div className='  flex flex-col mt-4 mb-2'>
            <label
              className=' text-base text-col-accent'
              for='email'
            >
              Email
            </label>
            <input
              className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary h-11 rounded-md border-none'
              type='email'
              name='email'
              id='email'
              inputMode='email'
              autoComplete='email'
              spellCheck='false'
              required
            />
          </div>
          <div className='  flex flex-col mt-4 mb-2'>
            <label
              className=' text-base text-col-accent'
              for='tel'
            >
              Telefon nummer
            </label>
            <input
              className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary h-11 rounded-md border-none'
              type='text'
              name='tel'
              id='tel'
              inputMode='tel'
              autoComplete='tel'
              required
            />
          </div>
          <div className='  flex flex-col mt-4 mb-2'>
            <label
              className=' text-base text-col-accent'
              for='message'
            >
              Din besked
            </label>
            <textarea
              className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary  rounded-md border-none '
              id='message'
              name='message'
              rows='5'
              cols='33'
              required
            ></textarea>
          </div>
          <div className='  flex flex-col mt-4 mb-2'>
            <label
              className=' text-base text-col-accent'
              for='time'
            >
              Hvornår passer et opkald dig?
            </label>
            <select
              className=' [&:not(focus)]:( invalid:text-red-600)     mt-1 p-2  text-col-primary  rounded-md border-none '
              id='time'
              name='time'
              required
            >
              <option value={''}>---Vælg venligts tidsrum---</option>
              <option value={'09-12'}>Mellem 09-12</option>
              <option value={'12-15'}>Mellem 12-15</option>
              <option value={'15-18'}>Mellem 15-18</option>
            </select>
          </div>
          <div className='flex justify-end'>
            <button
              className=' mt-8 border-none w-44 h-14 border rounded-md bg-col-accent'
              type='submit'
            >
              <h3 className=' text-xl m-0 text-col-primary'>Send</h3>
            </button>
          </div>
        </form>

        <article className='hidden sm:block'>
          <h3>Digital tilstedeværelse kan være kompliceret, skriv endelig hvis du har spørgsmål</h3>
          <p>
            Tøv ikke med at kontakte mig! Uanset om du har spørgsmål, brug for rådgivning eller ønsker at få bygget en helt ny
            hjemmeside, er jeg her for at hjælpe. Lad os starte en samtale, og sammen kan vi skabe en fantastisk og effektiv
            online tilstedeværelse. Kontakt mig i dag, og lad os begynde på denne spændende rejse sammen!
          </p>
        </article>
      </div>
    </section>
  );
};

export default Contact;
