export const slider = {
  dots: false,
  infinite: false,
  speed: 200,
  slidesToShow: 5,
  slidesToScroll: 10,
  initialSlide: 2,
  rows: 2,
  arrows: false,
  appendDots: (dots) => (
    <div
      style={{
        borderRadius: '15px',
        padding: '15px',
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
  customPaging: () => (
    <div
      style={{
        width: '14px',
        height: '14px',
        borderRadius: '50%',
        backgroundColor: 'rgba(239, 237, 232, 0.2)',
        border: '1px black solid',
        transition: 'background-color 0.3s ease',
      }}
    ></div>
  ),

  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        rows: 2,

        dots: true,
      },
    },
    {
      breakpoint: 1439,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 9,
        rows: 3,
        dots: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 10,
        dots: true,
      },
    },
  ],
};
