module.exports = function check(str, bracketsConfig) {
		let reg = bracketsConfig.join("|").replace(/,/g, ""), //for numbers
			regexNum = new RegExp(reg,"g"),
  			regex = /\[\]|\{\}|\(\)|\<\>|\|\|/g;
  		if (bracketsConfig.join("").match(/\d/g) != null) regex = regexNum;
        while (str.match(regex) != null) {str = str.replace(regex, "")}
        return str.length == 0
}
