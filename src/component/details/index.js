import "./index.css";

import Box from "../box";
import ListItem from "../list-item";
import Heading from "../heading";

import GuestsImage from "./guests.svg";
import BedroomsImage from "./bedrooms.svg";
import BedsImage from "./beds.svg";
import BathsImage from "./baths.svg";

export default function Details({ ...rest }) {
  return (
    <Box className="details" shadow>
      <div className="details__header">
        <Heading border>Деталі:</Heading>
      </div>

      <List {...rest} />
    </Box>
  );
}

function List({ guests, bedrooms, beds, baths }) {
  return (
    <ul className="details__list">
      <ListItem imageSrc={GuestsImage}>
        <span>{guests}</span>
        <span>гості</span>
      </ListItem>

      <ListItem imageSrc={BedroomsImage}>
        <span>{bedrooms}</span>
        <span>спальня</span>
      </ListItem>

      <ListItem imageSrc={BedsImage}>
        <span>{beds}</span>
        <span>ліжко</span>
      </ListItem>

      <ListItem imageSrc={BathsImage}>
        <span>{baths}</span>
        <span>ванна кімната</span>
      </ListItem>
    </ul>
  );
}
