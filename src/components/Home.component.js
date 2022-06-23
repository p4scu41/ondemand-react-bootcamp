import Categories from "./Categories/Categories.component";
import Products from "./Products.component";
import ButtonLink from "./Shared/ButtonLink.component";
import Slider from "./Slider/Slider.component";

export default function Home() {
  return (
    <>
      <Slider />
      <Categories show_title={false} show_image={true} selectedIds={[]}/>
      <Products />
      <center>
        <ButtonLink to="/products">View all products</ButtonLink>
      </center>
    </>
  );
}
