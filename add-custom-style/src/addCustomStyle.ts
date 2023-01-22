export default function addCustomStyle(
  styleidentifier: string,
  selector: string,
  styles: any,
  mediaQuery?: string
) {

  //checking whether provided selector exists
  var querySelector = document.body.querySelector(selector);
  //checking whether id is unique and not null
  var isUniqueId =
    styleidentifier !== "" && document.getElementById(styleidentifier) === null;
  //checking whether there is mediaquery and it matches regex
  var isCorrectMediaQuery = mediaQuery
    ? mediaQuery.match(/\d*(min-width|max-width):\s*(\d+\s?)(px)/g) !== null
    : true;

  if (querySelector && isUniqueId && isCorrectMediaQuery) {

    let finalCss =
      mediaQuery === undefined
        ? selector + styles
        : "@media (" + mediaQuery + ") {" + selector + styles + "}";


    //creating style tag with given id and inserting it to head
    var css = document.createElement("style");
    css.type = "text/css";
    css.setAttribute("id", styleidentifier);
    css.appendChild(document.createTextNode(finalCss));

    document.getElementsByTagName("head")[0].appendChild(css);
  }
}

