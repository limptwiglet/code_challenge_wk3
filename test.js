var input = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nunc, suscipit eget dignissim sed, iaculis sed dolor. Curabitur et rhoncus est. Aenean eget turpis aliquam, ullamcorper magna ut, mollis mi. Aliquam accumsan massa ac lobortis ultrices. Vestibulum nec ipsum sem. Duis convallis at mi a suscipit. Sed eleifend, mi non tempus aliquam, nibh risus vestibulum arcu, quis tempor arcu nisl in dui. Ut sapien purus, congue non tincidunt vel, imperdiet eget risus. Fusce ut malesuada eros. Nullam accumsan, leo ac pharetra hendrerit, mauris est ornare tortor, scelerisque accumsan massa nulla id nulla. Aenean auctor mi id ultricies convallis. Fusce varius vel arcu vitae aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est nunc, suscipit eget dignissim sed, iaculis sed dolor. Curabitur et rhoncus est. Aenean eget turpis aliquam, ullamcorper magna ut, mollis mi. Aliquam accumsan massa ac lobortis ultrices. Vestibulum nec ipsum sem. Duis convallis at mi a suscipit. Sed eleifend, mi non tempus aliquam, nibh risus vestibulum arcu, quis tempor arcu nisl in dui. Ut sapien purus, congue non tincidunt vel, imperdiet eget risus. Fusce ut malesuada eros. Nullam accumsan, leo ac pharetra hendrerit, mauris est ornare tortor, scelerisque accumsan massa nulla id nulla. Aenean auctor mi id ultricies convallis. Fusce varius vel arcu vitae aliquam.";

function calc(input) {
  var m = 100 / input.length;
  var next = input.split('').sort();
  var charHash = {};

  while(next.length) {
    var char = next[0];
    charHash[char] = next.splice(0, next.lastIndexOf(char)+1).length * m;
  }

  return charHash;
}

console.time('t');
console.log('Total chars:', calc(input));
console.timeEnd('t');
