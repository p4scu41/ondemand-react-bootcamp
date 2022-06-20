import Categories from "./Categories/Categories.component";
import Products from "./Products.component";
import Button from "./Shared/Button.component";
import Slider from "./Slider/Slider.component";

export default function Home({handleGoToPage}) {
  return (
    <>
      <Slider />
      <Categories show_title={false} show_image={true} selectedIds={[]}/>
      <Products />
      <center>
        <Button onClick={handleGoToPage} data-go-to-page='ProductList'>View all products</Button>
      </center>
    </>
  );
}
