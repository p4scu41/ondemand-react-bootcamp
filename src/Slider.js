export default function Slider() {
  const items = [ // Should come from mocks/en-us/featured-banners.json
    {
      "id": "YWYpQRIAACkA3RZr",
      "href": "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWYpQRIAACkA3RZr%22%29+%5D%5D",
      "data": {
        "title": "AMAZING FINISHES - BEDROOM",
        "main_image": {
          "alt": "AMAZING FINISHES - BEDROOM",
          "url": "https://images.prismic.io/wizeline-academy/edaf28da-2e46-4f75-8a69-a972119f40ed_banner-3-2.jpeg?auto=compress,format&rect=0,0,1429,700&w=1440&h=705"
        }
      }
    }
  ];

  return (
    <div className='slider'>
      {
        items.map(item =>
          <div key={item.id} className='slider_item' style={ {backgroundImage: `url(${item.data.main_image.url})`} }>
            <a href={item.href} alt={item.data.main_image.alt}>{item.data.title}</a>
          </div>)
      }
    </div>
  );
}
