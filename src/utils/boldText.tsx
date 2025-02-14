export const boldText = (text: string) => {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} style={{ fontWeight: 800 }}>
        {" "}
        {part.slice(2, -2)}{" "}
      </strong>
    ) : (
      part
    ),
  );
};
