import { distributionNameType, distributionName } from "@/constants";

type FileTypes = ".mp4" | ".mov" | ".jpg" | ".jpeg" | ".png" | ".svg";
type Mp4File = `${distributionNameType}/${string}.mp4`;
type File = `${distributionNameType}/${string}${FileTypes}`;

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
  filename: File,
): "video" | "image" | undefined {
  if (filename.endsWith(".mp4") || filename.endsWith(".mov")) {
    return "video";
  } else return "image";
}
