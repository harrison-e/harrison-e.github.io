function Section({ name, children }) {
  return (
    <div>
      <h1 className='pb-3 text-3xl text-center text-stone-200 font-[DrukWide]'>
        { name } 
      </h1>
      { children }
    </div>
  );
}

export default Section;
