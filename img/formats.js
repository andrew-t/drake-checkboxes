import drake from "./drake.js";
import geordi from "./geordi.js";
import matt from "./matt.js";

export default function getBackground(format) {
    format = format?.toLowerCase().replace(/\s/g, '');
    switch (format) {
        case "geordi":
        case "geordie":
        case "geordilaforge":
        case "geordielaforge":
        case "laforge":
            return `url("${geordi}")`;
        case "drake":
        case null:
        case undefined:
            return `url("${drake}")`;
        case "matt":
        case "mattparker":
        case "parker":
            return `url("${matt}")`;
        default:
            console.log("Unexpected format:", format);
            return format;
    }
}
