const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");

textInput.addEventListener("input", function(){
   const remainingChars = 255 - textInput.value.length;
   charCount.textContent = remainingChars;

})