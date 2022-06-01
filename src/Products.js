export default function Products() {
  const items = [
    {
      "id": "YWL8XBIAAC0AzuPZ",
      "href": "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWL8XBIAAC0AzuPZ%22%29+%5D%5D",
      "data": {
        "name": "Tallulah Sofa Gray",
        "category": {
          "id": "YWHviRIAACsAyjP3",
          "slug": "furniture",
        },
        "mainimage": {
          "alt": "Tallulah Sofa Gray",
          "url": "https://images.prismic.io/wizeline-academy/fa394f7d-4d89-4c90-86b3-832de74928fa_1.webp?auto=compress,format"
        },
        "short_description": "A low profile sets the stage for nighttime relaxation. The Tallulah upholstered sofa combines the straight lines of the European style with romantic details such as side cushions, crooked legs and nail heads. Square arm.",
        "price": 1834.57
      }
    },
  ];


  return (
    <div className="categories">
      {
          items.map(item =>
            <div className='card' key={item.id}>
                <div className='card-img' style={ {backgroundImage: `url(${item.data.mainimage.url})`}}></div>
                <div className='card-title'>{item.data.name}</div>
                <div className='card-footer'>
                  <span>{item.data.category.slug}</span>
                  <span>{item.data.price}</span>
                </div>
            </div>
      )
    }
    </div>
  );
}
