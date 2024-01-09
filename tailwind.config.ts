// import { safelist as AtomicIoTSafelist } from '../../../../fathym-deno/atomic-iot/src/tailwind/safelist.ts';

async function getFilesList(
  directory: string,
  ext?: string,
): Promise<string[]> {
  const foundFiles: string[] = [];

  let dirPath = import.meta.resolve(directory).replace("file:///", "");

  if (dirPath.startsWith("home")) {
    dirPath = `/${dirPath}`;
  }

  for await (const fileOrFolder of Deno.readDir(dirPath)) {
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

  return foundFiles.filter((ff) => (ext ? ff.endsWith(ext) : ff));
}

const files = await getFilesList("./src", ".tsx");
console.log(files);

// export const safelist = new Set([...AtomicIoTSafelist]);
const tailwindComponentsConfig = `export default {
\tRoot: import.meta.resolve("./"),
\tComponents: [\n\t\t"${files.join('",\n\t\t"')}"\n\t],
};`;

console.log(tailwindComponentsConfig);

await Deno.writeTextFile("./tailwind.components.ts", tailwindComponentsConfig, {
  create: true,
});
