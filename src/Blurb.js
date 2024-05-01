function Paragraph({ children }) {
  return (
    <p className='text-center pb-4'>
      { children }
    </p>
  );
}

function Blurb() {
  return (
    <div className='flex flex-col pb-10'>
      <Paragraph>
        Hi there, and welcome to my website! My name is Harrison and I'm currently studying Computer Science at Northeastern University. Feel free to look around, you might find something cool.
      </Paragraph>
      <Paragraph>
        Outside of programming, <a href='https://open.spotify.com/user/dxebweb8qoztbc17e2aavgw48?si=8d1dc84b19bd4578' className='text-lime-200 hover:animate-pulse'>I enjoy music</a>, video games, and small furry companions.
      </Paragraph>
    </div>
  );
}

export default Blurb;
