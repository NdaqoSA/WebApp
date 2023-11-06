import ButtonIcon from "@/components/buttons/ButtonIcon";
import DataCenter from "@/components/icons/DataCenter";
import Flag from "@/components/icons/Flag";
import Logo from "@/components/icons/Logo";
import Search from "@/components/icons/Search";
import VerticalArrow from "@/components/icons/VerticalArrow";
import { Box, Container, Flex, Text } from "@radix-ui/themes";

export default function Header() {
  return (
    <Container
      size="1"
      className="px-[10px] pt-[15px] pb-[10px] border-b border-slate-100 relative"
    >
      <Box className="absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
        <Logo w={74} h={25} />
      </Box>
      <Flex justify="between">
        <ButtonIcon>
          <DataCenter w={17} h={15} />
          <VerticalArrow w={8} h={13} />
        </ButtonIcon>
        <Flex className="flex gap-x-[10px]">
          <ButtonIcon>
            <Text size="2" weight="bold">
              CG
            </Text>
            <Flag w={15} h={15} />
          </ButtonIcon>
          <ButtonIcon>
            <Search w={15} h={15} />
          </ButtonIcon>
        </Flex>
      </Flex>
    </Container>
  );
}
