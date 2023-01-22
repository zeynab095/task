export default function addCustomStyle(
  styleidentifier: string,
  selector: string,
  styles: any,
  mediaQuery?: string
) {
  var querySelector = document.body.querySelector(selector);
  var isUniqueId =
    styleidentifier !== "" && document.getElementById(styleidentifier) === null;
  var isCorrectMediaQuery = mediaQuery
    ? mediaQuery.match(/\d*(min-width|max-width):\s*(\d+\s?)(px)/g) !== null
    : true;

  if (querySelector && isUniqueId && isCorrectMediaQuery) {
    console.log(mediaQuery);
    let finalCss =
      mediaQuery === undefined
        ? selector + styles
        : "@media (" + mediaQuery + ") {" + selector + styles + "}";

    console.log(finalCss);

    var css = document.createElement("style");
    css.type = "text/css";
    css.setAttribute("id", styleidentifier);
    css.appendChild(document.createTextNode(finalCss));

    document.getElementsByTagName("head")[0].appendChild(css);
  }
}

/* Set the style */
