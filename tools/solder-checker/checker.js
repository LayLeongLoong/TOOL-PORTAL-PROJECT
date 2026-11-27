// Solder Joint Checker.
// The photo stays in the browser; nothing is uploaded.
// analysePhoto() is a demo stand-in. Later it will send the photo to the real checker.
(function () {
  var input = document.getElementById("photo");
  var preview = document.getElementById("preview");
  var checkButton = document.getElementById("check");
  var result = document.getElementById("result");
  var verdict = document.getElementById("verdict");
  var reason = document.getElementById("reason");
  var previewUrl = null;
  var demoCount = 0;

  var DEMO_RESULTS = [
    { good: true, reason: "Shiny, smooth and cone-shaped, with solder flowing onto both the pin and the pad." },
    { good: false, reason: "Dull and grainy, which suggests a cold joint. Reheat it with a little fresh solder." }
  ];

  // Demo: alternates between a good and a bad example so both can be seen.
  function analysePhoto(file) {
    return new Promise(function (resolve) {
      var answer = DEMO_RESULTS[demoCount % DEMO_RESULTS.length];
      demoCount++;
      setTimeout(function () { resolve(answer); }, 600);
    });
  }

  input.addEventListener("change", function () {
    var file = input.files[0];
    result.hidden = true;
    if (previewUrl) { URL.revokeObjectURL(previewUrl); previewUrl = null; }

    if (!file || file.type.indexOf("image/") !== 0) {
      preview.hidden = true;
      checkButton.disabled = true;
      return;
    }
    previewUrl = URL.createObjectURL(file);
    preview.src = previewUrl;
    preview.hidden = false;
    checkButton.disabled = false;
  });

  checkButton.addEventListener("click", function () {
    var file = input.files[0];
    if (!file) return;
    checkButton.disabled = true;
    checkButton.textContent = "Checking…";

    analysePhoto(file).then(function (answer) {
      verdict.textContent = answer.good ? "✓ Looks good" : "✗ Needs work";
      verdict.className = "result-verdict " + (answer.good ? "good" : "bad");
      reason.textContent = answer.reason;
      result.hidden = false;
    }).finally(function () {
      checkButton.disabled = false;
      checkButton.textContent = "Check joint";
    });
  });
})();
