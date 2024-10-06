import Flickity from 'react-flickity-component';

const flickityOptions = {
    initialIndex: 0,  // Start at the first slide (index 0)
    wrapAround: true, // Enables looping
    autoPlay: 7000,   // Optional: Automatically move to the next slide every 3 seconds
    prevNextButtons: true,  // Show previous/next buttons
    pageDots: true,         // Show navigation dots
    pauseAutoPlayOnHover: false, // Optional: Prevent autoPlay from pausing on hover
};

// let css={
//   height:"400px",
//   with:"100%"
// }

export default function Carousel() {
  return (
    <Flickity
      className={'carousel mt-4 w-100 h-100 border-0'}  // Custom class for styling
      elementType={'div'}     // The type of container element (div)
      options={flickityOptions}  // Flickity options
      disableImagesLoaded={false} // Wait until all images are loaded
      reloadOnUpdate={true}  // Reload carousel on update
      static={true}          // Static carousel (no dragging)
    >
      {/* <img src="https://img.freepik.com/premium-vector/welcome-banner-with-flowers-vector-flat-vector-illustration-isolated-white-background_481273-753.jpg?w=996" alt="Carousel Slide 1" className='h-[400px] border-0 rounded'/>
      <img src="https://img.freepik.com/free-vector/flash-sale-50-off-banner-template-design-web-advertising-social-media_333987-1335.jpg?size=626&ext=jpg" alt="Carousel Slide 2" className='h-[400px] rounded border-0' />
      <img src="https://static.vecteezy.com/system/resources/thumbnails/028/201/305/small_2x/flash-sale-banner-with-red-background-and-limited-offer-vector.jpg" alt="Carousel Slide 3" className='h-[400px] rounded border-0'/> */}
      <img src="../../src/assets/carousel 1.jpg" alt="Carousel Slide 1" className='h-[400px] border-0 rounded'/>
      <img src="../../src/assets/carousel 2.jpg" alt="Carousel Slide 2" className='h-[400px] rounded border-0' />
      <img src="../../src/assets/carousel 3.jpg" alt="Carousel Slide 3" className='h-[400px] rounded border-0'/>
    </Flickity>
  );
}
