import { highlightsData } from "@/constants";

function addDash(str: string) {
  return str.split(" ").join("-").toLowerCase();
}

export default function ProjectPage() {
  return <div>ProjectPage</div>;
}

// Static paths for all project URLs
export async function getStaticPaths() {
  const paths = highlightsData.map((item) => ({
    params: { id: addDash(item.name) },
  }));

  return { paths, fallback: false }; // fallback: false means 404 for unknown paths
}

// Static props per project
export async function getStaticProps({ params }: { params: { id: string } }) {
  const data = highlightsData.find((item) => addDash(item.name) === params.id);
  let previousIndex =
    highlightsData.findIndex((item) => addDash(item.name) === params.id) - 1;
  let nextIndex =
    highlightsData.findIndex((item) => addDash(item.name) === params.id) + 1;

  if (!data) {
    return { notFound: true }; // Renders Next.js's 404 page
  }

  if (previousIndex < -1) previousIndex = 0;
  if (nextIndex === 0) nextIndex = highlightsData.length - 1;
  if (previousIndex === -1) previousIndex = highlightsData.length - 1;
  if (nextIndex === highlightsData.length) nextIndex = 0;

  const previous = highlightsData[previousIndex];
  const next = highlightsData[nextIndex];

  return { props: { data, previous, next } };
}
