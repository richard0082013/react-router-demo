import React from "react";
import { Button, Icon, Image, Item, Label } from "semantic-ui-react";
import ShortParagraph from "../images/short-paragraph.png";
import ItemImage from "../images/image.png";
const paragraph = <Image src={ShortParagraph} />;

const ItemExampleDivided = () => (
  <Item.Group divided>
    <Item>
      <Item.Image src={ItemImage} />

      <Item.Content>
        <Item.Header as="a">12 Years a Slave</Item.Header>
        <Item.Meta>
          <span className="cinema">Union Square 14</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon="globe" content="Additional Languages" />
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src={ItemImage} />

      <Item.Content>
        <Item.Header as="a">My Neighbor Totoro</Item.Header>
        <Item.Meta>
          <span className="cinema">IFC Cinema</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated="right">
            Buy tickets
            <Icon name="right chevron" />
          </Button>
          <Label>Limited</Label>
        </Item.Extra>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image src={ItemImage} />

      <Item.Content>
        <Item.Header as="a">Watchmen</Item.Header>
        <Item.Meta>
          <span className="cinema">IFC</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
        <Item.Extra>
          <Button primary floated="right">
            Buy tickets
            <Icon name="right chevron" />
          </Button>
        </Item.Extra>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ItemExampleDivided;
