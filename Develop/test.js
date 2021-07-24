function replaceString(text, string, newString) {
    let arr = text.split(string);
    let newText = arr.join(newString);
    return newText;
  };

  let mystring = "hello my name is jeremy and i like to party";

  console.log(replaceString(mystring, "jeremy", "the party monster"))