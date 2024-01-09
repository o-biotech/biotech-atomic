// import { safelist as AtomicIoTSafelist } from '../../../../fathym-deno/atomic-iot/src/tailwind/safelist.ts';

async function getFilesList(directory: string): Promise<string[]> {
  const foundFiles: string[] = [];
  for await (const fileOrFolder of Deno.readDir(directory)) {
    if (fileOrFolder.isDirectory) {
      // If it's not ignored, recurse and search this folder for files.
      const nestedFiles = await getFilesList(
        `${directory}/${fileOrFolder.name}`,
      );
      foundFiles.push(...nestedFiles);
    } else {
      // We found a file, so store it.
      foundFiles.push(`${directory}/${fileOrFolder.name}`);
    }
  }
  return foundFiles;
}

const files = await getFilesList("./src");
console.log(files);

// export const safelist = new Set([...AtomicIoTSafelist]);
export const safelist = new Set(files.map((file) => import.meta.resolve(file)));
