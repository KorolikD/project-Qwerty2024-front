export const slider = {
  dots: false,
  infinite: false,
  speed: 200,
  slidesToShow: 5,
  slidesToScroll: 10,
  initialSlide: 0,
  rows: 2,
  arrows: false,
  appendDots: (dots) => (
    <div
      style={{
        padding: '8px',
      }}
    >
      <ul> {dots} </ul>
    </div>
  ),
  customPaging: () => (
    <div
      style={{
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        backgroundColor: 'grey',
        border: '1px black solid',
        transition: 'background-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = '#e6533c';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = 'rgba(239, 237, 232, 0.2)';
      }}
    ></div>
  ),

  responsive: [
    {
      breakpoint: 2000,
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
