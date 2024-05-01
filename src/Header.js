function Name() {
  return (
    <a href='/' className='text-center text-3xl sm:text-5xl hover:animate-pulse'>
      harrison-e
    </a>
  );
}

function Link({ url, label }) {
  return (
    <a href={ url } className='hover:animate-pulse'>
      { label }
    </a>
  );
}

function Links() {
  return (
    <div className='flex space-x-8 place-content-center'>
      <Link url='https://www.github.com/harrison-e' label='GitHub' />
      <Link url='https://www.linkedin.com/in/harrison-eckert' label='LinkedIn' />
      <Link url='/' label='Blog' />
    </div>
  );
}

function Header() {
  return (
    <header className='w-full sticky top-0 text-stone-200 grid p-8 space-y-3 place-content-center rounded-md bg-gunmetal-dark'>
      <Name />
      <Links />
    </header>
  );
}

export default Header;
