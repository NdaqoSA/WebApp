import { useState } from "react";
import {
  Container,
  Filter,
} from "../../components/layouts/shape/MobileFilterTab";
import { Text } from "../../components/typo/Typo";

const FilterTab = () => {
  const [filter, setFilter] = useState({
    all: true,
    studio: false,
    house: false,
    appartment: false,
  });

  return (
    <Container>
      <Filter
        selected={filter.all}
        onClick={() =>
          setFilter({
            all: true,
            studio: false,
            house: false,
            appartment: false,
          })
        }
      >
        <Text size={14} weight={500}>
          Tout
        </Text>
      </Filter>
      <Filter
        selected={filter.studio}
        onClick={() =>
          setFilter({
            all: false,
            studio: true,
            house: false,
            appartment: false,
          })
        }
      >
        <Text size={14} weight={500}>
          Studio
        </Text>
      </Filter>
      <Filter
        selected={filter.house}
        onClick={() =>
          setFilter({
            all: false,
            studio: false,
            house: true,
            appartment: false,
          })
        }
      >
        <Text size={14} weight={500}>
          Maison
        </Text>
      </Filter>
      <Filter
        selected={filter.appartment}
        onClick={() =>
          setFilter({
            all: false,
            studio: false,
            house: false,
            appartment: true,
          })
        }
      >
        <Text size={14} weight={500}>
          Appartement
        </Text>
      </Filter>
    </Container>
  );
};

export default FilterTab;
