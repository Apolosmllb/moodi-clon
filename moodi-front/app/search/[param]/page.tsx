import SearchSection from "@/app/components/SearchSection";

export default function Page({ params }: { params: { param: string } }) {
  const { param } = params;
  return <SearchSection param={param} />;
}
