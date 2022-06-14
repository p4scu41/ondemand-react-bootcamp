import Button from "./Button";
import Categories from "./Categories";
import Products from "./Products";
import Slider from "./Slider";

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
