interface Props {
  seoTitle: string;
}

export default function Metadata({ seoTitle }: Props) {
  return (
    <>
      <title>{seoTitle}</title>
    </>
  );
}
