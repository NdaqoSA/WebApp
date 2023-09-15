import { useState } from "react";
import {
  Container,
  Filter,
  SwiperContainer,
  SwiperSlideContainer,
} from "../../components/layouts/shape/MobileFilterTab";
import { Text } from "../../components/typo/Typo";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";

const FilterTab = () => {
  const [filter, setFilter] = useState({
    all: true,
    studio: false,
    house: false,
    appartment: false,
  });

  return (
    <Container>
      <SwiperContainer
        slidesPerView={"auto"}
        spaceBetween={8}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlideContainer>
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
        </SwiperSlideContainer>
        <SwiperSlideContainer>
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
        </SwiperSlideContainer>
        <SwiperSlideContainer>
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
        </SwiperSlideContainer>
        <SwiperSlideContainer>
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
        </SwiperSlideContainer>
        <SwiperSlideContainer>
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
        </SwiperSlideContainer>
        <SwiperSlideContainer>
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
        </SwiperSlideContainer>
        <SwiperSlideContainer>
          <Filter
            selected={filter.all}
            onClick={() =>
              setFilter({
                all: false,
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
        </SwiperSlideContainer>
      </SwiperContainer>
    </Container>
  );
};

export default FilterTab;
