
// 1
function firstNonRepeatedCharacter1(string) {
    for (var i = 0; i < string.length; i++) {
      var c = string.charAt(i);
      if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
        return c;
      }
    }
    return null;
  }

  // 2
  function firstNonRepeatingCharacter2(str) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
        return char;
      }
    }
    return "_";
  }

  s = "abacabad"
  console.log(firstNonRepeatedCharacter1(s))