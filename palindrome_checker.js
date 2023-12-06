function palindrome(str) {
    let filtered_str = str.match(/[A-Za-z0-9]/g).join('');
    filtered_str = filtered_str.toLowerCase();

    for (let i = 0; i < filtered_str.length; i++) {
      if (filtered_str[i] !== filtered_str[filtered_str.length - i - 1]) {
        return false;
      };
    };

    return true;
}
  
console.log(palindrome("A man, a plan, a canal. Panama"));