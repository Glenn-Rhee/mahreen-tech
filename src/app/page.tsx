import AboutProgram from "@/components/AboutProgram";
import Container from "@/components/Container";
import HeroPage from "@/components/Hero-Page";
import WhyJoinUs from "@/components/WhyJoinUs";

export default function HomePage() {
  return (
    <Container>
      <HeroPage />
      <AboutProgram />
      <WhyJoinUs />
    </Container>
  );
}
