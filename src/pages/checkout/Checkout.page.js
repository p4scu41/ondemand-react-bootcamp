import Button from "../../components/Shared/Button.component";
import ButtonLink from "../../components/Shared/ButtonLink.component";
import ShoppingCartTable from "../../components/ShoppingCart/ShoppingCartTable";
import { Form, FromColumn, FromRow, Input, Label, Textarea } from "./Checkout.styles";

const Checkout = () => {
  return (
    <>
      <h2>Checkout</h2>
      <Form>
        <FromColumn>
          <FromRow>
            <Label htmlFor="name">Name:</Label>
            <Input type='text' id="name" name="name" />
          </FromRow>
          <FromRow>
            <Label htmlFor="email">Email:</Label>
            <Input type='email' id="email" name="email" />
          </FromRow>
          <FromRow>
            <Label htmlFor="zip_code">Zip Code:</Label>
            <Input type='text' id="zip_code" name="zip_code" />
          </FromRow>
        </FromColumn>
        <FromColumn>
          <FromColumn>
            <Label htmlFor="notes">Notes: </Label>
            <Textarea id="notes" name="notes" rows={6} />
          </FromColumn>
        </FromColumn>
      </Form>

      <h3>Cart content</h3>
      <ShoppingCartTable readonly={true} />
      <p style={{textAlign: 'right'}}>
        <ButtonLink to="/cart">Go back to cart</ButtonLink> &nbsp;
        <Button>Place order</Button>
      </p>
    </>
  )
};

export default Checkout;
