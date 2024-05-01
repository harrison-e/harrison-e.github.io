
const projects = [{
  name: 'Content Delivery Network (CDN)',
  link: 'https://github.com/harrison-e/cdn',
  lang: 'Python, Bash',
  images: null,
  videos: null,
  desc: 'A collection of scripts and programs to deploy, initiate, and terminate a content delivery network on any number of remote hosts. Uses an HTTP server program to allow geographically-disparate edge hosts to forward content from an origin server to more local connections, dynamically caching the most relevant content. Optional DNS server to resolve a host URL to edge server IP\'s, to evenly balance server load.'
}, {
  name: 'Predicting the Outcome of Penalty Kicks',
  link: 'https://github.com/harrison-e/predicting-penalties',
  lang: 'PyTorch, MediaPipe, OpenCV',
  images: null,
  videos: ['https://www.youtube.com/embed/K-nQeOTkbew?si=yRNmf-eelj8fE-Zi', 'https://www.youtube.com/embed/nfaaRc8rFTo?si=wTIDXFW_txasyOAw'],
  desc: 'A neural network to predict the resulting position of a ball relative to the goal after a penalty kick in soccer. Trained on pose data extracted from FIFA penalty kick videos with MediaPipe and OpenCV. Model performs with great accuracy along x-axis, with room for improvement along y-axis.'
}, {
  name: 'Photomosaic and Image Processor',
  link: 'https://github.com/harrison-e/photomosaic',
  lang: 'C, C++',
  images: [require('./assets/pmax.jpg'), require('./assets/taffy_new.PNG')],
  videos: null,
  desc: 'Creates a mosaic from a provided photo and tileset, where a tileset is a specified directory of images. Image segments matched to tiles by closest RGB match, found with self-balancing BST (AVL). Also contains implementation of image processor, supporting rotation, flipping, resizing, cropping, adding borders, and applying Hong & Liu\'s Pointillist art algorithm. Supports reading and writing to and from .png, .jpg, and .bmp files.'
}];



function ProjectDescription({ name, link, lang, desc, children }) {
    return (
      <a href={ link } className='rounded-md p-4 bg-gunmetal hover:bg-gunmetal-light flex flex-row space-x-4'>
        <div className='basis-auto flex flex-col'>
          <h1 className='text-xl text-stone-200 font-[DrukWide]'> { name } </h1>
          <p className='text-md text-stone-200 font-[DrukWide] pb-4'> { lang } </p>
          <p> { desc } </p>
        </div>
        <div className='basis-full grid gap-4 content-center'>
          { children }
        </div>
      </a>
    );
}

function Project({ name, link, lang, images, videos, desc }) {
  if (images === null && videos === null) {
    return (
      <ProjectDescription name={ name } link={ link } lang={ lang } desc={ desc } />
    );
  } else if (videos === null) {
    const imageItems = images.map(image =>
    <li className='py-1'>
      <a href={ image }>
        <img src={ image } alt={ 'Image of ' + name } />
      </a>
    </li>
    );
    return (
      <ProjectDescription name={ name } link={ link } lang={ lang } desc={ desc }>
        <ul>
          { imageItems }
        </ul>
      </ProjectDescription>
    );
  } else {
    const videoItems = videos.map(video => 
    <li className='py-1'>
      <iframe width="320" height="180" src={ video } title="YouTube video player" frameborder="0" allow="clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </li>
    );
    return (
      <ProjectDescription name={ name } link={ link } lang={ lang } desc={ desc }>
        <ul>
          { videoItems }
        </ul>
      </ProjectDescription>
    );
  }
}

function Projects() {
  const projectItems = projects.map(project => 
  <li className='py-5'>
    <Project name={project.name} 
    link={project.link} 
    lang={project.lang}
    images={project.images} 
    videos={project.videos} 
    desc={project.desc}/>
  </li>
  );
  
  return (
    <>
      <h1 className='text-3xl text-center text-stone-200 font-[DrukWide]'>
        Recent Projects
      </h1>
      <ul>
        { projectItems }
      </ul>
    </>
  );
}

export default Projects;
