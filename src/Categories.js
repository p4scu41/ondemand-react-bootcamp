export default function Categories() {

const items = [ // Should come from mocks/en-us/product-categories.json
  {
    "id": "YWHx-xIAAC0Ayj7i",
    "href": "https://wizeline-academy.cdn.prismic.io/api/v2/documents/search?ref=YWYpRBIAACwA3RZ5&q=%5B%5B%3Ad+%3D+at%28document.id%2C+%22YWHx-xIAAC0Ayj7i%22%29+%5D%5D",
    "data": {
      "name": "Bed & Bath",
      "main_image": {
        "alt": "Bath",
        "url": "https://images.prismic.io/wizeline-academy/5df875b5-3e43-4cf0-97b9-06ed73ed6d9b_sanibell-bv-530lZQXMKGw-unsplash-web+%281%29.jpg?auto=compress,format&rect=0,24,1920,1231&w=621&h=398"
      }
    }
  }
];

  return (
    <div className='categories'>
      {
        items.map(item =>
          <a href={item.href} alt={item.data.alt} key={item.id}>
            <img src={item.data.main_image.url} alt={item.data.main_image.alt}/>
            <span>{item.data.name}</span>
          </a>)
      }
    </div>
  );
}
