import "./index.css";

import Box from "../box";
import ListItemB from "../list-item-b";
import Heading from "../heading";

import Pool from "./svg/pool.svg";
import Gym from "./svg/gym.svg";
import FreeBreakfast from "./svg/breakfast.svg";
import Wifi from "./svg/wifi.svg";
import FreeParking from "./svg/parking.svg";
import Pets from "./svg/pets.svg";
import AirportTransfer from "./svg/airport-transfer.svg";
import Concierge from "./svg/concierge.svg";
import RoomService from "./svg/room-s.svg";
import ForChild from "./svg/forchild.svg";

export default function Amenities({ ...rest }) {
  // const arr = Object.keys(list)
  //   .filter((item) => list[item])
  //   .map((item, index) => console.log(item, list[item]));
  return (
    <Box className="amenities" shadow>
      <div className="amenities__header">
        <Heading border>Зручності</Heading>
      </div>
      <List {...rest} />
    </Box>
  );
}

function List({ list }) {
  return (
    <ul className="amenities__list">
      <ListItemB
        imageAm={Pool}
        name="Басейн"
        isAmenity={list.hasPool}
      ></ListItemB>

      <ListItemB
        imageAm={Gym}
        name="Спорт зал"
        isAmenity={list.hasGym}
      ></ListItemB>

      <ListItemB
        imageAm={FreeBreakfast}
        name="Безкоштовний сніданок"
        isAmenity={list.hasFreeBreakfast}
      ></ListItemB>

      <ListItemB
        imageAm={Wifi}
        name="Безкоштовний Wifi"
        isAmenity={list.hasFreeWiFi}
      ></ListItemB>

      <ListItemB
        imageAm={FreeParking}
        name="Безкоштовний вуличний паркінг"
        isAmenity={list.hasParking}
      ></ListItemB>

      <ListItemB
        imageAm={Pets}
        name="Дозволено розміщення з домашніми тваринами"
        isAmenity={list.hasPetsAllowed}
      ></ListItemB>

      <ListItemB
        imageAm={AirportTransfer}
        name="Трансфер до/з аеропорту"
        isAmenity={list.hasAirportShuttle}
      ></ListItemB>

      <ListItemB
        imageAm={Concierge}
        name="Консьєрж-сервіс"
        isAmenity={list.hasConciergeService}
      ></ListItemB>

      <ListItemB
        imageAm={RoomService}
        name="Обслуговування номерів"
        isAmenity={list.hasRoomService}
      ></ListItemB>

      <ListItemB
        imageAm={ForChild}
        name="Підходить для дітей"
        isAmenity={list.hasChildFriendly}
      ></ListItemB>
    </ul>
  );
}
