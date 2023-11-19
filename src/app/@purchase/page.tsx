import Filter from "@/components/mobile/filter/Filter";
import { Container } from "@radix-ui/themes";

export default function Purchase() {
  return (
    <Container
      size="1"
      className="w-full h-full flex items-center justify-center border-b border-slate-100 pl-[10px]"
    >
      <Filter />
    </Container>
  );
}
