import CategoriesGrid from "./CategoriesGrid/CategoriesGrid.component";
import Products from "./Products.component";
import ButtonLink from "./Shared/ButtonLink.component";
import Slider from "./Slider/Slider.component";

export default function Home() {
  return (
    <>
      <Slider />
      <CategoriesGrid />
      <Products />
      <center>
        <ButtonLink to="/products">View all products</ButtonLink>
      </center>
    </>
  );
}
