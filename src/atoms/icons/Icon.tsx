import { JSX } from "preact";
import { Signal } from "@preact/signals";

export enum IconStyleTypes {
  Outline = 1 << 0,
  Solid = 1 << 1,
  Mini = 1 << 2,
}

export interface IconProps extends JSX.HTMLAttributes<SVGElement> {
  iconStyle?: IconStyleTypes;
}

export let IconsRoot: Signal<string> = new Signal<string>(
  "https://raw.githubusercontent.com/tailwindlabs/heroicons/master/src/", //24/solid/academic-cap.svg
);

export function useIconsRoot(props: IconProps) {
  return {
    iconsRoot: IconsRoot,
    setIconsRoot: (root: string) => {
      IconsRoot.value = root;
    },
    useIcon: (iconName: string) => {
      const size = props.iconStyle === IconStyleTypes.Mini ? 20 : 24;

      const style = props.iconStyle === IconStyleTypes.Outline
        ? "outline"
        : "solid";

      const icon: Signal<JSX.HTMLAttributes<SVGElement>> = new Signal<
        JSX.HTMLAttributes<SVGElement>
      >();

      const iconUrl = `${IconsRoot}${size}/${style}/${iconName}.svg`;

      console.log(iconUrl);

      import(iconUrl).then((s: JSX.HTMLAttributes<SVGElement>) => {
        console.log(s);

        s.class = [s.class, props.class || props.className].filter((c) => c)
          .join(" ");

        icon.value = s;
      })
        .catch(console.log);

      return { icon };
    },
  };
}
