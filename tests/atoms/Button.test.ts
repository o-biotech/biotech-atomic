import { 
    assert, 
    assertEquals, 
    afterEach,
    beforeEach,
    describe,
    it,
    DOMParser,
    render
} from "../test_deps.ts"; 

import { Button } from "./src/atoms/Buttons.tsx";

describe("Button Tests", () => {
    beforeEach(() => {
        globalThis.document = new DOMParser().parseFromString(
            "<html></html>", // this the main change
            "text/html"
        ) as unknown as Document;

        window.document = globalThis.document;
    });

    describe("Exists", () => {
        const { container } = render(<Button />);

        assert(container.innerHTML.includes("Login"));
    });
});