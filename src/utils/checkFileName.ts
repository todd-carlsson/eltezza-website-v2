import { distributionNameType, distributionName } from "@/constants";

type Mp4File = `${distributionNameType}/${string}.mp4`;

export function ensureMp4File(filename: string): Mp4File {
  if (!filename.endsWith(".mp4")) {
    throw new Error("Filename must end with .mp4");
  }
  if (!filename.startsWith(distributionName)) {
    throw new Error("Filename must start with Cloudfront distribution name");
  }
  return filename as Mp4File;
}

export function checkIfVideoOrImage(
  filename: string,
): "video" | "image" | undefined {
  if (filename.endsWith(".mp4") || filename.endsWith(".mov")) {
    return "video";
  } else if (
    filename.endsWith(".jpg") ||
    filename.endsWith(".png") ||
    filename.endsWith(".svg") ||
    filename.endsWith(".jpeg")
  ) {
    return "image";
  } else return undefined;
}
